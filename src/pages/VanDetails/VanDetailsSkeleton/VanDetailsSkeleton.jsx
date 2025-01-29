const VanDetailsSkeleton = () => {
  return (
    <main className="van-detail__main-content">
      <section className="skeleton-back-link">
        <div className="skeleton-link"></div>
      </section>

      <div className="skeleton-image"></div>

      <article className="van-detail__article">
        <div className="van-detail__title-section">
          <div className="skeleton-tag"></div>
          <div className="skeleton-title"></div>
          <div className="skeleton-price"></div>
        </div>
        <div className="skeleton-description"></div>
        <div className="skeleton-description"></div>
      </article>

      <div className="skeleton-button"></div>
    </main>
  );
};

export default VanDetailsSkeleton;
