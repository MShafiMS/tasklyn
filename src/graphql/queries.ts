/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUserDetails = /* GraphQL */ `
  query GetUserDetails($id: ID!) {
    getUserDetails(id: $id) {
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
export const listUserDetails = /* GraphQL */ `
  query ListUserDetails(
    $id: ID
    $filter: ModelUserDetailsFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUserDetails(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const userByEmail = /* GraphQL */ `
  query UserByEmail(
    $email: String!
    $sortDirection: ModelSortDirection
    $filter: ModelUserDetailsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userByEmail(
      email: $email
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      userId
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
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        name
        description
        status
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getTodosByUserId = /* GraphQL */ `
  query GetTodosByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getTodosByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        name
        description
        status
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getNote = /* GraphQL */ `
  query GetNote($id: ID!) {
    getNote(id: $id) {
      id
      userId
      title
      description
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listNotes = /* GraphQL */ `
  query ListNotes(
    $filter: ModelNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        title
        description
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getNotesByUserId = /* GraphQL */ `
  query GetNotesByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getNotesByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        title
        description
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
