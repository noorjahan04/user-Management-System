import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/login");
  };

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "12px 20px",
        background: "#007bff",
        color: "white",
        borderBottom: "2px solid #0056b3",
      }}
    >
      {/* Left Section (Logo/Home) */}
      <div style={{ fontSize: "20px", fontWeight: "bold" }}>
        <Link
          to="/"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          MyApp
        </Link>
      </div>

      {/* Right Section (Links) */}
      <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
        {!token && (
          <>
            <Link
              to="/register"
              style={{
                color: "white",
                textDecoration: "none",
                padding: "6px 12px",
                borderRadius: "5px",
                background: "#0056b3",
              }}
            >
              Register
            </Link>
            <Link
              to="/login"
              style={{
                color: "white",
                textDecoration: "none",
                padding: "6px 12px",
                borderRadius: "5px",
                background: "#28a745",
              }}
            >
              Login
            </Link>
          </>
        )}
        {token && (
          <>
            <Link
              to="/dashboard"
              style={{
                color: "white",
                textDecoration: "none",
                padding: "6px 12px",
                borderRadius: "5px",
                background: "#15003dff",
              }}
            >
              Dashboard
            </Link>
            <button
              onClick={handleLogout}
              style={{
                padding: "6px 12px",
                borderRadius: "5px",
                border: "none",
                cursor: "pointer",
                background: "#dc3545",
                color: "white",
                fontWeight: "bold",
              }}
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}