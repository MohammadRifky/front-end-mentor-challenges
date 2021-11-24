import NewTodo from "./components/NewTodo";
import ToggleThemeButton from "./components/ToggleThemeButton";
import ToggleCompleteButton from "./components/ToggleCompleteButton";
const App = () => {
  return (
    <>
      <h1 className="text-xl text-red-700 text-center">Todo</h1>
      {/* <ToggleThemeButton /> */}
      <NewTodo />
      {/* <ToggleCompleteButton /> */}
    </>
  );
}

export default App;
