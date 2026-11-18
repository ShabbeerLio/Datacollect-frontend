import { useState } from "react";
import { ACCOUNTS } from "../data.js";
import Avatar from "../components/Avatar.js";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function SelectEmail({ onNext }) {
  const [other, setOther] = useState(false);
  const [typed, setTyped] = useState("");
  const [error, setError] = useState("");

  // Only used for "Use another account" (typed email)
  function handleTypedNext(e) {
    e.preventDefault();
    const email = typed.trim();
    if (!EMAIL_RE.test(email)) {
      setError("Enter a valid email address.");
      return;
    }
    onNext(email);
  }

  if (other) {
    return (
      <form className="panel" onSubmit={handleTypedNext} noValidate>
        <h1 className="title">Verify your email</h1>
        <p className="sub">Enter the email address you want to verify.</p>

        <div className="float">
          <input
            id="email"
            type="email"
            autoComplete="email"
            placeholder=" "
            value={typed}
            onChange={(e) => {
              setTyped(e.target.value);
              setError("");
            }}
            aria-invalid={!!error}
            autoFocus
          />
          <label htmlFor="email">Email</label>
        </div>
        {error && (
          <p className="error" role="alert">
            {error}
          </p>
        )}

        <div className="actions">
          <button
            type="button"
            className="link"
            onClick={() => {
              setOther(false);
              setError("");
            }}
          >
            Choose an account
          </button>
          <button type="submit" className="btn">
            Next
          </button>
        </div>
      </form>
    );
  }

  return (
    <section className="panel">
      <h1 className="title">Choose an account</h1>

      <ul className="accounts">
        {ACCOUNTS.map((a) => (
          <li key={a.email}>
            {/* Tapping an account goes straight to the password page */}
            <button
              type="button"
              className="row"
              onClick={() => onNext(a.email)}
            >
              <Avatar {...a} color={a.color} />
              <span className="row__text">
                <span className="row__name">{a.name}</span>
                <span className="row__email">{a.email}</span>
              </span>
            </button>
          </li>
        ))}
        <li>
          <button
            type="button"
            className="row row--button"
            onClick={() => setOther(true)}
          >
            <span className="avatar avatar--icon" aria-hidden="true">
              <svg
                viewBox="0 0 24 24"
                width="26"
                height="26"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <circle cx="12" cy="12" r="9.5" />
                <circle cx="12" cy="10" r="3" />
                <path d="M6.2 18.2c1.4-2.1 3.3-3.1 5.8-3.1s4.4 1 5.8 3.1" />
              </svg>
            </span>
            <span className="row__text">
              <span className="row__name">Use another account</span>
            </span>
          </button>
        </li>
      </ul>
    </section>
  );
}
