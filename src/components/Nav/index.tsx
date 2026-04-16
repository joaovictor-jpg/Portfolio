import { NavLink } from "@mantine/core";

const data = ["About", "Skills", "Projects", "Contact"];
export function Nav() {
  return data.map((item, index) => (
    <NavLink key={`${item}-${index}`} label={item} />
  ));
}