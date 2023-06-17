import classes from "./navbar-search-input.module.scss";

export const NavbarSearchInput = () => {
  return (
    <div className={classes["input-container"]}>
      <input
        type="search"
        className={classes["input"]}
        placeholder="Search 2M+ recipes"
      />
      <div className={classes["icon"]}></div>
    </div>
  );
};
