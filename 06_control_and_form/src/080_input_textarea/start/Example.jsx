import { useState } from "react";

const Example = () => {
  const [val, setVal] = useState("");

  const clearVal = () => setVal("");
  

  return (
    <>
    <label htmlFor="123">ラベル</label>
    <div>
      <input 
        id="123" 
        type="text" 
        placeholder="こんにちは" 
        value={val}
        onChange={(e) => setVal(e.target.value) }
      />
      <textarea 
        id="456"
        placeholder="こんにちは" 
        value={val}
        onChange={(e) => setVal(e.target.value)}
      ></textarea>
    </div>
    <h3>{val}</h3>
    <div>
      <button onClick={clearVal}>クリア</button>
    </div>
    </>
  );
};

export default Example;
