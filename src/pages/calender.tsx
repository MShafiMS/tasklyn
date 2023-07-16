import UserLayout from "@TasklynAlias/components/Layout/UserLayout";
import Loader from "@TasklynAlias/components/Loader/Loader";
import EditTodoModal from "@TasklynAlias/components/Todo/EditTodoModal";
import { useTodoStore } from "@TasklynAlias/stores/TodoStore";
import dayGridPlugin from "@fullcalendar/daygrid";
import FullCalendar from "@fullcalendar/react";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";

const Calendar = () => {
  return <CalendarObs />;
};
Calendar.PageLayout = UserLayout;
export default Calendar;

const CalendarObs = observer(() => {
  const [todoEdit, setTodoEdit] = useState("");
  const todoStore = useTodoStore();
  const data = [
    todoStore.todos.map((todo) => ({
      title: todo.name,
      start: new Date(todo.createdAt),
      eventId: todo.id,
      status: todo.status,
      backgroundColor:
        (todo.status === "TO DO" && "#808080") ||
        (todo.status === "IN PROGRESS" && "#0051ff") ||
        "#228a45",
    })),
  ];

  const handleEventClick = (eventClickInfo: any) => {
    const { event } = eventClickInfo;
    const extraField = event.extendedProps.eventId;
    setTodoEdit(extraField);
  };

  useEffect(() => {
    todoStore.fetchTodos();
  }, [todoStore]);

  if (todoStore.loading) {
    return <Loader />;
  }

  return (
    <div className="mx-6 my-6">
      <EditTodoModal show={todoEdit} close={() => setTodoEdit("")} />
      <h1 className="lg:text-5xl text-4xl font-medium text-[#0d101a] dark:text-gray-200 mb-4">
        Calendar
      </h1>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={data[0]}
        height={"80vh"}
        eventClick={handleEventClick}
      />
    </div>
  );
});
