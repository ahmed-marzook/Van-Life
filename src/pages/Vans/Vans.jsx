import "./Vans.css";
import Van from "../../components/Van/Van";
import { Await, Link, useLoaderData, useSearchParams } from "react-router-dom";
import { getVans } from "../../api/getVanList";
import { Suspense } from "react";
import VanCardSkeleton from "../../components/Van/VanSkeleton/VanSkeleton";

export function loader() {
  return { vans: getVans() };
}

export default function Vans() {
  // const [vanList, setVanList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");
  const dataPromis = useLoaderData();

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

  function renderVanElements(vanList) {
    const displayedVans = typeFilter
      ? vanList.filter((van) => van.type === typeFilter)
      : vanList;
    return (
      <>
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
          {displayedVans.map((van) => (
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
      </>
    );
  }

  return (
    <main className="vans__main-content">
      <section>
        <h1 className="vans__heading">Explore our van options</h1>
      </section>
      <Suspense
        fallback={
          <section className="vans__list">
            {Array(8)
              .fill(null)
              .map((_, index) => (
                <VanCardSkeleton key={index} />
              ))}
          </section>
        }
      >
        <Await resolve={dataPromis.vans}>{renderVanElements}</Await>
      </Suspense>
    </main>
  );
}
