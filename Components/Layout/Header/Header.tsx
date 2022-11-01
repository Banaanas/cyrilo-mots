import { useRouter } from "next/router";

import { navLinks } from "../../../data/navlinks";
import { getHeaderLinks } from "./Header.helpers";
import {
  Heading,
  Separator,
  StyledHeader,
  SubHeader,
  SubHeaderLink,
} from "./Header.styles";

const Header = () => {
  const { pathname } = useRouter();

  // Header Links location are different in function of the Page
  const { headerLink, subheaderLink } = getHeaderLinks(pathname);

  return (
    <StyledHeader>
      <SubHeader>
        <SubHeaderLink href={subheaderLink.href} lightColor>
          {subheaderLink.name}
        </SubHeaderLink>
        <SubHeaderLink href={navLinks.logout.href} data-test="logout-button">
          Déconnexion
        </SubHeaderLink>
      </SubHeader>
      <Separator />
      <Heading>{headerLink.name}</Heading>
    </StyledHeader>
  );
};

export default Header;
