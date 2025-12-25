const Example = () => {

  const val1 = 2, val2 = 3;

  const add = (val1) => {
    return val1 + val2; // 関数の外部スコープで定義されたval2を参照しているため、これは純粋ではない
  }

  return (
    <>
      <div>純粋関数: {add(val1)}</div>
    </>
  );
};

export default Example;
