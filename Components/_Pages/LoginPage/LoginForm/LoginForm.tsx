import { zodResolver } from "@hookform/resolvers/zod";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import { useId } from "react";
import { Lock as PasswordIcon, Mail as MailIcon } from "react-feather";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { navLinks } from "../../../../data/navlinks";
import { LoginFormValues } from "../../../../types/types";
import { getErrorMessage } from "./LoginForm.helpers";
import {
  Container,
  Form,
  FormContainer,
  Input,
  Label,
} from "./LoginForm.styles";
import { LoginFormButton } from "./LoginFormButton";
import { LoginFormError } from "./LoginFormError";
import { AuthApiError } from "@supabase/supabase-js";

// Form Validation Schema - Zod
const loginValidationSchema = z.object({
  email: z
    .string()
    .email({ message: "Veuillez renseigner une adresse mail valide." }),
  password: z.string(),
});

export const LoginForm = () => {
  const supabaseClient = useSupabaseClient();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValidating },
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
      const {
        data: { user },
        error,
      } = await supabaseClient.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        // Cast the error to AuthApiError to resolve the type mismatch
        getErrorMessage(setError, error as AuthApiError);
      }

      if (user) await router.push(navLinks.home.href);
    } catch {
      throw new Error();
    }
  };

  return (
    <FormContainer>
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
      {errors && !isSubmitting ? (
        <LoginFormError text={errors?.email?.message} />
      ) : null}
    </FormContainer>
  );
};
