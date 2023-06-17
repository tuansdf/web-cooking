import { Carousel, Container, Navbar, ProductCard } from "~/components";
import classes from "./page.module.scss";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Carousel />
      <Container className={classes["section"]}>
        <h2 className={classes["section-title"]}>Just for you</h2>
        <div className={classes["products"]}>
          <ProductCard
            title="Four-Cheese Baked Spaghetti"
            subtitle="BRAILLA"
            score={5.0}
            favorites={100}
            size="large"
          />
          <ProductCard
            title="Four-Cheese Baked Spaghetti"
            subtitle="BRAILLA"
            score={5.0}
            favorites={100}
          />
          <ProductCard
            title="Four-Cheese Baked Spaghetti"
            subtitle="BRAILLA"
            score={5.0}
            favorites={100}
          />
          <ProductCard
            title="Four-Cheese Baked Spaghetti"
            subtitle="BRAILLA"
            score={5.0}
            favorites={100}
          />
          <ProductCard
            title="Four-Cheese Baked Spaghetti"
            subtitle="BRAILLA"
            score={5.0}
            favorites={100}
          />
        </div>
      </Container>
    </main>
  );
}
