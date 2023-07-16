import { Todo } from "@TasklynAlias/lib/types/types";
import { formattedDateTime } from "@TasklynAlias/utils";
import { BiSolidChevronDown } from "react-icons/bi";
import { BsFillBookmarkCheckFill } from "react-icons/bs";
import {
  TbProgressAlert,
  TbProgressBolt,
  TbProgressCheck,
} from "react-icons/tb";

interface IProps {
  item: Todo;
  setItem: (id: string) => void;
  index: number;
  setData: (data: Todo) => void;
}

const OverviewCard = ({ item, setItem, index, setData }: IProps) => {
  return (
    <div className="cursor-pointer w-full flex justify-between items-center bg-white hover:bg-opacity-50 dark:dark:bg-[#161C2C] hover:dark:bg-opacity-50 border border-black/20 dark:border-white/10 px-3 py-2">
      <div
        onClick={() => setItem(item.id)}
        className="flex w-full items-center gap-2 text-lg dark:font-thin"
      >
        <BsFillBookmarkCheckFill className="text-blue-500" />
        <h1>
          {index + 1} - {item.name}
        </h1>
      </div>
      <p
        onClick={() => setItem(item.id)}
        className="w-full lg:block hidden text-xs uppercase font-medium text-gray-400 dark:text-gray-500"
      >
        Last Update: {formattedDateTime(item.updatedAt)}
      </p>
      <div className="relative w-80 hidden lg:flex justify-end">
        <button
          type="button"
          onClick={() => setData(item)}
          className={`px-1.5 py-0.5 rounded uppercase text-sm flex gap-2 items-center ${
            (item.status === "TO DO" && "bg-gray-300/50 dark:bg-gray-300/5") ||
            (item.status === "IN PROGRESS" && "bg-blue-800 text-white") ||
            (item.status === "COMPLETED" && "bg-green-600 text-white")
          }`}
        >
          {item?.status}
          <BiSolidChevronDown className="text-xl" />
        </button>
      </div>
      <div className="w-fit lg:hidden justify-between">
        {item.status === "TO DO" && <TbProgressAlert className="text-2xl" />}
        {item.status === "IN PROGRESS" && (
          <TbProgressBolt className="text-2xl text-blue-400" />
        )}
        {item.status === "COMPLETED" && (
          <TbProgressCheck className="text-2xl text-green-500" />
        )}
      </div>
    </div>
  );
};

export default OverviewCard;
