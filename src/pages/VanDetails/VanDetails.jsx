import "./VanDetails.css";
import Tag from "../../components/Tag/Tag";
import { Link, useParams, useLocation, useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import VanDetailsSkeleton from "./VanDetailsSkeleton/VanDetailsSkeleton";
import { getVans } from "../../api/getVanList";

export async function loader({ params }) {
  return getVans(params.id);
}

export default function VanDetails() {
  const van = useLoaderData();
  const { state } = useLocation(); // Get navigation state

  const filter = state?.filter || ""; // Extract filter from state or use empty string
  const type = state?.type || "all";

  return (
    <main className="van-detail__main-content">
      <section className="van-detail__back-link">
        ←
        <Link to={`..${filter}`} relative="path">
          Back to {type} vans
        </Link>
      </section>
      <div className="van-detail__image">
        <img src={van.imageUrl} alt={van.name} />
      </div>
      <article className="van-detail__article">
        <div className="van-detail__title-section">
          <Tag tag={van.type} />
          <h3 className="van-detail__title">{van.name}</h3>
          <div className="van-detail__price">
            <span className="van-detail__price-amount">${van.price}</span>/day
          </div>
        </div>
        <p>{van.description}</p>
      </article>
      <button className="van-detail__rent-button">Rent this van</button>
    </main>
  );
}
