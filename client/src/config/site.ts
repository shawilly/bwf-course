export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "BETR",
  description: "Be the odds.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Groups",
      href: "/groups",
    },
    {
      label: "Pricing",
      href: "/pricing",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "About",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/shawilly/bwf-course",
    docs: "https://nextui-docs-v2.vercel.app",
    course: "https://www.udemy.com/course/react-django-full-stack-advance",
  },
};
