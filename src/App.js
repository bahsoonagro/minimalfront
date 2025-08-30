import React, { useEffect, useState } from "react";

function App() {
  const [status, setStatus] = useState("Checking...");

  // Set your Railway backend URL here
  const API_BASE = "https://minimalback-production.up.railway.app";

  // Test backend connectivity
  useEffect(() => {
    fetch(`${API_BASE}/api/test`)
      .then((res) => res.json())
      .then((data) => setStatus(data.message))
      .catch(() => setStatus("Backend unreachable"));
  }, []);

  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      <h1>🔗 Minimal React Frontend</h1>
      <p>
        <strong>Backend status:</strong> {status}
      </p>
    </div>
  );
}

export default App;
