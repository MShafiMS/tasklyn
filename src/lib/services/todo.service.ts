import {
  CreateTodoInput,
  DeleteTodoInput,
  GetTodosByUserIdQuery,
  UpdateTodoInput,
} from "@TasklynAlias/API";
import {
  createTodo,
  deleteTodo,
  updateTodo,
} from "@TasklynAlias/graphql/mutations";
import { getTodosByUserId } from "@TasklynAlias/graphql/queries";
import { GraphQLQuery } from "@aws-amplify/api";
import { API, Auth } from "aws-amplify";

export const createTodoData = async <Todo>(todo: Todo) => {
  try {
    const { attributes } = await Auth.currentAuthenticatedUser();
    const { data } = await API.graphql<GraphQLQuery<CreateTodoInput>>({
      query: createTodo,
      variables: { input: { ...todo, userId: attributes?.sub } },
    });
    if (!data) return;
    console.log(data);
    return data;
  } catch (error) {
    console.error("@todo.service::createTodoData::error", error);
    throw error;
  }
};

export const updateTodoData = async <Todo>(todo: Todo) => {
  try {
    const { data } = await API.graphql<GraphQLQuery<UpdateTodoInput>>({
      query: updateTodo,
      variables: { input: todo },
    });
    if (!data) return;
    return data;
  } catch (error) {
    console.error("@todo.service::updateTodoData::error", error);
    throw error;
  }
};
export const deleteTodoData = async (id: string) => {
  try {
    const { data } = await API.graphql<GraphQLQuery<DeleteTodoInput>>({
      query: deleteTodo,
      variables: { input: { id } },
    });
    if (!data) return;
    return data;
  } catch (error) {
    console.error("@todo.service::updateTodoData::error", error);
    throw error;
  }
};

export const fetchTodos = async () => {
  try {
    const { attributes } = await Auth.currentAuthenticatedUser();
    const { data } = await API.graphql<GraphQLQuery<GetTodosByUserIdQuery>>({
      query: getTodosByUserId,
      variables: {
        userId: attributes?.sub,
      },
    });
    if (!data) return;
    return data.getTodosByUserId?.items || [];
  } catch (error) {
    console.error("@todo.service::fetchTodos::error", error);
    throw error;
  }
};
