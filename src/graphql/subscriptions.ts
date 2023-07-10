/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo($filter: ModelSubscriptionTodoFilterInput) {
    onCreateTodo(filter: $filter) {
      id
      title
      description
      status
      updatedAt
      createdAt
    }
  }
`;
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo($filter: ModelSubscriptionTodoFilterInput) {
    onUpdateTodo(filter: $filter) {
      id
      title
      description
      status
      updatedAt
      createdAt
    }
  }
`;
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo($filter: ModelSubscriptionTodoFilterInput) {
    onDeleteTodo(filter: $filter) {
      id
      title
      description
      status
      updatedAt
      createdAt
    }
  }
`;
export const onCreateUserProfile = /* GraphQL */ `
  subscription OnCreateUserProfile(
    $filter: ModelSubscriptionUserProfileFilterInput
    $id: String
  ) {
    onCreateUserProfile(filter: $filter, id: $id) {
      id
      name
      email
      profilePicture
      country
      state
      city
      bio
      config
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUserProfile = /* GraphQL */ `
  subscription OnUpdateUserProfile(
    $filter: ModelSubscriptionUserProfileFilterInput
    $id: String
  ) {
    onUpdateUserProfile(filter: $filter, id: $id) {
      id
      name
      email
      profilePicture
      country
      state
      city
      bio
      config
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUserProfile = /* GraphQL */ `
  subscription OnDeleteUserProfile(
    $filter: ModelSubscriptionUserProfileFilterInput
    $id: String
  ) {
    onDeleteUserProfile(filter: $filter, id: $id) {
      id
      name
      email
      profilePicture
      country
      state
      city
      bio
      config
      createdAt
      updatedAt
    }
  }
`;
