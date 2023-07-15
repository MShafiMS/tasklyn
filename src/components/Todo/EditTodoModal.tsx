import { Todo } from "@TasklynAlias/lib/types/types";
import { ITodoStore, useTodoStore } from "@TasklynAlias/stores/TodoStore";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { BiSolidChevronDown } from "react-icons/bi";
import { ImSpinner6 } from "react-icons/im";
import { IoMdClose } from "react-icons/io";
import { IoCreateOutline } from "react-icons/io5";

interface IProps {
  show: string;
  close: () => void;
}

const EditTodoModal = ({ show, close }: IProps) => {
  const todoStore: ITodoStore = useTodoStore();
  const [showStatus, setShowStatus] = useState(false);
  const [loading, setLoading] = useState(false);
  const [dloading, setDLoading] = useState(false);
  const todo = todoStore.todos.find((t) => t.id === show);

  const [status, setStatus] = useState(todo?.status);

  const todoStatus = status || todo?.status;

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<Todo>();

  const onSubmit = async (data: any) => {
    try {
      const updatedTodo = {
        id: todo?.id,
        ...data,
        status: status || todo?.status,
      };
      setLoading(true);
      await todoStore.updateTodo(updatedTodo);
      setLoading(false);
      reset();
      todoStore.fetchTodos();
      close();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    try {
      setDLoading(true);
      if (todo?.id) {
        await todoStore.deleteTodo(todo?.id);
        reset();
        todoStore.fetchTodos();
        setStatus("");
        close();
        setDLoading(false);
      }
    } catch (error) {
      console.error("error delete todo:", error);
    } finally {
      setDLoading(false);
    }
  };

  const statusData = [
    { id: 1, title: "TO DO" },
    { id: 2, title: "IN PROGRESS" },
    { id: 3, title: "COMPLETED" },
  ];

  return (
    <div
      className={`fixed z-50 left-1/2 ${
        show ? "top-1/2" : "top-[5000px]"
      } w-screen h-screen -translate-y-1/2 -translate-x-1/2 bg-gray-300/40 dark:bg-[#20273d]/40 flex items-center justify-center`}
    >
      <div
        onClick={() => {
          close();
          setStatus("");
        }}
        className="w-full h-full absolute z-10"
      />
      <div
        className={`relative z-20 w-11/12 lg:w-fit ${
          show ? "top-0" : "top-10"
        } duration-100 dark:bg-[#20273d] p-4 bg-gray-200 rounded-lg shadow-xl dark:shadow-gray-900/60 border border-black/10 dark:border-white/10`}
      >
        <div className="flex justify-between">
          <div className="flex gap-2 items-center text-lg uppercase font-medium">
            <IoCreateOutline className="text-2xl" /> Create Todo
          </div>
          <button
            type="button"
            onClick={() => {
              close();
              setStatus("");
            }}
            className="p-1.5 rounded text-xl dark:hover:bg-white/5 hover:bg-black/10"
          >
            <IoMdClose />
          </button>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
          <div className="lg:mb-6 mb-3 flex lg:flex-row flex-col lg:items-center items-end lg:gap-6 gap-2 justify-between">
            <input
              type="text"
              placeholder={errors.name?.message || "Title"}
              {...register("name", {
                required: { value: true, message: "Title is required" },
              })}
              defaultValue={todo?.name}
              className={`lg:w-96 w-80 placeholder:uppercase font-medium outline-none text-2xl px-4 py-2 rounded-lg bg-gray-300/50 dark:bg-gray-300/5 ${
                errors.name?.type === "required" &&
                "placeholder:text-red-500/60"
              }`}
            />
            <div className="relative flex flex-row-reverse gap-4">
              <button
                type="button"
                onClick={() => handleDelete()}
                className="px-4 bg-[#b1092d] text-white py-2 text-xl rounded-lg hover:bg-opacity-90"
              >
                {dloading ? (
                  <ImSpinner6
                    size={28}
                    className="animate-spin block mx-auto"
                  />
                ) : (
                  "Delete"
                )}
              </button>
              <button
                type="button"
                onClick={() => setShowStatus(!showStatus)}
                className={`px-3 py-2 rounded uppercase font-bold text-sm flex gap-2 items-center ${
                  (todoStatus === "TO DO" &&
                    "bg-gray-300/50 dark:bg-gray-300/5") ||
                  (todoStatus === "IN PROGRESS" && "bg-blue-800 text-white") ||
                  (todoStatus === "COMPLETED" && "bg-green-600 text-white")
                }`}
              >
                {status || todo?.status}
                <BiSolidChevronDown className="text-xl" />
              </button>
              {showStatus && (
                <ul
                  className={`absolute rounded flex flex-col justify-start items-start border py-1 dark:bg-[#20273d] bg-gray-200 border-black/10 dark:border-white/10 -right-16 top-14 w-44 
                `}
                >
                  {statusData.map((item) => (
                    <>
                      {item.title !== status && (
                        <button
                          onClick={() => {
                            setStatus(item.title);
                            setShowStatus(false);
                          }}
                          key={item.id}
                          className="hover:bg-white/5 text-start px-4 w-full py-1"
                        >
                          <span
                            className={`px-2 font-medium rounded ${
                              (item.title === "IN PROGRESS" &&
                                "bg-blue-800 text-white") ||
                              (item.title === "COMPLETED" &&
                                "text-white bg-green-600")
                            }`}
                          >
                            {item.title}
                          </span>
                        </button>
                      )}
                    </>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <textarea
            id=""
            {...register("description", {
              required: { value: true, message: "Description is required" },
            })}
            defaultValue={todo?.description}
            placeholder={errors.description?.message || "Description"}
            className={`w-full placeholder:uppercase outline-none rounded-lg bg-gray-300/30 dark:bg-gray-400/5 px-4 py-3 h-56 resize-none ${
              errors.description?.type === "required" &&
              "placeholder:text-red-500/60"
            }`}
          ></textarea>
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={loading}
              className="px-10 mt-4 bg-[#161C2C] dark:bg-gray-200 dark:text-gray-700 text-white py-2 text-xl rounded-lg hover:bg-opacity-90"
            >
              {loading ? (
                <ImSpinner6 size={28} className="animate-spin block mx-auto" />
              ) : (
                "Save"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditTodoModal;
