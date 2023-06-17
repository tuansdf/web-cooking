import clsx from "clsx";
import classes from "./navbar-item.module.scss";

type Props = {
  text: string;
  active?: boolean;
};

export const NavbarItem = ({ text, active }: Props) => {
  return (
    <div
      className={clsx(classes["navbar-item"], {
        [classes["is-active"]]: active,
      })}
    >
      {text}
    </div>
  );
};
