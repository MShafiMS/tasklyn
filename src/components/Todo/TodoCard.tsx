import { Todo } from "@TasklynAlias/lib/types/types";
import { formattedDateTime } from "@TasklynAlias/utils";
import {
  TbProgressAlert,
  TbProgressBolt,
  TbProgressCheck,
} from "react-icons/tb";

interface IProps {
  item: Todo;
  setItem: (id: string) => void;
}

const TodoCard = ({ item, setItem }: IProps) => {
  return (
    <div
      onClick={() => setItem(item.id)}
      className="cursor-pointer w-full bg-gray-100 hover:bg-gray-300 dark:bg-white/5 hover:dark:bg-white/10 px-4 py-3 rounded-lg"
    >
      <h1 className="text-xl font-medium">{item.name}</h1>
      <p className="my-3">{item.description.slice(0, 50)}</p>
      <div className="flex items-end justify-between">
        <p className="text-xs uppercase font-medium text-gray-400 dark:text-gray-500">
          Last Updated: {formattedDateTime(item.updatedAt)}
        </p>
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

export default TodoCard;
