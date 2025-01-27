import "./Vans.css";
import vanImage from "../../assets/van.png";

export default function Vans() {
  return (
    <main>
      <section>
        <h1 className="vans__heading">Explore our van options</h1>
      </section>
      <section className="vans_options">
        <button className="vans__options-buttons">Simple</button>
        <button className="vans__options-buttons">Luxury</button>
        <button className="vans__options-buttons">Rugged</button>
        <button className="vans__options-clear-button">Clear filters</button>
      </section>
      <section className="vans__list">
        {/* van one */}
        <div className="vans_card">
          <div className="vans__card-image">
            <img src={vanImage} />
          </div>
          <div className="vans__card-content">
            <div className="vans__card-title-section">
              <h3 className="vans__card-title">Modest Explorer</h3>
              <span className="vans__card-tag">Simple</span>
            </div>
            <div className="vans__card-price">
              <span className="vans__price-amount">$60</span>
              <span className="vans__price-period">/day</span>
            </div>
          </div>
        </div>
        {/* van two */}
        <div className="vans_card">
          <div className="vans__card-image">
            <img src={vanImage} />
          </div>
          <div className="vans__card-content">
            <div className="vans__card-title-section">
              <h3 className="vans__card-title">Modest Explorer</h3>
              <span className="vans__card-tag">Simple</span>
            </div>
            <div className="vans__card-price">
              <span className="vans__price-amount">$60</span>
              <span className="vans__price-period">/day</span>
            </div>
          </div>
        </div>
        {/* van three */}
        <div className="vans_card">
          <div className="vans__card-image">
            <img src={vanImage} />
          </div>
          <div className="vans__card-content">
            <div className="vans__card-title-section">
              <h3 className="vans__card-title">Modest Explorer</h3>
              <span className="vans__card-tag">Simple</span>
            </div>
            <div className="vans__card-price">
              <span className="vans__price-amount">$60</span>
              <span className="vans__price-period">/day</span>
            </div>
          </div>
        </div>
        {/* van four */}
        <div className="vans_card">
          <div className="vans__card-image">
            <img src={vanImage} />
          </div>
          <div className="vans__card-content">
            <div className="vans__card-title-section">
              <h3 className="vans__card-title">Modest Explorer</h3>
              <span className="vans__card-tag">Simple</span>
            </div>
            <div className="vans__card-price">
              <span className="vans__price-amount">$60</span>
              <span className="vans__price-period">/day</span>
            </div>
          </div>
        </div>
        {/* van five */}
        <div className="vans_card">
          <div className="vans__card-image">
            <img src={vanImage} />
          </div>
          <div className="vans__card-content">
            <div className="vans__card-title-section">
              <h3 className="vans__card-title">Modest Explorer</h3>
              <span className="vans__card-tag">Simple</span>
            </div>
            <div className="vans__card-price">
              <span className="vans__price-amount">$60</span>
              <span className="vans__price-period">/day</span>
            </div>
          </div>
        </div>
        {/* van six */}
        <div className="vans_card">
          <div className="vans__card-image">
            <img src={vanImage} />
          </div>
          <div className="vans__card-content">
            <div className="vans__card-title-section">
              <h3 className="vans__card-title">Modest Explorer</h3>
              <span className="vans__card-tag">Simple</span>
            </div>
            <div className="vans__card-price">
              <span className="vans__price-amount">$60</span>
              <span className="vans__price-period">/day</span>
            </div>
          </div>
        </div>
        {/* van five */}
        <div className="vans_card">
          <div className="vans__card-image">
            <img src={vanImage} />
          </div>
          <div className="vans__card-content">
            <div className="vans__card-title-section">
              <h3 className="vans__card-title">Modest Explorer</h3>
              <span className="vans__card-tag">Simple</span>
            </div>
            <div className="vans__card-price">
              <span className="vans__price-amount">$60</span>
              <span className="vans__price-period">/day</span>
            </div>
          </div>
        </div>
        {/* van six */}
        <div className="vans_card">
          <div className="vans__card-image">
            <img src={vanImage} />
          </div>
          <div className="vans__card-content">
            <div className="vans__card-title-section">
              <h3 className="vans__card-title">Modest Explorer</h3>
              <span className="vans__card-tag">Simple</span>
            </div>
            <div className="vans__card-price">
              <span className="vans__price-amount">$60</span>
              <span className="vans__price-period">/day</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
