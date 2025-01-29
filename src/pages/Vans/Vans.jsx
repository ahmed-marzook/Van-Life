import "./Vans.css";
import { useState, useEffect } from "react";
import Van from "../../components/Van/Van";
import { Link } from "react-router-dom";

export default function Vans() {
  const [vanList, setVanList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

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

  if (isLoading) return <h1>Loading vans...</h1>;
  if (error) return <h1>Error: {error}</h1>;

  return (
    <main className="vans__main-content">
      <section>
        <h1 className="vans__heading">Explore our van options</h1>
      </section>
      <section className="vans_options">
        <button className="vans__options-button">Simple</button>
        <button className="vans__options-button">Luxury</button>
        <button className="vans__options-button">Rugged</button>
        <button className="vans__options-button clear">Clear filters</button>
      </section>
      <section className="vans__list">
        {vanList.map((van) => (
          <Link to={`/vans/${van.id}`} key={van.id}>
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
