import React, { useState } from "react";

function SearchBar({ items }) {
  const [query, setQuery] = useState("");

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Search Items</h2>

      <input
        type="text"
        placeholder="Search here..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={styles.input}
      />

      <ul style={styles.list}>
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <li key={index} style={styles.listItem}>
              {item}
            </li>
          ))
        ) : (
          <p style={styles.noResult}>No results found</p>
        )}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    width: "1280px",
    margin: "40px auto",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    backgroundColor: "#fff",
    textAlign: "center",
    fontFamily: "Arial",
  },
  title: {
    marginBottom: "15px",
  },
  input: {
    width: "100%",
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    marginBottom: "15px",
    fontSize: "16px",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  listItem: {
    padding: "8px",
    borderBottom: "1px solid #eee",
  },
  noResult: {
    color: "gray",
  },
};

export default SearchBar;