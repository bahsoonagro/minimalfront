// ============================
// App.js
// Frontend - React
// ============================

import React, { useEffect, useState } from "react";

function App() {
  // State to hold backend connection status
  const [status, setStatus] = useState("Checking...");
  // State for raw materials
  const [materials, setMaterials] = useState([]);
  const [newMaterial, setNewMaterial] = useState("");

  // Fetch backend status when app loads
  useEffect(() => {
    fetch("fetch("https://minimalback-production.up.railway.app")
")
      .then((res) => res.json())
      .then((data) => setStatus(data.message))
      .catch(() => setStatus("Backend unreachable"));
  }, []);

  // Fetch materials from backend
  useEffect(() => {
    fetch("http://localhost:5000/api/raw-materials")
      .then((res) => res.json())
      .then((data) => setMaterials(data))
      .catch((err) => console.error("Error fetching materials:", err));
  }, []);

  // Add new material
  const addMaterial = () => {
    fetch("http://localhost:5000/api/raw-materials", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: newMaterial, quantity: 10 }),
    })
      .then((res) => res.json())
      .then((data) => {
        setMaterials([...materials, data]);
        setNewMaterial(""); // clear input
      });
  };

  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      <h1>🔗 Minimal Connectivity Test</h1>
      <p>
        <strong>Backend status:</strong> {status}
      </p>

      <h2>Raw Materials</h2>
      <ul>
        {materials.map((mat) => (
          <li key={mat.id}>
            {mat.name} - Qty: {mat.quantity}
          </li>
        ))}
      </ul>

      <input
        type="text"
        value={newMaterial}
        placeholder="Add new material"
        onChange={(e) => setNewMaterial(e.target.value)}
      />
      <button onClick={addMaterial}>Add</button>
    </div>
  );
}

export default App;

