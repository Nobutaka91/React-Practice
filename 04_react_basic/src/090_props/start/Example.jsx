import Child from "./components/Child";

const Example = () => {
  const o = {
    color: "red",
    num: 123
  }

  return (
    <>
      <Child 
        {...o}
      />
      {/* <Child  />
      <Child color="red" /> */}
    </>
  )
};

export default Example;
