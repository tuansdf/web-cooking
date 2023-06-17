import clsx from "clsx";
import { Heart } from "~/components/heart";
import { StarIcon } from "~/components/star-icon";
import classes from "./product-card.module.scss";

type Props = {
  title: string;
  subtitle: string;
  score: number;
  favorites: number;
  className?: string;
  size?: "normal" | "large";
};

export const ProductCard = ({
  title,
  subtitle,
  score,
  favorites,
  className,
  size = "normal",
}: Props) => {
  return (
    <div
      className={clsx(classes["card"], classes[`is-size-${size}`], className)}
    >
      <img className={classes["card-image"]} />
      <div className={classes["card-body"]}>
        <div className={classes["card-left"]}>
          <h3 className={classes["card-title"]}>{title}</h3>
          <p className={classes["card-subtitle"]}>{subtitle}</p>
          <div className={classes["card-stars"]}>
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <span className={classes["card-score"]}>({score.toFixed(1)})</span>
          </div>
        </div>

        <div className={classes["card-right"]}>
          {/* heart icon */}
          <Heart />
          <div className={classes["card-favorites"]}>{favorites}</div>
        </div>
      </div>
    </div>
  );
};
