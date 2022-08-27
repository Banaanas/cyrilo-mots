import { zodResolver } from "@hookform/resolvers/zod";
import { supabaseClient } from "@supabase/auth-helpers-nextjs";
import React, { useId } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Container,
  Form,
  FormContainer,
  Input,
  Label,
} from "./LoginForm.styles";
import LoginFormButton from "./LoginFormButton";
import LoginFormError from "./LoginFormError";
import LoginFormSuccess from "./LoginFormSuccess";

// Form Validation Schema - Yup
const loginValidationSchema = z.object({
  email: z
    .string()
    .email({ message: "Veuillez renseigner une adresse mail valide." }),
});

const noNewSignupMessage = "Les inscriptions ne sont pas acceptées en l'état.";
const tooMuchRequests =
  "Veuillez attendre 60 secondes avant de soumettre le formulaire de nouveau";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful, isSubmitting, isValidating },
    setError,
  } = useForm<FormValues>({
    resolver: zodResolver(loginValidationSchema),
    mode: "onSubmit",
  });

  // Set unique ID to Input
  const inputID = useId();

  const handleFormSubmit = async (formData: FormValues) => {
    const { email } = formData;

    try {
      const { error } = await supabaseClient.auth.signIn({ email });
      if (error) {
        if (error.status === 403) {
          setError("email", { type: "custom", message: noNewSignupMessage });
        }
        if (error.status === 429) {
          setError("email", { type: "custom", message: tooMuchRequests });
        } else {
          setError("email", {
            type: "custom",
            message: error.message,
          });
        }
      }
    } catch (error) {
      throw new Error();
    }
  };

  return (
    <FormContainer>
      {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
      <Form onSubmit={handleSubmit(handleFormSubmit)}>
        <Container>
          <Label htmlFor={inputID}>Renseignez votre e-mail :</Label>
          <Input
            id={inputID}
            autoComplete="off"
            placeholder="adressse@mail.fr"
            {...register("email", { required: true })}
          />
        </Container>
        <LoginFormButton isLoading={isSubmitting || isValidating} />
      </Form>
      {isSubmitSuccessful && !isSubmitting ? <LoginFormSuccess /> : null}
      {errors && !isSubmitting ? (
        <LoginFormError text={errors?.email?.message} />
      ) : null}
    </FormContainer>
  );
};

export default LoginForm;

interface FormValues {
  email: string;
}
