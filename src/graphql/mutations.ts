/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const updateUserDetails = /* GraphQL */ `
  mutation UpdateUserDetails(
    $input: UpdateUserDetailsInput!
    $condition: ModelUserDetailsConditionInput
  ) {
    updateUserDetails(input: $input, condition: $condition) {
      id
      firstName
      lastName
      email
      profilePicture
      country
      state
      city
      bio
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteUserDetails = /* GraphQL */ `
  mutation DeleteUserDetails(
    $input: DeleteUserDetailsInput!
    $condition: ModelUserDetailsConditionInput
  ) {
    deleteUserDetails(input: $input, condition: $condition) {
      id
      firstName
      lastName
      email
      profilePicture
      country
      state
      city
      bio
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
      id
      name
      description
      status
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
      id
      name
      description
      status
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
      id
      name
      description
      status
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const createUserDetails = /* GraphQL */ `
  mutation CreateUserDetails(
    $input: CreateUserDetailsInput!
    $condition: ModelUserDetailsConditionInput
  ) {
    createUserDetails(input: $input, condition: $condition) {
      id
      firstName
      lastName
      email
      profilePicture
      country
      state
      city
      bio
      createdAt
      updatedAt
      __typename
    }
  }
`;
