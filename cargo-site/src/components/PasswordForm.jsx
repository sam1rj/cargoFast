import React, { useState } from "react";

function PasswordForm() {
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("https://cargofast.onrender.com/save-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    const data = await res.json();
    console.log("Serverdən cavab:", data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Şifrə daxil edin"
      />
      <button type="submit">Göndər</button>
    </form>
  );
}

export default PasswordForm;