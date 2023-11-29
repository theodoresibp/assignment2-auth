interface NavItem {
  title: string;
  href: string;
  icon?: unknown;
  description?: string;
  submenu?: boolean;
  subMenuItems?: NavItem[];
}
