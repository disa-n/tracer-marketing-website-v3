// interface
interface NavItem {
  name: string;
  link: string;
}

export const navItems: NavItem[] = [
  {
    name: "Technology",
    link: "/#",
  },
  {
    name: "Platform",
    link: "/#",
  },
  {
    name: "About",
    link: "/about",
  },
  // Old configuration (commented out for backup):
  // {
  //   name: "Blog",
  //   link: "/blog",
  // },
  {
    name: "Resources",
    link: "/resources",
  },
];
