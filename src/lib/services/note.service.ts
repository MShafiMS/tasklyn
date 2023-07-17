import {
  CreateNoteInput,
  DeleteNoteInput,
  GetNotesByUserIdQuery,
  UpdateNoteInput,
} from "@TasklynAlias/API";
import {
  createNote,
  deleteNote,
  updateNote,
} from "@TasklynAlias/graphql/mutations";
import { getNotesByUserId } from "@TasklynAlias/graphql/queries";
import { GraphQLQuery } from "@aws-amplify/api";
import { API, Auth } from "aws-amplify";

export const createNoteData = async <Note>(note: Note) => {
  try {
    const { attributes } = await Auth.currentAuthenticatedUser();
    const { data } = await API.graphql<GraphQLQuery<CreateNoteInput>>({
      query: createNote,
      variables: { input: { ...note, userId: attributes?.sub } },
    });
    if (!data) return;
    return data;
  } catch (error) {
    console.error("@note.service::createNote::error", error);
    throw error;
  }
};

export const updateNoteData = async <Note>(note: Note) => {
  try {
    const { data } = await API.graphql<GraphQLQuery<UpdateNoteInput>>({
      query: updateNote,
      variables: { input: note },
    });
    if (!data) return;
    return data;
  } catch (error) {
    console.error("@note.service::updateNote::error", error);
    throw error;
  }
};

export const deleteNoteData = async (id: string) => {
  try {
    const { data } = await API.graphql<GraphQLQuery<DeleteNoteInput>>({
      query: deleteNote,
      variables: { input: { id } },
    });
    if (!data) return;
    return data;
  } catch (error) {
    console.error("@note.service::deleteNote::error", error);
    throw error;
  }
};

export const fetchNotes = async () => {
  try {
    const { attributes } = await Auth.currentAuthenticatedUser();
    const { data } = await API.graphql<GraphQLQuery<GetNotesByUserIdQuery>>({
      query: getNotesByUserId,
      variables: {
        userId: attributes?.sub,
      },
    });
    if (!data) return;
    return data.getNotesByUserId?.items || [];
  } catch (error) {
    console.error("@todo.service::fetchNotes::error", error);
    throw error;
  }
};
