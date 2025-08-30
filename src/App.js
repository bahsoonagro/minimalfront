import React, { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");
  const [rawMaterials, setRawMaterials] = useState([]);

  // Fetch test endpoint
  useEffect(() => {
    fetch("https://minimalback-production.up.railway.app/api/test")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => console.error("Error fetching /api/test:", err));
  }, []);

  // Fetch raw materials
  useEffect(() => {
    fetch("https://minimalback-production.up.railway.app/api/raw-materials")
      .then((res) => res.json())
      .then((data) => setRawMaterials(data))
      .catch((err) => console.error("Error fetching /api/raw-materials:", err));
  }, []);

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1>Frontend ✅</h1>
      <h2>Backend Test Message:</h2>
      <p>{message || "Loading..."}</p>

      <h2>Raw Materials:</h2>
      {rawMaterials.length > 0 ? (
        <ul>
          {rawMaterials.map((item) => (
            <li key={item.id || item._id}>{item.name}</li>
          ))}
        </ul>
      ) : (
        <p>No raw materials yet.</p>
      )}
    </div>
  );
}

export default App;
