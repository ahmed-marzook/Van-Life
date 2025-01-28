import PropTypes from "prop-types";
import "./Van.css";
import vanImage from "../../assets/van.png";

function Van(props) {
  return (
    <div className="vans_card">
      <div className="vans__card-image">
        <img src={vanImage} alt={props.vanName} />
      </div>
      <div className="vans__card-content">
        <div className="vans__card-title-section">
          <h3 className="vans__card-title">{props.vanName}</h3>
          <span className={`vans__card-tag ${props.vanTag.toLowerCase()}`}>
            {props.vanTag.replace(/^./, (char) => char.toUpperCase())}
          </span>
        </div>
        <div className="vans__card-price">
          <span className="vans__price-amount">${props.vanPrice}</span>
          <span className="vans__price-period">/day</span>
        </div>
      </div>
    </div>
  );
}

Van.propTypes = {
  vanName: PropTypes.string.isRequired,
  vanPrice: PropTypes.number.isRequired,
  vanTag: PropTypes.oneOf(["simple", "luxury", "rugged"]),
};

export default Van;
