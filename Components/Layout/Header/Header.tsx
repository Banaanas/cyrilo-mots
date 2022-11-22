import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";

import { navLinks } from "../../../data/navlinks";
import { getHeaderLinks } from "./Header.helpers";
import {
  Heading,
  Separator,
  StyledHeader,
  SubHeader,
  SubHeaderButton,
  SubHeaderLink,
} from "./Header.styles";

const Header = () => {
  const supabaseClient = useSupabaseClient();
  const { pathname, push } = useRouter();

  // Header Links location are different in function of the Page
  const { headerLink, subheaderLink } = getHeaderLinks(pathname);

  const handleLogOut = async () => {
    await supabaseClient.auth.signOut();
    // eslint-disable-next-line no-void
    void push(navLinks.login.href);
  };

  return (
    <StyledHeader>
      <SubHeader>
        <SubHeaderLink href={subheaderLink.href} color="light">
          {subheaderLink.name}
        </SubHeaderLink>
        <SubHeaderButton
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          onClick={handleLogOut}
          data-test="logout-button"
        >
          Déconnexion
        </SubHeaderButton>
      </SubHeader>
      <Separator />
      <Heading>{headerLink.name}</Heading>
    </StyledHeader>
  );
};

export default Header;
