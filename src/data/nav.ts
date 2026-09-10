/** Section order for the page + the anchor nav. Keep in sync with index.astro. */
export interface NavItem {
  id: string;
  label: string;
  /** two-digit index shown as a mono label */
  index: string;
}

export const navItems: NavItem[] = [
  { id: "about", label: "About", index: "01" },
  { id: "work", label: "Work", index: "02" },
  { id: "stack", label: "Stack", index: "03" },
  { id: "experience", label: "Experience", index: "04" },
  { id: "contact", label: "Contact", index: "05" },
];
