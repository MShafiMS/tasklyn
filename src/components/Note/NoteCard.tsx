import { Note } from "@TasklynAlias/lib/types/types";
import { formattedDateTime } from "@TasklynAlias/utils";

interface IProps {
  note: Note;
  edit: () => void;
}

const NoteCard = ({ note, edit }: IProps) => {
  return (
    <div
      onClick={edit}
      className="cursor-pointer w-44 lg:w-48 py-2 flex flex-col justify-between px-4 dark:bg-white/5 bg-black/5 hover:dark:bg-white/10 hover:bg-black/10 rounded-xl"
    >
      <div>
        <h1 className="text-xl truncate">{note?.title}</h1>
        <p className="truncate text-sm text-gray-500">
          {note?.description.slice(0, 160)}
        </p>
      </div>
      <p className="mt-4 text-xs uppercase text-[#808080]">
        Last Update: {formattedDateTime(note?.updatedAt)}
      </p>
    </div>
  );
};

export default NoteCard;
