import { Note } from "@TasklynAlias/lib/types/types";
import { INoteStore, useNoteStore } from "@TasklynAlias/stores/NoteStore";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ImSpinner6 } from "react-icons/im";
import { IoMdClose } from "react-icons/io";
import { IoCreateOutline } from "react-icons/io5";
import { v4 as uuid } from "uuid";

interface IProps {
  show: boolean;
  close: () => void;
}

const CreateNoteModal = ({ show, close }: IProps) => {
  const noteStore: INoteStore = useNoteStore();
  const [loading, setLoading] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<Note>();

  const onSubmit = async (data: any) => {
    try {
      const note = { id: uuid(), ...data };
      setLoading(true);
      await noteStore.addNote(note);
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

  return (
    <div
      className={`fixed z-50 left-1/2 ${
        show ? "top-1/2" : "top-[5000px]"
      } w-screen h-screen -translate-y-1/2 -translate-x-1/2 bg-gray-300/70 dark:bg-[#20273d]/70 flex items-center justify-center`}
    >
      <div onClick={close} className="w-full h-full absolute z-10" />
      <div
        className={`relative z-20 w-11/12 lg:w-fit ${
          show ? "top-0" : "top-10"
        } duration-100 dark:bg-[#20273d] p-4 bg-gray-200 rounded-lg shadow-xl dark:shadow-gray-900/60 border border-black/10 dark:border-white/10`}
      >
        <div className="flex justify-between">
          <div className="flex gap-2 items-center text-lg uppercase font-medium">
            <IoCreateOutline className="text-2xl" /> Add Note
          </div>
          <button
            type="button"
            onClick={close}
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
              {...register("title", {
                required: { value: true, message: "Title is required" },
              })}
              className={`lg:w-96 w-80 placeholder:uppercase font-medium outline-none text-2xl px-4 py-2 rounded-lg bg-gray-300/50 dark:bg-gray-300/5 ${
                errors.title?.type === "required" &&
                "placeholder:text-red-500/60"
              }`}
            />
          </div>
          <textarea
            id=""
            {...register("description", {
              required: { value: true, message: "Description is required" },
            })}
            placeholder={errors.description?.message || "Description"}
            className={`w-full placeholder:uppercase outline-none rounded-lg bg-gray-300/30 dark:bg-gray-400/5 px-4 py-3 h-56 resize-none ${
              errors.description?.type === "required" &&
              "placeholder:text-red-500/60"
            }`}
          ></textarea>
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={loading}
              className="px-10 mt-4 bg-[#161C2C] dark:bg-gray-200 dark:text-gray-700 text-white py-2 text-xl rounded-lg hover:bg-opacity-90"
            >
              {loading ? (
                <ImSpinner6 size={28} className="animate-spin block mx-auto" />
              ) : (
                "Create"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateNoteModal;
