import { Todo } from "@TasklynAlias/lib/types/types";
import { ITodoStore, useTodoStore } from "@TasklynAlias/stores/TodoStore";
import { useState } from "react";
import { PiPlusLight } from "react-icons/pi";
import CreateTodoModal from "./CreateTodoModal";
import EditTodoModal from "./EditTodoModal";
import TodoCard from "./TodoCard";

const InProgress = ({ nav }: { nav?: string }) => {
  const [showModal, setShowModal] = useState(false);
  const [todoEdit, setTodoEdit] = useState("");
  const todoStore: ITodoStore = useTodoStore();
  const todoOnly = todoStore.todos.filter(
    (todo) => todo.status === "IN PROGRESS"
  );

  return (
    <div
      className={`w-full lg:w-72 ${
        nav !== "inprogress" && "lg:block hidden"
      } h-fit dark:bg-[#20273d] bg-gray-200 rounded-lg`}
    >
      <h1 className="px-4 py-2 uppercase border-b border-black/10 dark:border-white/10">
        IN PROGRESS{" "}
        {todoOnly.length
          ? `${todoOnly.length} ${todoOnly.length > 1 ? "issues" : "issue"}`
          : ""}
      </h1>
      <CreateTodoModal show={showModal} close={() => setShowModal(false)} />
      <EditTodoModal show={todoEdit} close={() => setTodoEdit("")} />
      <div className="flex flex-col gap-1 px-2 py-1.5">
        {todoOnly?.map((item: Todo) => (
          <TodoCard
            key={item.id}
            item={item}
            setItem={(id: string) => setTodoEdit(id)}
          />
        ))}
      </div>
      {!todoOnly.length && (
        <div className="p-2">
          <button
            onClick={() => setShowModal(true)}
            title="Add Todo"
            className={`${
              todoOnly.length ? "py-2" : "py-16"
            } w-full mt-1.5 hover:text-[#2E9CDB] rounded-lg hover:bg-black/10 bg-black/5 hover:dark:text-[#55CBF1] text-[#161C2C]/60 dark:text-gray-400`}
          >
            <PiPlusLight
              size={todoOnly.length ? 40 : 100}
              className="mx-auto"
            />
          </button>
        </div>
      )}
    </div>
  );
};

export default InProgress;
