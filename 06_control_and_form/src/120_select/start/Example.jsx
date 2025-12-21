import { useState } from "react";

const Example = () => {
  const [selected, setSelected] = useState("Banana");

  const OPTIONS = ["Apple", "Banana", "Cherry"];

  return (
    <>
      <select 
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
      >
        {OPTIONS.map((opt) => {
          return <option value={opt} key={opt}>{opt}</option>
        })}
      </select>
      <div>選択された果物 : {selected}</div>
    </> 
  );
};

export default Example;
