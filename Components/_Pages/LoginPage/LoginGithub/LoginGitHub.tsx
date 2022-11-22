import { useSupabaseClient } from "@supabase/auth-helpers-react";
import React from "react";
import { GitHub as GitHubIcon } from "react-feather";

import { LoginButton } from "../LoginButton/LoginButton.styles";

const LoginGitHub = () => {
  const supabaseClient = useSupabaseClient();

  const signIgnWithGitHub = async () => {
    try {
      await supabaseClient.auth.signInWithOAuth({
        provider: "github",
      });
    } catch (error) {
      throw new Error();
    }
  };

  return (
    <LoginButton
      type="button"
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onClick={signIgnWithGitHub}
    >
      <GitHubIcon aria-hidden="true" />
      Me connecter avec GitHub
    </LoginButton>
  );
};

export default LoginGitHub;
