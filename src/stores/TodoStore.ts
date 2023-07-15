import { Todo } from "@TasklynAlias/lib/types/types";
import { flow, types } from "mobx-state-tree";
import {
  createTodoData,
  deleteTodoData,
  fetchTodos,
  updateTodoData,
} from "../services/todo.service";

const TodoModel = types.model("TodoModel", {
  id: types.identifier,
  name: types.string,
  description: types.string,
  userId: types.string,
  status: types.string,
  createdAt: types.string,
  updatedAt: types.string,
});

const TodoStore = types
  .model("TodoStore", {
    todos: types.optional(types.array(TodoModel), []),
    loading: types.optional(types.boolean, false),
  })
  .actions((self) => ({
    addTodo: flow(function* (todo: Todo) {
      try {
        const createdTodoData = yield createTodoData(todo);
        if (createdTodoData) {
          const createdTodo = TodoModel.create(createdTodoData.createTodo);
          self.todos.push(createdTodo);
        }
      } catch (error) {
        console.error("Error adding todo:", error);
      }
    }),
    fetchTodos: flow(function* () {
      try {
        self.loading = true;
        const todos: Todo[] = yield fetchTodos();
        if (todos) {
          self.todos.replace(todos);
        }
      } catch (error) {
        console.error("Error fetching todos:", error);
      } finally {
        self.loading = false;
      }
    }),
    updateTodo: flow(function* (todo: Todo) {
      try {
        const updatedTodo: Todo | null = yield updateTodoData(todo);
        if (updatedTodo) {
          const index = self.todos.findIndex((t) => t.id === updatedTodo.id);
          if (index >= 0) {
            self.todos[index] = updatedTodo;
          }
        }
      } catch (error) {
        console.error("Error updating todo:", error);
      }
    }),
    deleteTodo: flow(function* (todoId: string) {
      try {
        const success: boolean = yield deleteTodoData(todoId);
        if (success) {
          const index = self.todos.findIndex((t) => t.id === todoId);
          if (index >= 0) {
            self.todos.splice(index, 1);
          }
        }
      } catch (error) {
        console.error("Error deleting todo:", error);
      }
    }),
  }));

export type ITodoStore = typeof TodoStore.Type;

let store: ITodoStore | null = null;

export function initializeTodoStore(initialData = { todos: [] }): ITodoStore {
  if (store === null) {
    store = TodoStore.create(initialData);
  }
  return store;
}
export function useTodoStore(initialData = { todos: [] }): ITodoStore {
  return initializeTodoStore(initialData);
}
