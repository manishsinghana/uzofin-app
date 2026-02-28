import type { MenuItem } from "../../../../types/common";

export const menuItems:MenuItem[] = [
  {
    id: "1",
    label: "AI Banking",
    href: "/",
  },
  {
    id: "2",
    label: "Payments",
    children: [
      {
        id: "2_1",
        label: "Link 1",
        href: "/",
      },
      {
        id: "2_2",
        label: "Link 2",
        href: "/",
      }
    ],
  },
  {
    id: "3",
    label: "Payouts",
    children: [
      {
        id: "2_1",
        label: "Link 1",
        href: "/",
      },
      {
        id: "2_2",
        label: "Link 2",
        href: "/",
      }
    ],
  },
  {
    id: "4",
    label: "Support",
    href: "/support",
  }
];