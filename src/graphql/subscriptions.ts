/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUserDetails = /* GraphQL */ `
  subscription OnCreateUserDetails(
    $filter: ModelSubscriptionUserDetailsFilterInput
    $id: String
  ) {
    onCreateUserDetails(filter: $filter, id: $id) {
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
export const onUpdateUserDetails = /* GraphQL */ `
  subscription OnUpdateUserDetails(
    $filter: ModelSubscriptionUserDetailsFilterInput
    $id: String
  ) {
    onUpdateUserDetails(filter: $filter, id: $id) {
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
export const onDeleteUserDetails = /* GraphQL */ `
  subscription OnDeleteUserDetails(
    $filter: ModelSubscriptionUserDetailsFilterInput
    $id: String
  ) {
    onDeleteUserDetails(filter: $filter, id: $id) {
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
export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo(
    $filter: ModelSubscriptionTodoFilterInput
    $owner: String
  ) {
    onCreateTodo(filter: $filter, owner: $owner) {
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
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo(
    $filter: ModelSubscriptionTodoFilterInput
    $owner: String
  ) {
    onUpdateTodo(filter: $filter, owner: $owner) {
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
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo(
    $filter: ModelSubscriptionTodoFilterInput
    $owner: String
  ) {
    onDeleteTodo(filter: $filter, owner: $owner) {
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
