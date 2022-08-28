import { zodResolver } from "@hookform/resolvers/zod";
import { supabaseClient } from "@supabase/auth-helpers-nextjs";
import React, { useId } from "react";
import { Lock as PasswordIcon, Mail as MailIcon } from "react-feather";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { LoginFormValues } from "../../../../types/types";
import { getErrorMessage } from "./LoginForm.helpers";
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
  password: z.string(),
});

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful, isSubmitting, isValidating },
    setError,
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginValidationSchema),
    mode: "onSubmit",
  });

  // Set unique ID to Inputs
  const mailInputID = useId();
  const passwordInputID = useId();

  const handleFormSubmit = async (formData: LoginFormValues) => {
    const { email, password } = formData;

    try {
      const { error } = await supabaseClient.auth.signIn({
        email,
        password,
      });

      if (error) {
        getErrorMessage(setError, error);
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
          <Label htmlFor={mailInputID}>
            <PasswordIcon size="20px" />
            <span>E-mail :</span>
          </Label>
          <Input
            id={mailInputID}
            autoComplete="off"
            placeholder="adressse@mail.fr"
            data-test="login-mail-input"
            {...register("email", { required: true })}
          />
        </Container>
        <Container>
          <Label htmlFor={passwordInputID}>
            <MailIcon size="20px" />
            <span>Mot de passe :</span>
          </Label>
          <Input
            id={passwordInputID}
            type="password"
            autoComplete="off"
            placeholder="***************"
            data-test="login-password-input"
            {...register("password", { required: true })}
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
