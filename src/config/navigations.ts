type Navigation = {
  name: string;
  href: string;
  external?: boolean;
  dropdown?: Navigation[];
};

export const layoutNavigations: Navigation[] = [
  {
    name: "Home",
    href: "",
  },
  {
    name: "Products",
    href: "",
  },
  {
    name: "Projects",
    href: "",
  },
  {
    name: "Contact us",
    href: "",
  },
];
