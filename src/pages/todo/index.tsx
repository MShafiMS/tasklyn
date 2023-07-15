import UserLayout from "@TasklynAlias/components/Layout/UserLayout";
import Loader from "@TasklynAlias/components/Loader/Loader";
import Done from "@TasklynAlias/components/Todo/Done";
import InProgress from "@TasklynAlias/components/Todo/InProgress";
import OTodo from "@TasklynAlias/components/Todo/Todo";
import { ITodoStore, useTodoStore } from "@TasklynAlias/stores/TodoStore";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";

const Todos = () => {
  return (
    <div className="mx-6 mt-6">
      <h1 className="lg:text-5xl text-4xl font-medium text-[#0d101a] dark:text-gray-200">
        Board
      </h1>
      <AllTodos />
    </div>
  );
};

Todos.PageLayout = UserLayout;
export default Todos;

const AllTodos = observer(() => {
  const [nav, setNav] = useState("Todo");
  const todoStore: ITodoStore = useTodoStore();

  useEffect(() => {
    todoStore.fetchTodos();
  }, [todoStore]);

  if (todoStore.loading) {
    return <Loader />;
  }

  return (
    <>
      <div className="flex justify-center lg:hidden gap-0 mt-4">
        <button
          onClick={() => setNav("Todo")}
          className={`px-3 py-2 rounded-l ${
            nav === "Todo" ? "bg-blue-800 text-white" : "bg-gray-400/10"
          }`}
        >
          TO DO
        </button>
        <button
          onClick={() => setNav("inprogress")}
          className={`px-3 py-2 ${
            nav === "inprogress" ? "bg-blue-800 text-white" : "bg-gray-400/10"
          }`}
        >
          IN PROGRESS
        </button>
        <button
          onClick={() => setNav("done")}
          className={`px-3 py-2 rounded-r ${
            nav === "done" ? "bg-blue-800 text-white" : "bg-gray-400/10"
          }`}
        >
          COMPLETED
        </button>
      </div>
      <div className="flex gap-4 mb-6 mt-3 text-gray-700 dark:text-gray-300">
        <OTodo nav={nav} />
        <InProgress nav={nav} />
        <Done nav={nav} />
      </div>
    </>
  );
});
