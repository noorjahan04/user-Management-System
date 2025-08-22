import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const [users, setUsers] = useState([]);
  const [resources, setResources] = useState([]);
  const [newResource, setNewResource] = useState({ title: "", description: "" });
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchUsers();
    fetchResources();
  }, [token]);

  const fetchUsers = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/users", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUsers(res.data);
    } catch (err) {
      console.error("Users fetch error:", err);
    }
  };

  const fetchResources = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/resources", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setResources(res.data);
    } catch (err) {
      console.error("Resources fetch error:", err);
    }
  };

  const handleAddResource = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/api/resources",
        newResource,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setResources([...resources, res.data]);
      setNewResource({ title: "", description: "" });
    } catch (err) {
      console.error("Resource add error:", err);
    }
  };

  // inline styles
  const styles = {
    dashboard: {
      maxWidth: "1200px",
      margin: "30px auto",
      padding: "20px",
      background: "#f9fafc",
      borderRadius: "10px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      fontFamily: "Arial, sans-serif",
    },
    header: {
      textAlign: "center",
      color: "#333",
      marginBottom: "20px",
    },
    row: {
      display: "flex",
      justifyContent: "space-between",
      gap: "20px",
    },
    column: {
      flex: "1",
      background: "#fff",
      padding: "15px",
      borderRadius: "8px",
      border: "1px solid #ddd",
      boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
    },
    h3: {
      marginBottom: "10px",
      color: "#444",
      borderBottom: "2px solid #eee",
      paddingBottom: "5px",
      textAlign: "center",
    },
    list: {
      listStyle: "none",
      padding: 0,
      margin: 0,
    },
    listItem: {
      background: "#fdfdfd",
      margin: "8px 0",
      padding: "10px 15px",
      borderRadius: "6px",
      border: "1px solid #ddd",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      fontSize: "14px",
    },
    role: {
      fontSize: "0.85em",
      color: "#666",
      background: "#eaeaea",
      padding: "2px 8px",
      borderRadius: "4px",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
    },
    input: {
      padding: "10px",
      border: "1px solid #ccc",
      borderRadius: "6px",
    },
    button: {
      padding: "10px",
      background: "#4a90e2",
      color: "white",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer",
      fontWeight: "bold",
    },
  };

  return (
    <div style={styles.dashboard}>
      <h2 style={styles.header}>Admin Dashboard</h2>

      <div style={styles.row}>
        {/* Users Column */}
        <section style={styles.column}>
          <h3 style={styles.h3}>All Users</h3>
          <ul style={styles.list}>
            {users.map((u) => (
              <li key={u._id} style={styles.listItem}>
                {u.name} <span style={styles.role}>{u.role}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Resources Column */}
        <section style={styles.column}>
          <h3 style={styles.h3}>Resources</h3>
          <ul style={styles.list}>
            {resources.map((r) => (
              <li key={r._id} style={styles.listItem}>
                <strong>{r.title}</strong> - {r.description}
              </li>
            ))}
          </ul>
        </section>

        {/* Add Resource Form Column */}
        <section style={styles.column}>
          <h3 style={styles.h3}>Add New Resource</h3>
          <form onSubmit={handleAddResource} style={styles.form}>
            <input
              type="text"
              placeholder="Title"
              style={styles.input}
              value={newResource.title}
              onChange={(e) =>
                setNewResource({ ...newResource, title: e.target.value })
              }
              required
            />
            <input
              type="text"
              placeholder="Description"
              style={styles.input}
              value={newResource.description}
              onChange={(e) =>
                setNewResource({ ...newResource, description: e.target.value })
              }
              required
            />
            <button type="submit" style={styles.button}>
              ➕ Add Resource
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}