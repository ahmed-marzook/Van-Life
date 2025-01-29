import PropTypes from "prop-types";
import "./Van.css";
import Tag from "../Tag/Tag";

const Van = ({ vanImageUrl, vanName, vanPrice, vanTag }) => {
  return (
    <article className="vans__card">
      <div className="vans__card-image">
        <img src={vanImageUrl} alt={`${vanName} van`} />
      </div>

      <div className="vans__card-content">
        <div className="vans__card-title-section">
          <h3 className="vans__card-title">{vanName}</h3>
          <Tag tag={vanTag} />
        </div>

        <div className="vans__card-price">
          <span className="vans__price-amount">
            ${vanPrice.toLocaleString()}
          </span>
          <span className="vans__price-period">/day</span>
        </div>
      </div>
    </article>
  );
};

Van.propTypes = {
  vanImageUrl: PropTypes.string.isRequired,
  vanName: PropTypes.string.isRequired,
  vanPrice: PropTypes.number.isRequired,
  vanTag: PropTypes.oneOf(["simple", "luxury", "rugged"]).isRequired,
};

Van.defaultProps = {
  vanTag: "simple",
};

export default Van;
