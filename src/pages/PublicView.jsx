import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; 
import axios from "axios";
import Table from "../components/Table";
import "../styles/PublicView.css";

export default function PublicView() {
  const { token } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          `https://tnp-recruitment-challenge.manitvig.live/share?shareToken=${token}`
        );
        setData(res.data);
        setError(null);
      } catch (err) {
        setError("Invalid or expired share token.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [token]);

  const filtered = data.filter((item) =>
    item.email?.toLowerCase().includes(query.toLowerCase())
  );

  
  const handleLogout = () => {
   
    navigate("/");
  };

  return (
    <div className="public-container">
      <div className="public-card">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h2 className="public-title">Public View</h2>
          <button className="btn logout-btn" onClick={handleLogout}>Logout</button>
        </div>
        {loading ? (
          <div className="loading-spinner" role="status" aria-live="polite">
            <div className="spinner" />
            <p>Loading data...</p>
          </div>
        ) : error ? (
          <p className="error-text">{error}</p>
        ) : (
          <>
            <input
              type="text"
              className="input-field"
              placeholder="Search by email..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Search students by email"
            />
            <div className="table-wrapper">
              <Table data={filtered} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
