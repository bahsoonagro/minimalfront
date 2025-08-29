// App.js
import React, { useEffect, useState } from "react";

function App() {
  const [status, setStatus] = useState("Checking connectivity...");

  useEffect(() => {
    fetch("http://localhost:5000/api/test")
      .then((res) => res.json())
      .then((data) => setStatus(data.message))
      .catch((err) => setStatus("❌ Backend unreachable"));
  }, []);

  return (
    <div style={{ fontFamily: "Arial", textAlign: "center", marginTop: "50px" }}>
      <h2>🔗 Minimal Connectivity Test</h2>
      <p>{status}</p>
    </div>
  );
}

export default App;

