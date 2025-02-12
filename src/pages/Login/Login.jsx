import "./Login.css";
import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { loginUser } from "../../api/loginUser";

export function loader({ request }) {
  return new URL(request.url).searchParams.get("message");
}

export default function Login() {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);
  const message = useLoaderData();
  const navigate = useNavigate();

  function submitForm(formData) {
    setStatus("submitting");
    setError(null);
    loginUser({
      email: formData.get("email"),
      password: formData.get("password"),
    })
      .then((data) => {
        console.log(data);
        setError(null);
        localStorage.setItem("loggedin", true);
        navigate("/Van-Life/host", { replace: true });
      })
      .catch((err) => setError(err))
      .finally(() => setStatus("idle"));
  }

  return (
    <div className="login-container">
      {message && <h2>{message}</h2>}
      {error && <h3>{error.message}</h3>}
      <h1>Sign in to your account</h1>
      <form action={submitForm} className="login-form">
        <input name="email" type="email" placeholder="Email address" />
        <input name="password" type="password" placeholder="Password" />
        <button type="submit" disabled={status === "submitting"}>
          {status === "submitting" ? "Logging in..." : "Log in"}
        </button>
      </form>
    </div>
  );
}
