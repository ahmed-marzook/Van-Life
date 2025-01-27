import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./Home.css";

export default function Home() {
  return (
    <>
      <Header />
      <main className="home__main-content">
        <h1 className="home__heading">
          You got the travel plans, we got the travel vans.
        </h1>
        <p className="home__description">
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>
        <button className="home__find-van-button">Find your van</button>
      </main>
      <Footer />
    </>
  );
}
