import { CalcProvider } from "./Context/CalcContext";
import { Input } from "./components/Input";
import { Result } from "./components/result";
import { Select } from "./components/Select";


const Example = () => {
  
  return (
    <>
      <CalcProvider>
        <Input name="a" />
        <Input name="b" />
        <Select />
        <Result />
      </CalcProvider>
    </>
  );
};

export default Example;
