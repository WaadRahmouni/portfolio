import React, { useState } from "react";
import { loginWithJson } from "../services/authService";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await loginWithJson(email, password);

      // ✅ le backend retourne seulement { token }
      localStorage.setItem("token", res.token);

      navigate("/Dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Erreur de connexion");
    }
  };

  return (
    <div style={styles.container}>
      <form style={styles.form} onSubmit={handleLogin}>
        <h2 style={styles.title}>Connexion</h2>

        {error && <p style={styles.error}>{error}</p>}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={styles.input}
        />

        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={styles.input}
        />

        <button type="submit" style={styles.button}>
          Se connecter
        </button>
      </form>
    </div>
  );
};
const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#121212", 
  },
  form: {
    background: "#1f1f1f", 
    padding: "2rem",
    borderRadius: "10px",
    width: "320px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
    display: "flex",
    flexDirection: "column",
  },
  title: {
    color: "#ffffff",
    textAlign: "center",
    marginBottom: "1.5rem",
  },
  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
    borderRadius: "6px",
    border: "1px solid #333",
    background: "#2c2c2c",
    color: "#fff",
    fontSize: "14px",
    outline: "none",
    transition: "border 0.2s ease",
  },
  button: {
    width: "100%",
    padding: "12px",
    background: "#2563eb",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "background 0.2s ease",
  },
  buttonHover: {
    background: "#1d4ed8",
  },
  error: {
    color: "#ef4444", 
    fontSize: "14px",
    marginBottom: "10px",
    textAlign: "center",
  },
};

export default LoginPage;
