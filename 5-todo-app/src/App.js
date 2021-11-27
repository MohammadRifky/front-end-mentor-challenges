import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <>
      <h1 className="text-xl text-red-700 text-center">Todo</h1>
      {/* <ToggleThemeButton /> */}
      <NewTodo />
      {/* <ToggleCompleteButton /> */}
      <TodoList />
    </>
  );
}

export default App;
