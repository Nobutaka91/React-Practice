import { useState } from "react";

const Example = () => {
  const [isChecked, setIsChecked] = useState(false);
  

  return (
    <>
      <label>
        チェック : 
        <input 
          type="checkbox" 
          checked={isChecked}
          onChange={() => setIsChecked(prevState => !prevState)}
        />
      </label>
      <div>
        {isChecked ? "ON!" : "OFF!"}
      </div>
      
    </>
  );
};

export default Example;
