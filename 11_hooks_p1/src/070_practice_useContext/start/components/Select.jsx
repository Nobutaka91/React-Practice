import { useCalcContent, useCalcContentDispatch } from "../Context/CalcContext";

export const Select = () => {
  const state = useCalcContent();
  const dispatch = useCalcContentDispatch();
  const CALC_OPTIONS = ["add", "minus", "divide", "multiply"];
  
  const calculate = (e) => {
    dispatch({type: e.target.value});
  };

  return (
    <select value={state.type} name="type" onChange={calculate}>
      {CALC_OPTIONS.map((type) => (
        <option key={type} value={type}>
          {type}
        </option>
      ))}
    </select>
  )
}