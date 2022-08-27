import NextLink from "next/link";
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
        <NextLink href={subheaderLink.href} passHref>
          <SubHeaderLink lightColor>{subheaderLink.name}</SubHeaderLink>
        </NextLink>
        <NextLink href={navLinks.logout.href} passHref>
          <SubHeaderLink as="button" data-test="logout-button">
            Déconnexion
          </SubHeaderLink>
        </NextLink>
      </SubHeader>
      <Separator />
      <Heading>{headerLink.name}</Heading>
    </StyledHeader>
  );
};

export default Header;
