import { Note } from "@TasklynAlias/lib/types/types";
import { INoteStore, useNoteStore } from "@TasklynAlias/stores/NoteStore";
import { getTimeAgo } from "@TasklynAlias/utils";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ImSpinner6 } from "react-icons/im";
import { IoMdClose } from "react-icons/io";
import { IoCreateOutline } from "react-icons/io5";

interface IProps {
  show: string;
  close: () => void;
}

const EditNoteModal = ({ show, close }: IProps) => {
  const noteStore: INoteStore = useNoteStore();
  const [loading, setLoading] = useState(false);
  const [dloading, setDLoading] = useState(false);
  const note = noteStore.notes.find((t) => t.id === show);

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<Note>();

  const onSubmit = async (data: Note) => {
    try {
      const updatedNote = {
        id: note?.id,
        title: data?.title || note?.title,
        description: data?.description || note?.description,
      };
      setLoading(true);
      await noteStore.updateNote(updatedNote as Note);
      setLoading(false);
      reset();
      noteStore.fetchnotes();
      close();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    try {
      setDLoading(true);
      if (note?.id) {
        await noteStore.deleteNote(note?.id);
        reset();
        noteStore.fetchnotes();
        close();
        setDLoading(false);
      }
    } catch (error) {
      console.error("error delete note:", error);
    } finally {
      setDLoading(false);
    }
  };

  return (
    <div
      className={`fixed z-50 left-1/2 ${
        show ? "top-1/2" : "top-[5000px]"
      } w-screen h-screen -translate-y-1/2 -translate-x-1/2 bg-gray-300/70 dark:bg-[#20273d]/70 flex items-center justify-center`}
    >
      <div
        onClick={() => {
          close();
        }}
        className="w-full h-full absolute z-10"
      />
      <div
        className={`relative z-20 w-11/12 lg:w-fit ${
          show ? "top-0" : "top-10"
        } duration-100 dark:bg-[#20273d] p-4 bg-gray-200 rounded-lg shadow-xl dark:shadow-gray-900/60 border border-black/10 dark:border-white/10`}
      >
        <div className="flex justify-between">
          <div className="flex gap-2 items-center text-lg uppercase font-medium">
            <IoCreateOutline className="text-2xl" /> Edit Todo
          </div>
          <button
            type="button"
            onClick={() => {
              close();
            }}
            className="p-1.5 rounded text-xl dark:hover:bg-white/5 hover:bg-black/10"
          >
            <IoMdClose />
          </button>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
          <div className="lg:mb-6 mb-3 flex lg:flex-row flex-col lg:items-center items-end lg:gap-6 gap-2 justify-between">
            <input
              type="text"
              placeholder={errors.title?.message || "Title"}
              {...register("title")}
              defaultValue={note?.title}
              className={`lg:w-96 w-80 placeholder:uppercase font-medium outline-none text-2xl px-4 py-2 rounded-lg bg-gray-300/50 dark:bg-gray-300/5 ${
                errors.title?.type === "required" &&
                "placeholder:text-red-500/60"
              }`}
            />
            <button
              type="button"
              onClick={() => handleDelete()}
              className="px-4 bg-[#b1092d] text-white py-2 text-xl rounded-lg hover:bg-opacity-90"
            >
              {dloading ? (
                <ImSpinner6 size={28} className="animate-spin block mx-auto" />
              ) : (
                "Delete"
              )}
            </button>
          </div>
          <textarea
            id=""
            {...register("description")}
            defaultValue={note?.description}
            placeholder={errors.description?.message || "Description"}
            className={`w-full placeholder:uppercase outline-none rounded-lg bg-gray-300/30 dark:bg-gray-400/5 px-4 py-3 h-56 resize-none ${
              errors.description?.type === "required" &&
              "placeholder:text-red-500/60"
            }`}
          ></textarea>
          <div className="flex justify-between items-end">
            <div className="text-sm space-y-2">
              <p>Created {getTimeAgo(note?.createdAt as string)}</p>
              <p>Updated {getTimeAgo(note?.updatedAt as string)}</p>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="px-10 mt-4 bg-[#161C2C] dark:bg-gray-200 dark:text-gray-700 text-white py-2 text-xl rounded-lg hover:bg-opacity-90"
            >
              {loading ? (
                <ImSpinner6 size={28} className="animate-spin block mx-auto" />
              ) : (
                "Save"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditNoteModal;
