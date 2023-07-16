export type ISignUpUser = {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export type navType = {
  title: string;
  path: string;
  icon: any;
};

export type IUser = {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  country: string;
  state: string;
  city: string;
  bio: string;
  profilePicture: string;
};

export interface Todo {
  id: string;
  name: string;
  description: string;
  userId: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

export interface Note {
  id: string;
  title: string;
  description: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
}
