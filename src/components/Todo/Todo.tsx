import { Todo } from "@TasklynAlias/lib/types/types";
import { ITodoStore, useTodoStore } from "@TasklynAlias/stores/TodoStore";
import { useState } from "react";
import { PiPlusLight } from "react-icons/pi";
import {
  TbProgressAlert,
  TbProgressBolt,
  TbProgressCheck,
} from "react-icons/tb";
import CreateTodoModal from "./CreateTodoModal";
import EditTodoModal from "./EditTodoModal";

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
      <h1 className="px-4 py-2 uppercase border-b border-black/10 dark:border-white/10">
        To Do
      </h1>
      <CreateTodoModal show={showModal} close={() => setShowModal(false)} />
      <EditTodoModal show={todoEdit} close={() => setTodoEdit("")} />
      <div className="flex flex-col gap-1 px-2 pt-1">
        {todoOnly?.map((item: Todo) => (
          <div
            key={item.id}
            onClick={() => setTodoEdit(item.id)}
            className="cursor-pointer w-full bg-gray-300/70 hover:bg-gray-300 dark:bg-white/5 hover:dark:bg-white/10 px-4 py-3 rounded-lg"
          >
            <h1 className="text-xl font-medium">{item.name}</h1>
            <p className="mt-3">{item.description.slice(0, 50)}</p>
            <div className="flex flex-col items-end justify-end">
              <TbProgressAlert className="text-2xl" />
              <TbProgressBolt className="text-2xl text-blue-400 hidden" />
              <TbProgressCheck className="text-2xl text-green-500 hidden" />
            </div>
          </div>
        ))}
      </div>
      <div className="p-2">
        <button
          onClick={() => setShowModal(true)}
          title="Add Todo"
          className={`${
            todoOnly.length ? "py-2" : "py-16"
          } w-full hover:text-[#2E9CDB] rounded-lg hover:bg-black/10 hover:dark:text-[#55CBF1] text-[#161C2C]/60 dark:text-gray-400`}
        >
          <PiPlusLight size={todoOnly.length ? 40 : 100} className="mx-auto" />
        </button>
      </div>
    </div>
  );
};

export default OTodo;
