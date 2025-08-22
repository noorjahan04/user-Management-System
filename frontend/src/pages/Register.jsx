import React, { useState } from "react";
import axios from "axios";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "", role: "user" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/register", form);
      alert("Registered successfully. Please login.");
    } catch (err) {
      alert(err.response?.data?.message || "Error registering");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "#f8f9fa",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          padding: "30px",
          border: "1px solid #ddd",
          borderRadius: "8px",
          background: "#fff",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          width: "300px",
          textAlign: "center",
        }}
      >
        <h2 style={{ marginBottom: "20px", color: "#333" }}>Register</h2>

        <input
          name="name"
          placeholder="Name"
          onChange={handleChange}
          required
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "12px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "12px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          required
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "12px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <select
          name="role"
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "5px",
            border: "none",
            background: "#007bff",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Register
        </button>
      </form>
    </div>
  );
}