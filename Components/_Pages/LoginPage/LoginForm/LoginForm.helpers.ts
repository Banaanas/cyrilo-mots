import { AuthApiError } from "@supabase/supabase-js";
import { UseFormSetError } from "react-hook-form";

import { LoginFormValues } from "../../../../types/types";

const invalidLoginCredentials =
  "Votre email et/ou votre mot de passe sont invalides.";
const noNewSignupMessage = "Les inscriptions ne sont pas acceptées en l'état.";
const tooMuchRequests =
  "Veuillez attendre 60 secondes avant de soumettre le formulaire de nouveau";

export const getErrorMessage: GetErrorMessage = (setError, error) => {
  if (!error) return;

  switch (error.status) {
    case 400:
      setError("email", {
        type: "custom",
        message: invalidLoginCredentials,
      });
      break;

    case 403:
      setError("email", { type: "custom", message: noNewSignupMessage });
      break;

    case 429:
      setError("email", { type: "custom", message: tooMuchRequests });
      break;

    default:
      setError("email", {
        type: "custom",
        message: error.message,
      });
  }
};

type GetErrorMessage = (
  setError: UseFormSetError<LoginFormValues>,
  error: AuthApiError | null,
) => void;
