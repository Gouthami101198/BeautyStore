import "./ShadeSelector.css";
import { useState } from "react";

const shades = [
  "#d48b72",
  "#c46d4f",
  "#f4c2c2",
  "#b95c50",
  "#7d3c2f",
];

function ShadeSelector() {
  const [selected, setSelected] = useState(shades[0]);

  return (
    <div className="shade-selector">

      <h3>Select Shade</h3>

      <div className="shade-list">

        {shades.map((shade) => (
          <button
            key={shade}
            className={`shade ${
              selected === shade ? "active" : ""
            }`}
            style={{ background: shade }}
            onClick={() => setSelected(shade)}
          />
        ))}

      </div>

    </div>
  );
}

export default ShadeSelector;