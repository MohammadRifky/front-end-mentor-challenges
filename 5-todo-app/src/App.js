import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";
import ToggleThemeButton from "./components/ToggleThemeButton";

const App = () => {
  
  return (
    <>
      <header>
        <h1 className="text-xl">Todo</h1>
        <ToggleThemeButton />
      </header>
      <NewTodo />
      <TodoList />
    </>
  );
}

export default App;
