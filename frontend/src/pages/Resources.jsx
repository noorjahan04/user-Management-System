import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Resources() {
  const [resources, setResources] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/resources", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setResources(res.data))
      .catch((err) => console.error(err));
  }, [token]);

  return (
    <div style={{ padding: 20 }}>
      <h2>Resources</h2>
      <ul>
        {resources.map((r) => (
          <li key={r._id}>{r.title} - {r.link}</li>
        ))}
      </ul>
    </div>
  );
}