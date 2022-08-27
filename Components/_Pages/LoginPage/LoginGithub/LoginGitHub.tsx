import { supabaseClient } from "@supabase/auth-helpers-nextjs";
import React from "react";
import { GitHub as GitHubIcon } from "react-feather";

import { LoginButton } from "../LoginButton/LoginButton.styles";

const LoginGitHub = () => {
  const signIgnWithGitHub = async () => {
    try {
      await supabaseClient.auth.signIn({
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
      data-test="github-login-button"
    >
      <GitHubIcon aria-hidden="true" />
      Me connecter avec GitHub
    </LoginButton>
  );
};

export default LoginGitHub;
