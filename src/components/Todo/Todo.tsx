import { Todo } from "@TasklynAlias/lib/types/types";
import { ITodoStore, useTodoStore } from "@TasklynAlias/stores/TodoStore";
import { useState } from "react";
import { BsPlusSquareFill } from "react-icons/bs";
import { PiPlusLight } from "react-icons/pi";
import CreateTodoModal from "./CreateTodoModal";
import EditTodoModal from "./EditTodoModal";
import TodoCard from "./TodoCard";

const OTodo = ({ nav }: { nav?: string }) => {
  const [showModal, setShowModal] = useState(false);
  const [todoEdit, setTodoEdit] = useState("");
  const todoStore: ITodoStore = useTodoStore();
  const todoOnly = todoStore.todos.filter((todo) => todo.status === "TO DO");

  return (
    <div
      className={`w-full lg:w-72 ${
        nav !== "Todo" && "lg:block hidden"
      } h-fit dark:bg-[#20273d] bg-gray-200 rounded-lg`}
    >
      <div className="flex justify-between items-center px-4 py-2  border-b border-black/10 dark:border-white/10">
        <h1 className="uppercase">
          To Do{" "}
          {todoOnly.length
            ? `${todoOnly.length} ${todoOnly.length > 1 ? "issues" : "issue"}`
            : ""}
        </h1>
        {todoOnly.length > 4 && (
          <button onClick={() => setShowModal(true)} title="Add Todo">
            <BsPlusSquareFill
              size={25}
              className="text-blue-500/80 hover:text-blue-500 duration-150"
            />
          </button>
        )}
      </div>
      <CreateTodoModal show={showModal} close={() => setShowModal(false)} />
      <EditTodoModal show={todoEdit} close={() => setTodoEdit("")} />
      <div className="flex flex-col gap-1 px-2 pt-1.5">
        {todoOnly?.map((item: Todo) => (
          <TodoCard
            key={item.id}
            item={item}
            setItem={(id: string) => setTodoEdit(id)}
          />
        ))}
      </div>
      <div className="p-2">
        <button
          onClick={() => setShowModal(true)}
          title="Add Todo"
          className={`${
            todoOnly.length ? "py-2" : "py-16"
          } w-full mt-1.5 hover:text-[#2E9CDB] rounded-lg hover:bg-black/10 bg-black/5 hover:dark:text-[#55CBF1] text-[#161C2C]/60 dark:text-gray-400`}
        >
          <PiPlusLight size={todoOnly.length ? 40 : 100} className="mx-auto" />
        </button>
      </div>
    </div>
  );
};

export default OTodo;
