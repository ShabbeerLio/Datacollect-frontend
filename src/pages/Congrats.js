export default function Congrats({ email, onRestart }) {
  return (
    <section className="panel" aria-live="polite">
      <svg className="tick" viewBox="0 0 72 72" aria-hidden="true">
        <circle className="tick__ring" cx="36" cy="36" r="32" />
        <path className="tick__mark" d="M22 37 l10 10 l19 -22" />
      </svg>
      <h1 className="title">Email verified</h1>
      <p className="sub">
        Congratulations! <strong>{email}</strong> has been verified. You can now
        use your account.
      </p>
      <div className="actions actions--end">
        <button type="button" className="btn" onClick={onRestart}>
          Done
        </button>
      </div>
    </section>
  );
}
