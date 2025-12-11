import React, { useState } from 'react';
import axios from 'axios';

const CurdPage = () => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createProduct = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.post("https://dummyjson.com/products/add", {
        title: "new Product",
      });
      setResult(res.data);
    } catch (err) {
      setError(err.message || "Create failed");
    } finally {
      setLoading(false);
    }
  };

  const updateProduct = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.put("https://dummyjson.com/products/1", {
        title: "update Product",
      });
      setResult(res.data);
    } catch (err) {
      setError(err.message || "Update failed");
    } finally {
      setLoading(false);
    }
  };

  const deleteProduct = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.delete("https://dummyjson.com/products/1");
      setResult(res.data);
    } catch (err) {
      setError(err.message || "Delete failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>CRUD Page</h1>

      <div style={{ marginBottom: 12 }}>
        <button onClick={createProduct} disabled={loading}>Create</button>
        <button onClick={updateProduct} disabled={loading} style={{ marginLeft: 8 }}>Update</button>
        <button onClick={deleteProduct} disabled={loading} style={{ marginLeft: 8 }}>Delete</button>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {/* TABLE VIEW */}
      {result && (
        <table border="1" cellPadding="8" style={{ marginTop: 20, borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th>Field</th>
              <th>Value</th>
            </tr>
          </thead>

          <tbody>
            {Object.entries(result).map(([key, value]) => (
              <tr key={key}>
                <td><strong>{key}</strong></td>
                <td>{typeof value === "object" ? JSON.stringify(value) : value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default CurdPage;
