import UserLayout from "@TasklynAlias/components/Layout/UserLayout";
import Loader from "@TasklynAlias/components/Loader/Loader";
import CreateTodoModal from "@TasklynAlias/components/Todo/CreateTodoModal";
import EditTodoModal from "@TasklynAlias/components/Todo/EditTodoModal";
import OverviewCard from "@TasklynAlias/components/Todo/OverviewCard";
import { Todo } from "@TasklynAlias/lib/types/types";
import { ITodoStore, useTodoStore } from "@TasklynAlias/stores/TodoStore";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";

const Overview = () => {
  return (
    <div className="m-6">
      <h1 className="lg:text-5xl text-4xl font-medium text-[#0d101a] dark:text-gray-200">
        Overview
      </h1>
      <AllTodos />
    </div>
  );
};

Overview.PageLayout = UserLayout;
export default Overview;

const AllTodos = observer(() => {
  const [showModal, setShowModal] = useState(false);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [todoEdit, setTodoEdit] = useState("");
  const [data, setData] = useState<Todo>(null as unknown as Todo);
  const todoStore: ITodoStore = useTodoStore();

  const filtered =
    (filter === "todo" &&
      todoStore.todos.filter((todo: Todo) => todo.status === "TO DO")) ||
    (filter === "progress" &&
      todoStore.todos.filter((todo: Todo) => todo.status === "IN PROGRESS")) ||
    (filter === "done" &&
      todoStore.todos.filter((todo: Todo) => todo.status === "COMPLETED")) ||
    todoStore.todos;

  const searched = filtered.filter((s: Todo) =>
    s.name?.toLowerCase().includes(search)
  );

  useEffect(() => {
    todoStore.fetchTodos();
  }, [todoStore]);

  if (todoStore.loading) {
    return <Loader />;
  }
  const statusData = [
    { id: 1, title: "TO DO" },
    { id: 2, title: "IN PROGRESS" },
    { id: 3, title: "COMPLETED" },
  ];
  const handleChangeStatus = async (status: string) => {
    const updatedTodo = {
      id: data?.id,
      name: data?.name,
      description: data?.description,
      status: status,
    };
    await todoStore.updateTodo(updatedTodo as Todo);
    await todoStore.fetchTodos();
  };

  return (
    <>
      <div className="">
        <CreateTodoModal show={showModal} close={() => setShowModal(false)} />
        <EditTodoModal show={todoEdit} close={() => setTodoEdit("")} />
        <div className="px-3 py-3 rounded my-8 bg-black/10 dark:bg-white/5">
          <div className="flex mb-2 justify-between items-center">
            <div className="relative">
              <input
                type="text"
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search Issue"
                className="outline-none w-40 dark:bg-[#161C2C] bg-white py-1 px-2"
              />
              <BsSearch className="absolute right-2 top-1/2 -translate-y-1/2" />
            </div>
            <select
              onChange={(e) => setFilter(e.target.value)}
              className="dark:bg-[#161C2C] bg-white py-1 px-2 outline-none"
            >
              <option value="all">All</option>
              <option value="todo">To Do</option>
              <option value="progress">In Progress</option>
              <option value="done">Completed</option>
            </select>
          </div>
          <div className="flex flex-col gap-3">
            {(searched || filtered)?.map((item: Todo, index: number) => (
              <div key={item.id} className="relative">
                <OverviewCard
                  item={item}
                  index={index}
                  setData={(data) => setData(data)}
                  setItem={(id: string) => setTodoEdit(id)}
                />
                {data === item && (
                  <>
                    <div
                      onClick={() => setData(null as unknown as Todo)}
                      className="fixed h-screen z-10 w-screen top-0 left-0"
                    />
                    <ul
                      className={`absolute rounded z-20 flex flex-col justify-start items-start border py-1 dark:bg-[#20273d] bg-gray-200 border-black/10 dark:border-white/10 right-3 top-10 w-44 
                `}
                    >
                      {statusData.map((stat, index) => (
                        <>
                          {stat.title !== data.status && (
                            <button
                              onClick={() => {
                                handleChangeStatus(stat.title);
                                setData(null as unknown as Todo);
                              }}
                              key={index}
                              className="hover:bg-white/5 text-start px-4 w-full py-1"
                            >
                              <span
                                className={`px-2 font-medium rounded ${
                                  (stat.title === "IN PROGRESS" &&
                                    "bg-blue-800 text-white") ||
                                  (stat.title === "COMPLETED" &&
                                    "text-white bg-green-600")
                                }`}
                              >
                                {stat.title}
                              </span>
                            </button>
                          )}
                        </>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            ))}
          </div>
          <p
            onClick={() => setShowModal(true)}
            className="cursor-pointer rounded w-full hover:bg-white mt-1 dark:hover:bg-[#161C2C] px-3 py-1.5 text-lg dark:font-thin flex items-center"
          >
            <span className="text-2xl mr-2">+</span> Create Issue
          </p>
        </div>
      </div>
    </>
  );
});
