export default function Footer() {
  return (
    <footer className="footer">
      <label className="footer__lang">
        <span className="sr-only">Language</span>
        <select defaultValue="en-US">
          <option value="en-US">English (United States)</option>
          <option value="en-IN">English (India)</option>
          <option value="hi">हिन्दी</option>
        </select>
      </label>
      <nav className="footer__links" aria-label="Footer">
        <a href="#help">Help</a>
        <a href="#privacy">Privacy</a>
        <a href="#terms">Terms</a>
      </nav>
    </footer>
  );
}
