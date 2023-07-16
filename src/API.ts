/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserDetailsInput = {
  id?: string | null,
  firstName: string,
  lastName: string,
  email: string,
  profilePicture?: string | null,
  country?: string | null,
  state?: string | null,
  city?: string | null,
  bio?: string | null,
};

export type ModelUserDetailsConditionInput = {
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  profilePicture?: ModelStringInput | null,
  country?: ModelStringInput | null,
  state?: ModelStringInput | null,
  city?: ModelStringInput | null,
  bio?: ModelStringInput | null,
  and?: Array< ModelUserDetailsConditionInput | null > | null,
  or?: Array< ModelUserDetailsConditionInput | null > | null,
  not?: ModelUserDetailsConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type UserDetails = {
  __typename: "UserDetails",
  id: string,
  firstName: string,
  lastName: string,
  email: string,
  profilePicture?: string | null,
  country?: string | null,
  state?: string | null,
  city?: string | null,
  bio?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateUserDetailsInput = {
  id: string,
  firstName?: string | null,
  lastName?: string | null,
  email?: string | null,
  profilePicture?: string | null,
  country?: string | null,
  state?: string | null,
  city?: string | null,
  bio?: string | null,
};

export type DeleteUserDetailsInput = {
  id: string,
};

export type CreateTodoInput = {
  id?: string | null,
  userId: string,
  name: string,
  description: string,
  status: string,
};

export type ModelTodoConditionInput = {
  userId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  status?: ModelStringInput | null,
  and?: Array< ModelTodoConditionInput | null > | null,
  or?: Array< ModelTodoConditionInput | null > | null,
  not?: ModelTodoConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Todo = {
  __typename: "Todo",
  id: string,
  userId: string,
  name: string,
  description: string,
  status: string,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateTodoInput = {
  id: string,
  userId?: string | null,
  name?: string | null,
  description?: string | null,
  status?: string | null,
};

export type DeleteTodoInput = {
  id: string,
};

export type CreateNoteInput = {
  id?: string | null,
  userId: string,
  title: string,
  description: string,
};

export type ModelNoteConditionInput = {
  userId?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelNoteConditionInput | null > | null,
  or?: Array< ModelNoteConditionInput | null > | null,
  not?: ModelNoteConditionInput | null,
};

export type Note = {
  __typename: "Note",
  id: string,
  userId: string,
  title: string,
  description: string,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateNoteInput = {
  id: string,
  userId?: string | null,
  title?: string | null,
  description?: string | null,
};

export type DeleteNoteInput = {
  id: string,
};

export type ModelUserDetailsFilterInput = {
  id?: ModelIDInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  profilePicture?: ModelStringInput | null,
  country?: ModelStringInput | null,
  state?: ModelStringInput | null,
  city?: ModelStringInput | null,
  bio?: ModelStringInput | null,
  and?: Array< ModelUserDetailsFilterInput | null > | null,
  or?: Array< ModelUserDetailsFilterInput | null > | null,
  not?: ModelUserDetailsFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelUserDetailsConnection = {
  __typename: "ModelUserDetailsConnection",
  items:  Array<UserDetails | null >,
  nextToken?: string | null,
};

export type ModelTodoFilterInput = {
  id?: ModelStringInput | null,
  userId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  status?: ModelStringInput | null,
  and?: Array< ModelTodoFilterInput | null > | null,
  or?: Array< ModelTodoFilterInput | null > | null,
  not?: ModelTodoFilterInput | null,
};

export type ModelTodoConnection = {
  __typename: "ModelTodoConnection",
  items:  Array<Todo | null >,
  nextToken?: string | null,
};

export type ModelNoteFilterInput = {
  id?: ModelStringInput | null,
  userId?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelNoteFilterInput | null > | null,
  or?: Array< ModelNoteFilterInput | null > | null,
  not?: ModelNoteFilterInput | null,
};

export type ModelNoteConnection = {
  __typename: "ModelNoteConnection",
  items:  Array<Note | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionUserDetailsFilterInput = {
  firstName?: ModelSubscriptionStringInput | null,
  lastName?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  profilePicture?: ModelSubscriptionStringInput | null,
  country?: ModelSubscriptionStringInput | null,
  state?: ModelSubscriptionStringInput | null,
  city?: ModelSubscriptionStringInput | null,
  bio?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserDetailsFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserDetailsFilterInput | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionTodoFilterInput = {
  id?: ModelSubscriptionStringInput | null,
  userId?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTodoFilterInput | null > | null,
  or?: Array< ModelSubscriptionTodoFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionNoteFilterInput = {
  id?: ModelSubscriptionStringInput | null,
  userId?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionNoteFilterInput | null > | null,
  or?: Array< ModelSubscriptionNoteFilterInput | null > | null,
};

export type CreateUserDetailsMutationVariables = {
  input: CreateUserDetailsInput,
  condition?: ModelUserDetailsConditionInput | null,
};

export type CreateUserDetailsMutation = {
  createUserDetails?:  {
    __typename: "UserDetails",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    profilePicture?: string | null,
    country?: string | null,
    state?: string | null,
    city?: string | null,
    bio?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserDetailsMutationVariables = {
  input: UpdateUserDetailsInput,
  condition?: ModelUserDetailsConditionInput | null,
};

export type UpdateUserDetailsMutation = {
  updateUserDetails?:  {
    __typename: "UserDetails",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    profilePicture?: string | null,
    country?: string | null,
    state?: string | null,
    city?: string | null,
    bio?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserDetailsMutationVariables = {
  input: DeleteUserDetailsInput,
  condition?: ModelUserDetailsConditionInput | null,
};

export type DeleteUserDetailsMutation = {
  deleteUserDetails?:  {
    __typename: "UserDetails",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    profilePicture?: string | null,
    country?: string | null,
    state?: string | null,
    city?: string | null,
    bio?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateTodoMutationVariables = {
  input: CreateTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type CreateTodoMutation = {
  createTodo?:  {
    __typename: "Todo",
    id: string,
    userId: string,
    name: string,
    description: string,
    status: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateTodoMutationVariables = {
  input: UpdateTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type UpdateTodoMutation = {
  updateTodo?:  {
    __typename: "Todo",
    id: string,
    userId: string,
    name: string,
    description: string,
    status: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteTodoMutationVariables = {
  input: DeleteTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type DeleteTodoMutation = {
  deleteTodo?:  {
    __typename: "Todo",
    id: string,
    userId: string,
    name: string,
    description: string,
    status: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateNoteMutationVariables = {
  input: CreateNoteInput,
  condition?: ModelNoteConditionInput | null,
};

export type CreateNoteMutation = {
  createNote?:  {
    __typename: "Note",
    id: string,
    userId: string,
    title: string,
    description: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateNoteMutationVariables = {
  input: UpdateNoteInput,
  condition?: ModelNoteConditionInput | null,
};

export type UpdateNoteMutation = {
  updateNote?:  {
    __typename: "Note",
    id: string,
    userId: string,
    title: string,
    description: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteNoteMutationVariables = {
  input: DeleteNoteInput,
  condition?: ModelNoteConditionInput | null,
};

export type DeleteNoteMutation = {
  deleteNote?:  {
    __typename: "Note",
    id: string,
    userId: string,
    title: string,
    description: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type GetUserDetailsQueryVariables = {
  id: string,
};

export type GetUserDetailsQuery = {
  getUserDetails?:  {
    __typename: "UserDetails",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    profilePicture?: string | null,
    country?: string | null,
    state?: string | null,
    city?: string | null,
    bio?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUserDetailsQueryVariables = {
  id?: string | null,
  filter?: ModelUserDetailsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListUserDetailsQuery = {
  listUserDetails?:  {
    __typename: "ModelUserDetailsConnection",
    items:  Array< {
      __typename: "UserDetails",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      profilePicture?: string | null,
      country?: string | null,
      state?: string | null,
      city?: string | null,
      bio?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type UserByEmailQueryVariables = {
  email: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserDetailsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UserByEmailQuery = {
  userByEmail?:  {
    __typename: "ModelUserDetailsConnection",
    items:  Array< {
      __typename: "UserDetails",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      profilePicture?: string | null,
      country?: string | null,
      state?: string | null,
      city?: string | null,
      bio?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTodoQueryVariables = {
  id: string,
};

export type GetTodoQuery = {
  getTodo?:  {
    __typename: "Todo",
    id: string,
    userId: string,
    name: string,
    description: string,
    status: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListTodosQueryVariables = {
  filter?: ModelTodoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTodosQuery = {
  listTodos?:  {
    __typename: "ModelTodoConnection",
    items:  Array< {
      __typename: "Todo",
      id: string,
      userId: string,
      name: string,
      description: string,
      status: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTodosByUserIdQueryVariables = {
  userId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelTodoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GetTodosByUserIdQuery = {
  getTodosByUserId?:  {
    __typename: "ModelTodoConnection",
    items:  Array< {
      __typename: "Todo",
      id: string,
      userId: string,
      name: string,
      description: string,
      status: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetNoteQueryVariables = {
  id: string,
};

export type GetNoteQuery = {
  getNote?:  {
    __typename: "Note",
    id: string,
    userId: string,
    title: string,
    description: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListNotesQueryVariables = {
  filter?: ModelNoteFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListNotesQuery = {
  listNotes?:  {
    __typename: "ModelNoteConnection",
    items:  Array< {
      __typename: "Note",
      id: string,
      userId: string,
      title: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetNotesByUserIdQueryVariables = {
  userId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelNoteFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GetNotesByUserIdQuery = {
  getNotesByUserId?:  {
    __typename: "ModelNoteConnection",
    items:  Array< {
      __typename: "Note",
      id: string,
      userId: string,
      title: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserDetailsSubscriptionVariables = {
  filter?: ModelSubscriptionUserDetailsFilterInput | null,
  id?: string | null,
};

export type OnCreateUserDetailsSubscription = {
  onCreateUserDetails?:  {
    __typename: "UserDetails",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    profilePicture?: string | null,
    country?: string | null,
    state?: string | null,
    city?: string | null,
    bio?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserDetailsSubscriptionVariables = {
  filter?: ModelSubscriptionUserDetailsFilterInput | null,
  id?: string | null,
};

export type OnUpdateUserDetailsSubscription = {
  onUpdateUserDetails?:  {
    __typename: "UserDetails",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    profilePicture?: string | null,
    country?: string | null,
    state?: string | null,
    city?: string | null,
    bio?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserDetailsSubscriptionVariables = {
  filter?: ModelSubscriptionUserDetailsFilterInput | null,
  id?: string | null,
};

export type OnDeleteUserDetailsSubscription = {
  onDeleteUserDetails?:  {
    __typename: "UserDetails",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    profilePicture?: string | null,
    country?: string | null,
    state?: string | null,
    city?: string | null,
    bio?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
  owner?: string | null,
};

export type OnCreateTodoSubscription = {
  onCreateTodo?:  {
    __typename: "Todo",
    id: string,
    userId: string,
    name: string,
    description: string,
    status: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
  owner?: string | null,
};

export type OnUpdateTodoSubscription = {
  onUpdateTodo?:  {
    __typename: "Todo",
    id: string,
    userId: string,
    name: string,
    description: string,
    status: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
  owner?: string | null,
};

export type OnDeleteTodoSubscription = {
  onDeleteTodo?:  {
    __typename: "Todo",
    id: string,
    userId: string,
    name: string,
    description: string,
    status: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateNoteSubscriptionVariables = {
  filter?: ModelSubscriptionNoteFilterInput | null,
  owner?: string | null,
};

export type OnCreateNoteSubscription = {
  onCreateNote?:  {
    __typename: "Note",
    id: string,
    userId: string,
    title: string,
    description: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateNoteSubscriptionVariables = {
  filter?: ModelSubscriptionNoteFilterInput | null,
  owner?: string | null,
};

export type OnUpdateNoteSubscription = {
  onUpdateNote?:  {
    __typename: "Note",
    id: string,
    userId: string,
    title: string,
    description: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteNoteSubscriptionVariables = {
  filter?: ModelSubscriptionNoteFilterInput | null,
  owner?: string | null,
};

export type OnDeleteNoteSubscription = {
  onDeleteNote?:  {
    __typename: "Note",
    id: string,
    userId: string,
    title: string,
    description: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};
