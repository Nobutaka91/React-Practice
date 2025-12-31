import { useCalcContent } from "../Context/CalcContext";

export const Result = () => {
  const state = useCalcContent();
  return (
    <h3>結果：{state.result}</h3>
  )
}