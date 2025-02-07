import "./NotFound.css";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="not-found">
      <h1>Sorry, the page you were looking for was not found.</h1>
      <Link to="/Van-Life" className="not-found__return">
        Return to home
      </Link>
    </main>
  );
}
