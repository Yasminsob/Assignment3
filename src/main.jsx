import { useState } from "react";
import { createRoot } from "react-dom/client";
import { items, categories } from "./items.js";
import "./style.css";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [openItem, setOpenItem] = useState(null);

  const visibleItems =
    selectedCategory === "All"
      ? items
      : items.filter((item) => item.category === selectedCategory);

  return (
    <div>
      <h1>Nothing for Sale</h1>

      <div className="buttons">
        <button
          className={selectedCategory === "All" ? "active" : ""}
          onClick={() => setSelectedCategory("All")}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            className={selectedCategory === category ? "active" : ""}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {openItem && (
        <div className="detail">
          <button onClick={() => setOpenItem(null)}>Close</button>
          <img src={openItem.src} alt={openItem.title} />
          <h2>{openItem.title}</h2>
          <p>{openItem.category}</p>
          <p>{openItem.description}</p>
        </div>
      )}

      <div className="grid">
        {visibleItems.map((item) => (
          <div key={item.id} className="card" onClick={() => setOpenItem(item)}>
            <img src={item.src} alt={item.title} />
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

let root = createRoot(document.getElementById("app"));
root.render(<App />);