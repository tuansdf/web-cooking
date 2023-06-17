import clsx from "clsx";
import classes from "./carousel-circle.module.scss";

type Props = {
  active?: boolean;
};

export const CarouselCircle = ({ active }: Props) => {
  return (
    <div
      className={clsx(classes["circle"], { [classes["is-active"]]: active })}
    ></div>
  );
};
