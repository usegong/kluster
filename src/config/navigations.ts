type Navigation = {
  name: string;
  href: string;
  external?: boolean;
  dropdown?: Navigation[];
};

export const layoutNavigations: Navigation[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Products",
    href: "/#products",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Contact us",
    href: "/#contact-us",
  },
];
