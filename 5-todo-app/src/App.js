import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";
import ToggleThemeButton from "./components/ToggleThemeButton";

const App = () => {
  
  return (
    <>
      <h1 className="text-xl text-red-700 text-center">Todo</h1>
      <ToggleThemeButton />
      <NewTodo />
      <TodoList />
    </>
  );
}

export default App;
