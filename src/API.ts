/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTodoInput = {
  id?: string | null,
  title: string,
  description: string,
  status: TaskStatus,
  updatedAt?: string | null,
  createdAt?: string | null,
};

export enum TaskStatus {
  TO_DO = "TO_DO",
  IN_PROGRESS = "IN_PROGRESS",
  COMPLETED = "COMPLETED",
}


export type ModelTodoConditionInput = {
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  status?: ModelTaskStatusInput | null,
  updatedAt?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelTodoConditionInput | null > | null,
  or?: Array< ModelTodoConditionInput | null > | null,
  not?: ModelTodoConditionInput | null,
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

export type ModelTaskStatusInput = {
  eq?: TaskStatus | null,
  ne?: TaskStatus | null,
};

export type Todo = {
  __typename: "Todo",
  id: string,
  title: string,
  description: string,
  status: TaskStatus,
  updatedAt?: string | null,
  createdAt?: string | null,
};

export type UpdateTodoInput = {
  id: string,
  title?: string | null,
  description?: string | null,
  status?: TaskStatus | null,
  updatedAt?: string | null,
  createdAt?: string | null,
};

export type DeleteTodoInput = {
  id: string,
};

export type UpdateUserProfileInput = {
  id: string,
  name?: string | null,
  email?: string | null,
  profilePicture?: string | null,
  country?: string | null,
  state?: string | null,
  city?: string | null,
  bio?: string | null,
  config?: string | null,
  createdAt?: string | null,
};

export type ModelUserProfileConditionInput = {
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  profilePicture?: ModelStringInput | null,
  country?: ModelStringInput | null,
  state?: ModelStringInput | null,
  city?: ModelStringInput | null,
  bio?: ModelStringInput | null,
  config?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelUserProfileConditionInput | null > | null,
  or?: Array< ModelUserProfileConditionInput | null > | null,
  not?: ModelUserProfileConditionInput | null,
};

export type UserProfile = {
  __typename: "UserProfile",
  id: string,
  name: string,
  email: string,
  profilePicture?: string | null,
  country?: string | null,
  state?: string | null,
  city?: string | null,
  bio?: string | null,
  config?: string | null,
  createdAt?: string | null,
  updatedAt: string,
};

export type DeleteUserProfileInput = {
  id: string,
};

export type CreateUserProfileInput = {
  id?: string | null,
  name: string,
  email: string,
  profilePicture?: string | null,
  country?: string | null,
  state?: string | null,
  city?: string | null,
  bio?: string | null,
  config?: string | null,
  createdAt?: string | null,
};

export type ModelTodoFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  status?: ModelTaskStatusInput | null,
  updatedAt?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelTodoFilterInput | null > | null,
  or?: Array< ModelTodoFilterInput | null > | null,
  not?: ModelTodoFilterInput | null,
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

export type ModelTodoConnection = {
  __typename: "ModelTodoConnection",
  items:  Array<Todo | null >,
  nextToken?: string | null,
};

export type ModelUserProfileFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  profilePicture?: ModelStringInput | null,
  country?: ModelStringInput | null,
  state?: ModelStringInput | null,
  city?: ModelStringInput | null,
  bio?: ModelStringInput | null,
  config?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelUserProfileFilterInput | null > | null,
  or?: Array< ModelUserProfileFilterInput | null > | null,
  not?: ModelUserProfileFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelUserProfileConnection = {
  __typename: "ModelUserProfileConnection",
  items:  Array<UserProfile | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionTodoFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
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

export type ModelSubscriptionUserProfileFilterInput = {
  name?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  profilePicture?: ModelSubscriptionStringInput | null,
  country?: ModelSubscriptionStringInput | null,
  state?: ModelSubscriptionStringInput | null,
  city?: ModelSubscriptionStringInput | null,
  bio?: ModelSubscriptionStringInput | null,
  config?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserProfileFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserProfileFilterInput | null > | null,
};

export type CreateTodoMutationVariables = {
  input: CreateTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type CreateTodoMutation = {
  createTodo?:  {
    __typename: "Todo",
    id: string,
    title: string,
    description: string,
    status: TaskStatus,
    updatedAt?: string | null,
    createdAt?: string | null,
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
    title: string,
    description: string,
    status: TaskStatus,
    updatedAt?: string | null,
    createdAt?: string | null,
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
    title: string,
    description: string,
    status: TaskStatus,
    updatedAt?: string | null,
    createdAt?: string | null,
  } | null,
};

export type UpdateUserProfileMutationVariables = {
  input: UpdateUserProfileInput,
  condition?: ModelUserProfileConditionInput | null,
};

export type UpdateUserProfileMutation = {
  updateUserProfile?:  {
    __typename: "UserProfile",
    id: string,
    name: string,
    email: string,
    profilePicture?: string | null,
    country?: string | null,
    state?: string | null,
    city?: string | null,
    bio?: string | null,
    config?: string | null,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type DeleteUserProfileMutationVariables = {
  input: DeleteUserProfileInput,
  condition?: ModelUserProfileConditionInput | null,
};

export type DeleteUserProfileMutation = {
  deleteUserProfile?:  {
    __typename: "UserProfile",
    id: string,
    name: string,
    email: string,
    profilePicture?: string | null,
    country?: string | null,
    state?: string | null,
    city?: string | null,
    bio?: string | null,
    config?: string | null,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type CreateUserProfileMutationVariables = {
  input: CreateUserProfileInput,
  condition?: ModelUserProfileConditionInput | null,
};

export type CreateUserProfileMutation = {
  createUserProfile?:  {
    __typename: "UserProfile",
    id: string,
    name: string,
    email: string,
    profilePicture?: string | null,
    country?: string | null,
    state?: string | null,
    city?: string | null,
    bio?: string | null,
    config?: string | null,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type GetTodoQueryVariables = {
  id: string,
};

export type GetTodoQuery = {
  getTodo?:  {
    __typename: "Todo",
    id: string,
    title: string,
    description: string,
    status: TaskStatus,
    updatedAt?: string | null,
    createdAt?: string | null,
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
      title: string,
      description: string,
      status: TaskStatus,
      updatedAt?: string | null,
      createdAt?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserProfileQueryVariables = {
  id: string,
};

export type GetUserProfileQuery = {
  getUserProfile?:  {
    __typename: "UserProfile",
    id: string,
    name: string,
    email: string,
    profilePicture?: string | null,
    country?: string | null,
    state?: string | null,
    city?: string | null,
    bio?: string | null,
    config?: string | null,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type ListUserProfilesQueryVariables = {
  id?: string | null,
  filter?: ModelUserProfileFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListUserProfilesQuery = {
  listUserProfiles?:  {
    __typename: "ModelUserProfileConnection",
    items:  Array< {
      __typename: "UserProfile",
      id: string,
      name: string,
      email: string,
      profilePicture?: string | null,
      country?: string | null,
      state?: string | null,
      city?: string | null,
      bio?: string | null,
      config?: string | null,
      createdAt?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type AppUserByEmailQueryVariables = {
  email: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserProfileFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type AppUserByEmailQuery = {
  appUserByEmail?:  {
    __typename: "ModelUserProfileConnection",
    items:  Array< {
      __typename: "UserProfile",
      id: string,
      name: string,
      email: string,
      profilePicture?: string | null,
      country?: string | null,
      state?: string | null,
      city?: string | null,
      bio?: string | null,
      config?: string | null,
      createdAt?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
};

export type OnCreateTodoSubscription = {
  onCreateTodo?:  {
    __typename: "Todo",
    id: string,
    title: string,
    description: string,
    status: TaskStatus,
    updatedAt?: string | null,
    createdAt?: string | null,
  } | null,
};

export type OnUpdateTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
};

export type OnUpdateTodoSubscription = {
  onUpdateTodo?:  {
    __typename: "Todo",
    id: string,
    title: string,
    description: string,
    status: TaskStatus,
    updatedAt?: string | null,
    createdAt?: string | null,
  } | null,
};

export type OnDeleteTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
};

export type OnDeleteTodoSubscription = {
  onDeleteTodo?:  {
    __typename: "Todo",
    id: string,
    title: string,
    description: string,
    status: TaskStatus,
    updatedAt?: string | null,
    createdAt?: string | null,
  } | null,
};

export type OnCreateUserProfileSubscriptionVariables = {
  filter?: ModelSubscriptionUserProfileFilterInput | null,
  id?: string | null,
};

export type OnCreateUserProfileSubscription = {
  onCreateUserProfile?:  {
    __typename: "UserProfile",
    id: string,
    name: string,
    email: string,
    profilePicture?: string | null,
    country?: string | null,
    state?: string | null,
    city?: string | null,
    bio?: string | null,
    config?: string | null,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserProfileSubscriptionVariables = {
  filter?: ModelSubscriptionUserProfileFilterInput | null,
  id?: string | null,
};

export type OnUpdateUserProfileSubscription = {
  onUpdateUserProfile?:  {
    __typename: "UserProfile",
    id: string,
    name: string,
    email: string,
    profilePicture?: string | null,
    country?: string | null,
    state?: string | null,
    city?: string | null,
    bio?: string | null,
    config?: string | null,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserProfileSubscriptionVariables = {
  filter?: ModelSubscriptionUserProfileFilterInput | null,
  id?: string | null,
};

export type OnDeleteUserProfileSubscription = {
  onDeleteUserProfile?:  {
    __typename: "UserProfile",
    id: string,
    name: string,
    email: string,
    profilePicture?: string | null,
    country?: string | null,
    state?: string | null,
    city?: string | null,
    bio?: string | null,
    config?: string | null,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};
