import { NavLink, navLinks } from "../../../data/navlinks";

export const getHeaderLinks: GetHeaderLinks = (pathname) => {
  if (pathname === navLinks.home.href) {
    return { headerLink: navLinks.home, subheaderLink: navLinks.allWords };
  }

  return { headerLink: navLinks.allWords, subheaderLink: navLinks.home };
};

interface HeaderLinks {
  headerLink: NavLink;
  subheaderLink: NavLink;
}

type GetHeaderLinks = (pathname: string) => HeaderLinks;
