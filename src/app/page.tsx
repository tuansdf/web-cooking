import { Carousel, Container, Navbar, ProductCard } from "~/components";
import classes from "./page.module.scss";
import clsx from "clsx";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
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

        <Container className={classes["section"]}>
          <h3 className={classes["question-title"]}>What is CookingCK?</h3>
          <div className={classes["question-container"]}>
            <div className={classes["question-left"]}>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.. Amet minim
                mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                Velit officia consequat duis enim velit mollit. Exercitation
                veniam consequat sunt nostrud amet. Amet minim mollit non
                deserunt ullamco est sit aliqua dolor do amet sint. Velit
                officia consequat duis enim velit mollit.
              </p>
              <p>
                Exercitation veniam consequat sunt nostrud amet. Amet minim
                mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                Velit officia consequat duis enim velit mollit. Exercitation
                veniam consequat sunt nostrud amet. Amet minim mollit non
                deserunt ullamco est sit aliqua dolor do amet sint. Velit
                officia consequat duis enim velit mollit. Exercitation veniam
                consequat sunt nostrud amet.
              </p>
              <button className={classes["question-button"]}>Learn more</button>
            </div>

            <div className={classes["question-right"]}>
              <img className={classes["question-image"]} />
            </div>
          </div>
        </Container>

        <div className={classes["new-recipes-container"]}>
          <Container
            className={clsx(classes["section"], classes["is-inverted"])}
          >
            <h3 className={classes["new-recipes-title"]}>New Recipes</h3>
            <div className={classes["new-recipes-scroll"]}>
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
        </div>

        <Container className={classes["section"]}>
          <div className={classes["cta-content"]}>
            <h4 className={classes["cta-title"]}>
              Join our member and get a discount voucher
            </h4>
            <div className={classes["cta-input-container"]}>
              <input
                type="text"
                className={classes["cta-input"]}
                placeholder="Enter your email"
              />
              <button className={classes["cta-button"]}>Sign in</button>
            </div>
          </div>
        </Container>

        <footer className={classes["footer-container"]}>
          <Container
            className={clsx(
              classes["section"],
              classes["footer-inner-container"]
            )}
          >
            <div className={classes["footer-brand"]}>
              <img className={classes["footer-logo"]} src="/images/logo.svg" />
              <p>
                At duis enim velit mollit. Exercitation veniam consequat sunt
                nostrud amet.
              </p>
            </div>

            <div className={classes["footer-lists"]}>
              <div>
                <div className={classes["footer-list-title"]}>Support</div>
                <ul className={classes["footer-list"]}>
                  <li>
                    <Link href="https://www.google.com">Account</Link>
                  </li>
                  <li>
                    <Link href="https://www.google.com">Support Centers</Link>
                  </li>
                  <li>
                    <Link href="https://www.google.com">Feedbacks</Link>
                  </li>
                  <li>
                    <Link href="https://www.google.com">Accessibility</Link>
                  </li>
                </ul>
              </div>

              <div>
                <div className={classes["footer-list-title"]}>Useful links</div>
                <ul className={classes["footer-list"]}>
                  <li>
                    <Link href="https://www.google.com">Payment & Tax</Link>
                  </li>
                  <li>
                    <Link href="https://www.google.com">Term of Service</Link>
                  </li>
                  <li>
                    <Link href="https://www.google.com">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="https://www.google.com">About us</Link>
                  </li>
                </ul>
              </div>

              <div>
                <div className={classes["footer-list-title"]}>Get in touch</div>
                <ul className={classes["footer-list"]}>
                  <li>
                    <Link href="https://www.google.com">ckingck@gmail.com</Link>
                  </li>
                  <li>
                    <Link href="https://www.google.com">+84 0366400701</Link>
                  </li>
                </ul>
              </div>

              <div>
                <div className={classes["footer-list-title"]}>
                  Social Networking
                </div>
                <ul className={classes["footer-social-list"]}>
                  <li>
                    <img src="/images/facebook.svg" />
                  </li>
                  <li>
                    <img src="/images/linkedin.svg" />
                  </li>
                  <li>
                    <img src="/images/twitter.svg" />
                  </li>
                  <li>
                    <img src="/images/youtube.svg" />
                  </li>
                </ul>
              </div>
            </div>
          </Container>
        </footer>
      </main>
    </>
  );
}
