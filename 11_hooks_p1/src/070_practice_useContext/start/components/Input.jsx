import { useCalcContent, useCalcContentDispatch } from "../Context/CalcContext"

export const Input = ({ name }) => {
  const state = useCalcContent();
  const dispatch = useCalcContentDispatch();

  const numChangeHandler = (e) => {
    dispatch({type: 'change', payload: {name: e.target.name, value: e.target.value}});
  };

  return (
    <>
      <div>
        {name}:
        <input
          type="number"
          name={name}
          value={state[name]}
          onChange={numChangeHandler}
          />
      </div>
    </>
  )
}