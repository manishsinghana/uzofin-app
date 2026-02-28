import { MenuItem } from "../MenuItem";
import type { MenuItemType } from "../MenuItem";

interface NavMenuProps {
  items: MenuItemType[];
  className?: string;
}

function NavMenu({ items, className }: NavMenuProps) {
  return (
    <ul className={className}>
      {items.map((item) => (
        <MenuItem key={item.id} {...item} />
      ))}
    </ul>
  );
}

export { NavMenu };