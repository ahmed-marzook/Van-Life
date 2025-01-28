import PropTypes from "prop-types";
import "./Van.css";

const Van = ({ vanImageUrl, vanName, vanPrice, vanTag }) => {
  const formatTag = (tag) => {
    if (!tag) return "";
    return tag[0].toUpperCase() + tag.slice(1).toLowerCase();
  };

  return (
    <article className="vans__card">
      <div className="vans__card-image">
        <img src={vanImageUrl} alt={`${vanName} van`} />
      </div>

      <div className="vans__card-content">
        <div className="vans__card-title-section">
          <h3 className="vans__card-title">{vanName}</h3>
          <span className={`vans__card-tag ${vanTag.toLowerCase()}`}>
            {formatTag(vanTag)}
          </span>
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
