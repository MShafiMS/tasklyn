import {
  createNoteData,
  deleteNoteData,
  fetchNotes,
  updateNoteData,
} from "@TasklynAlias/lib/services/note.service";
import { Note } from "@TasklynAlias/lib/types/types";
import { flow, types } from "mobx-state-tree";

const NoteModel = types.model("NoteModel", {
  id: types.identifier,
  title: types.string,
  description: types.string,
  userId: types.string,
  createdAt: types.string,
  updatedAt: types.string,
});

const NoteStore = types
  .model("NoteStore", {
    notes: types.optional(types.array(NoteModel), []),
    loading: types.optional(types.boolean, false),
  })
  .actions((self) => ({
    addNote: flow(function* (note: Note) {
      try {
        const createdNoteData = yield createNoteData(note);
        if (createdNoteData) {
          const createdNote = NoteModel.create(createdNoteData.createNote);
          self.notes.push(createdNote);
        }
      } catch (error) {
        console.error("Error adding note:", error);
      }
    }),
    fetchnotes: flow(function* () {
      try {
        self.loading = true;
        const notes: Note[] = yield fetchNotes();
        if (notes) {
          self.notes.replace(notes);
        }
      } catch (error) {
        console.error("Error fetching notes:", error);
      } finally {
        self.loading = false;
      }
    }),
    updateNote: flow(function* (note: Note) {
      try {
        const updatedNote: Note | null = yield updateNoteData(note);
        if (updatedNote) {
          const index = self.notes.findIndex((t) => t.id === updatedNote.id);
          if (index >= 0) {
            self.notes[index] = updatedNote;
          }
        }
      } catch (error) {
        console.error("Error updating note:", error);
      }
    }),
    deleteNote: flow(function* (noteId: string) {
      try {
        const success: boolean = yield deleteNoteData(noteId);
        if (success) {
          const index = self.notes.findIndex((t) => t.id === noteId);
          if (index >= 0) {
            self.notes.splice(index, 1);
          }
        }
      } catch (error) {
        console.error("Error deleting note:", error);
      }
    }),
  }));

export type INoteStore = typeof NoteStore.Type;

let store: INoteStore | null = null;

export function initializeNoteStore(initialData = { notes: [] }): INoteStore {
  if (store === null) {
    store = NoteStore.create(initialData);
  }
  return store;
}
export function useNoteStore(initialData = { notes: [] }): INoteStore {
  return initializeNoteStore(initialData);
}
