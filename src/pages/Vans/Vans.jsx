import "./Vans.css";
import { useState, useEffect } from "react";
import Van from "../../components/Van/Van";

export default function Vans() {
  const [vanList, setVanList] = useState([]);

  useEffect(() => {
    console.log("fetched");
    fetch("/api/vans")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setVanList(data.vans);
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

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
          <Van
            key={van.id}
            vanName={van.name}
            vanTag={van.type}
            vanPrice={van.price}
            vanImageUrl={van.imageUrl}
          />
        ))}
      </section>
    </main>
  );
}
