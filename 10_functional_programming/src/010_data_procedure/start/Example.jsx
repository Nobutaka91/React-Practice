const Example = () => {
  const nums = [1, 2, 3, 4];
  
  const add = (arry) => arry.reduce((accu, curr) => accu + curr);

  return (
    <>
      <div>関数型: {add(nums)}</div>
    </>
  );
};

export default Example;
