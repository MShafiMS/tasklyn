import UserLayout from "@TasklynAlias/components/Layout/UserLayout";
import Loader from "@TasklynAlias/components/Loader/Loader";
import CreateNoteModal from "@TasklynAlias/components/Note/CreateNoteModal";
import EditNoteModal from "@TasklynAlias/components/Note/EditNoteModal";
import NoteCard from "@TasklynAlias/components/Note/NoteCard";
import { Note } from "@TasklynAlias/lib/types/types";
import { INoteStore, useNoteStore } from "@TasklynAlias/stores/NoteStore";
import { sortBy } from "lodash";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { PiPlusLight } from "react-icons/pi";

const Notes = () => {
  return <AllNotes />;
};
Notes.PageLayout = UserLayout;
export default Notes;

const AllNotes = observer(() => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showEdit, setShowEdit] = useState<string>("");
  const [search, setSearch] = useState<string>("");
  const noteStore: INoteStore = useNoteStore();

  useEffect(() => {
    noteStore.fetchnotes();
  }, [noteStore]);

  const noteItems = sortBy(
    noteStore?.notes,
    (item: Note) => item?.updatedAt
  ).reverse();

  const searched = noteItems.filter((s: Note) =>
    s.title?.toLowerCase().includes(search)
  );

  if (noteStore.loading) {
    return <Loader />;
  }

  return (
    <div className="lg:m-6 m-3">
      <h1 className="lg:text-5xl text-4xl font-medium text-[#0d101a] dark:text-gray-200">
        Notes
      </h1>
      <CreateNoteModal show={showModal} close={() => setShowModal(false)} />
      <EditNoteModal show={showEdit} close={() => setShowEdit("")} />
      <div
        className={`relative w-full lg:w-fit mt-6 ${
          !noteItems?.length && "hidden"
        }`}
      >
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Note"
          className="outline-none w-full lg:w-80 bg-[#161C2C]/5 dark:bg-white/5 py-1.5 rounded-lg px-2"
        />
        <BsSearch className="absolute right-2 top-1/2 -translate-y-1/2" />
      </div>
      <div className="grid gap-2 mt-4 lg:gap-4 md:grid-cols-3 grid-cols-2 lg:grid-cols-4 items-center">
        {(searched || noteItems)?.map((note: Note) => (
          <NoteCard
            key={note.id}
            note={note}
            edit={() => setShowEdit(note.id)}
          />
        ))}
        <div
          onClick={() => setShowModal(true)}
          className={`cursor-pointer w-44 lg:w-48 ${
            noteItems.length ? "h-full" : "h-52 mt-5"
          } hover:text-[#2E9CDB] py-2 hover:dark:text-[#55CBF1] text-[#161C2C]/60 dark:text-gray-400 dark:bg-white/5 bg-black/5 hover:dark:bg-white/10 hover:bg-black/10 rounded-xl flex flex-col items-center justify-center`}
        >
          <PiPlusLight size={noteItems.length ? 50 : 110} />
          <p className={`${noteItems.length && "text-sm"}`}>Add Note</p>
        </div>
      </div>
    </div>
  );
});
