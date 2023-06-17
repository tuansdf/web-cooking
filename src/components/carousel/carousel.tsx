import { CarouselCircle } from "~/components/carousel/carousel-circle";
import { StarIcon } from "~/components/star-icon";
import classes from "./carousel.module.scss";
import { Container } from "~/components/container";

export const Carousel = () => {
  return (
    <div className={classes["carousel"]}>
      <Container>
        <div className={classes["carousel-content"]}>
          <h2 className={classes["carousel-title"]}>
            Four-Cheese Baked Spaghetti
          </h2>
          <p className={classes["carousel-subtitle"]}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <div className={classes["carousel-stars"]}>
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <span className={classes["carousel-score"]}>(5.0)</span>
          </div>
          <div className={classes["carousel-circles"]}>
            <CarouselCircle active />
            <CarouselCircle />
            <CarouselCircle />
            <CarouselCircle />
          </div>
        </div>
      </Container>
    </div>
  );
};
