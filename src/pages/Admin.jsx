import React, { useState } from "react";
import api from "../services/api";
import { saveAuthTokens } from "../utils/auth";
import { z } from "zod";
import "../styles/Admin.css";

const LoginSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(1, "Password is required"),
});

export default function Admin() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({});
  const [link, setLink] = useState("");
  const [status, setStatus] = useState(null); 
  const [message, setMessage] = useState("");

  const handleLogin = async () => {
    const result = LoginSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors = {};
      result.error.errors.forEach((err) => {
        fieldErrors[err.path[0]] = err.message;
      });
      setErrors(fieldErrors);
      setStatus("error");
      setMessage("Please fill in all fields correctly.");
      return;
    }

    try {
      const res = await api.post("/login", form);
      saveAuthTokens(res.data);
      setErrors({});
      setStatus("success");
      setMessage("Login successful! You can now generate a shareable link.");
    } catch (err) {
      setStatus("error");
      setMessage("Login failed. Please check your credentials.");
    }
  };

  const generateLink = async () => {
    try {
      const res = await api.post("/share");
      const shareToken = res.data.shareToken;
      const shareableLink = `${window.location.origin}/view/${shareToken}`;
      setLink(shareableLink);
    } catch (err) {
      setStatus("error");
      setMessage("Failed to generate share token.");
    }
  };

  return (
    <div
      className={`admin-container ${
        status === "success"
          ? "login-success"
          : status === "error"
          ? "login-error"
          : ""
      }`}
    >
      <div className="form-card">
        <h2 className="form-title">Admin Login</h2>

        {message && (
          <p
            className={`login-message ${
              status === "success" ? "success-msg" : "error-msg"
            }`}
          >
            {message}
          </p>
        )}

        <form onSubmit={(e) => e.preventDefault()} noValidate className="login-form">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            name="username"
            type="text"
            className={`input-field ${errors.username ? "error" : ""}`}
            value={form.username}
            onChange={(e) => setForm({ ...form, username: e.target.value })}
            aria-invalid={!!errors.username}
            aria-describedby="username-error"
          />
          {errors.username && (
            <p id="username-error" className="error-text">
              {errors.username}
            </p>
          )}

          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            className={`input-field ${errors.password ? "error" : ""}`}
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            aria-invalid={!!errors.password}
            aria-describedby="password-error"
          />
          {errors.password && (
            <p id="password-error" className="error-text">
              {errors.password}
            </p>
          )}

          <button type="submit" onClick={handleLogin} className="btn">
            Login
          </button>
        </form>

        <div className="divider" />

        <button onClick={generateLink} className="btn">
          Generate Shareable Link
        </button>

        {link && (
          <div className="share-link">
            <p>Share this link:</p>
            <a href={link} target="_blank" rel="noopener noreferrer">
              {link}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
