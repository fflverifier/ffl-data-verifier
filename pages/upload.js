import { useState } from "react";
import Papa from "papaparse";

export default function UploadPage() {
  const [rows, setRows] = useState([]);
  const [error, setError] = useState("");

  const handleFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        setRows(results.data);
      },
      error: (err) => setError(err.message),
    });
  };

  return (
    <main style={{ fontFamily: "sans-serif", padding: "40px" }}>
      <h1>FFL Data Verifier — Upload Tool</h1>
      <input type="file" accept=".csv" onChange={handleFile} />
      {error && <p style={{ color: "red" }}>{error}</p>}
      {rows.length > 0 && (
        <div style={{ marginTop: "20px" }}>
          <h3>Preview ({rows.length} rows)</h3>
          <pre
            style={{
              maxHeight: "300px",
              overflow: "auto",
              background: "#f5f5f5",
              padding: "10px",
            }}
          >
            {JSON.stringify(rows.slice(0, 5), null, 2)}
          </pre>
          <p>✅ File parsed successfully — verification logic coming next!</p>
        </div>
      )}
    </main>
  );
}
