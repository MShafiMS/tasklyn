import { ReactNode } from "react";
import { ITodoStore, useTodoStore } from "./stores/TodoStore";

interface TodoProviderProps {
  children: ReactNode;
}

const TodoProvider = ({ children }: TodoProviderProps) => {
  const store: ITodoStore = useTodoStore();

  return <>{children}</>;
};

export default TodoProvider;
