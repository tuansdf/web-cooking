import { CarouselCircle, Navbar, StarIcon } from "~/components";
import classes from "./page.module.scss";

export default function Home() {
  return (
    <main>
      <Navbar />

      <div className={classes["carousel"]}>
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
      </div>
    </main>
  );
}
