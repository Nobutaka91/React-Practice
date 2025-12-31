import List from "./List"
import Form from "./Form"
import { TodoProvider } from "../context/TodoContext";

const Todo = () => {
  

  return (
    <TodoProvider>
      <List />
      <Form createTodo={createTodo}/>
    </TodoProvider>
  )
};
export default Todo;
