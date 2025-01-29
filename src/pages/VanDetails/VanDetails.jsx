import "./VanDetails.css";
import Tag from "../../components/Tag/Tag";
import vanImage from "../../assets/van.png";
import { Link } from "react-router-dom";

export default function VanDetails() {
  return (
    <main className="van-detail__main-content">
      <section className="van-detail__back-link">
        ← <Link to="/vans">Back to all vans</Link>
      </section>
      <div className="van-detail__image">
        <img src={vanImage} />
      </div>
      <article className="van-detail__article">
        <div className="van-detail__title-section">
          <Tag tag={"Simple"} />
          <h3 className="van-detail__title">Modest Explorer</h3>
          <div className="van-detail__price">
            <span className="van-detail__price-amount">$60</span>/day
          </div>
        </div>
        <p>
          The Modest Explorer is a van designed to get you out of the house and
          into nature. This beauty is equipped with solar panels, a composting
          toilet, a water tank and kitchenette. The idea is that you can pack up
          your home and escape for a weekend or even longer!
        </p>
      </article>
      <button className="van-detail__rent-button">Rent this van</button>
    </main>
  );
}
