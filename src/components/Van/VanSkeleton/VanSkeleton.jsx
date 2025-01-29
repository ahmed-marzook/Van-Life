import "./VanSkeleton.css";
const VanCardSkeleton = () => {
  return (
    <article className="skeleton-card">
      <div className="skeleton-image"></div>
      <div className="skeleton-content">
        <div className="skeleton-title-section">
          <div className="skeleton-title"></div>
          <div className="skeleton-tag"></div>
        </div>
        <div className="skeleton-price">
          <div className="skeleton-price-amount"></div>
          <div className="skeleton-price-period"></div>
        </div>
      </div>
    </article>
  );
};

export default VanCardSkeleton;
