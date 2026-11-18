import { useState } from "react";
import { verifyEmail } from "../api.js";

export default function PasswordPage({ email, onBack, onVerified }) {
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleNext(e) {
    e.preventDefault();
    if (!password) {
      setError("Enter a password.");
      return;
    }
    setLoading(true);
    setError("");
    try {
      await verifyEmail(email, password);
      onVerified();
    } catch (err) {
      setError(err.message || "Something went wrong. Try again.");
      setLoading(false);
    }
  }

  return (
    <form className="panel" onSubmit={handleNext} noValidate>
      <h1 className="title">Welcome</h1>

      <button type="button" className="pill" onClick={onBack} title="Change account">
        <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
          <circle cx="12" cy="12" r="9.5" />
          <circle cx="12" cy="10" r="3" />
          <path d="M6.2 18.2c1.4-2.1 3.3-3.1 5.8-3.1s4.4 1 5.8 3.1" />
        </svg>
        <span className="pill__email">{email}</span>
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
          <path d="M7 10l5 5 5-5z" />
        </svg>
        <span className="sr-only">Change account</span>
      </button>

      <div className="float float--password">
        <input
          id="password"
          type={show ? "text" : "password"}
          autoComplete="current-password"
          placeholder=" "
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setError("");
          }}
          aria-invalid={!!error}
          aria-describedby={error ? "pw-error" : undefined}
          autoFocus
        />
        <label htmlFor="password">Enter your password</label>
      </div>
      {error && <p id="pw-error" className="error" role="alert">{error}</p>}

      <label className="check">
        <input type="checkbox" checked={show} onChange={(e) => setShow(e.target.checked)} />
        <span className="check__box" aria-hidden="true" />
        <span>Show password</span>
      </label>

      <div className="actions actions--password">
        <button type="button" className="link" onClick={onBack} disabled={loading}>
          Try another way
        </button>
        <button type="submit" className="btn" disabled={loading}>
          {loading ? "Verifying…" : "Next"}
        </button>
      </div>
    </form>
  );
}
