import React from "react";
import "../styles/Table.css";

export default function Table({ data }) {
  if (!data.length) return <p className="no-data">No records found.</p>;

  const headers = Object.keys(data[0]);

  return (
    <table className="data-table">
      <thead>
        <tr>
          {headers.map((head) => (
            <th key={head}>{head.replace(/_/g, " ")}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, idx) => (
          <tr key={idx}>
            {headers.map((key) => (
              <td key={key}>{item[key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
