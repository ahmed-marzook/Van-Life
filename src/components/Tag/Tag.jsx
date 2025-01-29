import PropTypes from "prop-types";
import "./Tag.css";

function Tag({ tag }) {
  const formatTag = (tag) => {
    if (!tag) return "";
    return tag[0].toUpperCase() + tag.slice(1).toLowerCase();
  };
  return (
    <span className={`card-tag ${tag.toLowerCase()}`}>{formatTag(tag)}</span>
  );
}

Tag.propTypes = {
  tag: PropTypes.oneOf(["simple", "luxury", "rugged"]).isRequired,
};

export default Tag;
