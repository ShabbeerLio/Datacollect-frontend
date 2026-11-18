// Calls the Express/MongoDB backend (see email-verify-backend/) which checks
// the email + password against your MAIN database.

const API_BASE = import.meta.env.VITE_API_BASE || "https://datacollect-backend.onrender.com/api";

// Optional: used after "Choose an account" to confirm the email exists
// before showing the password page.
export async function checkEmail(email) {
  const res = await fetch(`${API_BASE}/check-email`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.message || "Email not found.");
  return data; // { exists, email, name }
}

// Used on the password page's Next button.
export async function verifyEmail(email, password) {
  const res = await fetch(`${API_BASE}/verify-login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.message || "Incorrect email or password.");
  return data; // { verified, email }
}