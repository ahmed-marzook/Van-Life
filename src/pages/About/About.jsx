import "./About.css";
import starVanManImg from "../../assets/star-van-man.png";
import { Link } from "react-router";

export default function About() {
  return (
    <main className="about__main-content">
      <section className="about__image-container">
        <img src={starVanManImg} className="about__image" />
      </section>
      <article className="about__article">
        <h2 className="about__header">
          Don’t squeeze in a sedan when you could relax in a van.
        </h2>
        <p className="about__paragraph">
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉)
        </p>
        <p className="about__paragraph">
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>

        <section className="about__explore">
          <div className="about__explore-header-group">
            <h3 className="about__explore-header">
              Your destination is waiting.
            </h3>
            <h3 className="about__explore-header">Your van is ready.</h3>
          </div>
          <Link to="/Van-Life/vans" className="about__explore-our-vans-button">
            Explore our vans
          </Link>
        </section>
      </article>
    </main>
  );
}
