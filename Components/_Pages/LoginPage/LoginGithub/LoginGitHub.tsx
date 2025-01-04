import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { GitHub as GitHubIcon } from "react-feather";

import { LoginButton } from "../LoginButton/LoginButton.styles";

export const LoginGitHub = () => {
  const supabaseClient = useSupabaseClient();

  const signIgnWithGitHub = async () => {
    try {
      await supabaseClient.auth.signInWithOAuth({
        provider: "github",
      });
    } catch {
      throw new Error();
    }
  };

  return (
    <LoginButton type="button" onClick={signIgnWithGitHub}>
      <GitHubIcon aria-hidden="true" />
      Me connecter avec GitHub
    </LoginButton>
  );
};
