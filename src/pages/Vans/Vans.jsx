import "./Vans.css";

import Van from "../../components/Van/Van";

export default function Vans() {
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
        <Van vanName={"Modest Explorer"} vanTag={"simple"} vanPrice={60} />
        <Van vanName={"Modest Explorer"} vanTag={"simple"} vanPrice={60} />
        <Van vanName={"Modest Explorer"} vanTag={"simple"} vanPrice={60} />
        <Van vanName={"Modest Explorer"} vanTag={"luxury"} vanPrice={60} />
        <Van vanName={"Modest Explorer"} vanTag={"simple"} vanPrice={60} />
        <Van vanName={"Modest Explorer"} vanTag={"rugged"} vanPrice={60} />
        <Van vanName={"Modest Explorer"} vanTag={"simple"} vanPrice={60} />
        <Van vanName={"Modest Explorer"} vanTag={"simple"} vanPrice={60} />
      </section>
    </main>
  );
}
