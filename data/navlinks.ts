export const navLinks: NavLinks = {
  home: {
    name: "Mes mots",
    href: "/",
  },
  allWords: {
    name: "Tous mes mots",
    href: "/all-words",
  },
  login: {
    name: "Login",
    href: "/login",
  },
  logout: {
    name: "Logout",
    href: "/api/auth/logout",
  },
};

export interface NavLink {
  name: string;
  href: string;
}

interface NavLinks {
  home: NavLink;
  allWords: NavLink;
  login: NavLink;
  logout: NavLink;
}
