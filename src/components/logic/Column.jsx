/* eslint-disable react/prop-types */
import Task from "./Task";
import { useStore } from "../../store/store";
import { useMemo, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Button } from "../ui/button";
import classNames from "classnames";

const Column = ({ state }) => {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);
  const [drop, setDrop] = useState(false);

  const tasks = useStore((store) => store.tasks);
  const filtered = useMemo(
    () => tasks.filter((task) => task.state === state),
    [tasks, state]
  );

  const addTask = useStore((store) => store.addTask);
  const setDraggedTask = useStore((store) => store.setDraggedTask);
  const draggedTask = useStore((store) => store.draggedTask);
  const movedTask = useStore((store) => store.moveTask);

  return (
    <div
      className={classNames(
        "bg-chart-2 p-2 m-1 border-solid border-2 border-border w-80 h-screen max-w-lg transition-all duration-300",
        {
          "border-dashed border-black": drop,
          "border-solid bg-chart-2": !drop,
        }
      )}
      onDragOver={(e) => {
        setDrop(true);
        e.preventDefault();
      }}
      onDragLeave={(e) => {
        setDrop(false);
        e.preventDefault();
      }}
      onDrop={() => {
        setDrop(false);
        movedTask(state, draggedTask);
        setDraggedTask(null);
      }}
    >
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold ml-3">{state}</h2>
        <Button onClick={() => setOpen(true)}>Add</Button>
      </div>
      {filtered.map((task) => (
        <Task title={task.title} key={task.id} />
      ))}
      {open && (
        <div className="absolute w-full h-full top-0 left-0">
          <div>
            <input
              type="text"
              onChange={(e) => setText(e.target.value)}
              value={text}
              className="bg-slate-300 border-2 border-solid border-black px-2 mt-1"
            />
            <button
              className="bg-chart-4 hover:bg-yellow-500"
              onClick={() => {
                addTask(text, state, uuidv4());
                setText("");
                setOpen(false);
              }}
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Column;
