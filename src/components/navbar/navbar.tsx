import { NavbarItem } from "~/components/navbar/navbar-item";
import classes from "./navbar.module.scss";
import { NavbarSearchInput } from "~/components/navbar/navbar-search-input";
import { FakeIcon } from "~/components/fake-icon";

export const Navbar = () => {
  return (
    <div className={classes["nav"]}>
      <nav className={classes["nav-left"]}>
        <NavbarItem text="Home" active />
        <NavbarItem text="Ingredients" />
        <NavbarItem text="Diets" />
        <NavbarItem text="Seasonal" />
        <NavbarItem text="Cuisines" />
      </nav>

      <div className={classes["nav-right"]}>
        <NavbarSearchInput />
        <FakeIcon />
        <FakeIcon />
      </div>
    </div>
  );
};
