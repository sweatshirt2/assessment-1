import { useState } from "react";

export default function Test1() {
  const [items, setItems] = useState([1, 2, 3]);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <div>
        {items.map((item) => (
          <span style={{ paddingRight: "20px" }}>{item}</span>
        ))}

        {/* show sum here */}
      </div>

      <button
        onClick={() =>
          setItems((prev) => {
            const lastItem = prev[prev.length - 1];

            if (lastItem) {
              return [...prev, lastItem + 1];
            }

            return [1];
          })
        }
      >
        Add Element
      </button>

      {/* add reset here */}
    </div>
  );
}
