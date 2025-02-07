import "./Vans.css";
import { useState, useEffect } from "react";
import Van from "../../components/Van/Van";
import { Link, useSearchParams } from "react-router-dom";
import VanCardSkeleton from "../../components/Van/VanSkeleton/VanSkeleton";

export default function Vans() {
  const [vanList, setVanList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");

  useEffect(() => {
    const fetchVans = async () => {
      try {
        const response = await fetch("/api/vans");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setVanList(data.vans);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchVans();
  }, []);

  const displayedVans = typeFilter
    ? vanList.filter((van) => van.type === typeFilter)
    : vanList;

  function handleFilterChange(key, value) {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  }

  if (error) return <h1>Error: {error}</h1>;

  return (
    <main className="vans__main-content">
      <section>
        <h1 className="vans__heading">Explore our van options</h1>
      </section>
      <section className="vans_options">
        <button
          onClick={() => handleFilterChange("type", "simple")}
          className={
            typeFilter === "simple"
              ? "vans__options-button simple selected"
              : "vans__options-button simple"
          }
        >
          Simple
        </button>
        <button
          onClick={() => handleFilterChange("type", "luxury")}
          className={
            typeFilter === "luxury"
              ? "vans__options-button luxury selected"
              : "vans__options-button luxury"
          }
        >
          Luxury
        </button>
        <button
          onClick={() => handleFilterChange("type", "rugged")}
          className={
            typeFilter === "rugged"
              ? "vans__options-button rugged selected"
              : "vans__options-button rugged"
          }
        >
          Rugged
        </button>
        {typeFilter && (
          <button
            onClick={() => handleFilterChange("type", null)}
            className="vans__options-button clear"
          >
            Clear filters
          </button>
        )}
      </section>
      <section className="vans__list">
        {isLoading
          ? // Render multiple skeletons while loading
            Array(8)
              .fill(null)
              .map((_, index) => <VanCardSkeleton key={index} />)
          : displayedVans.map((van) => (
              <Link
                to={`${van.id}`}
                key={van.id}
                state={{
                  filter: `?${searchParams.toString()}`,
                  type: typeFilter,
                }}
              >
                <Van
                  vanName={van.name}
                  vanTag={van.type}
                  vanPrice={van.price}
                  vanImageUrl={van.imageUrl}
                />
              </Link>
            ))}
      </section>
    </main>
  );
}
