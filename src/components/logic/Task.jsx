/* eslint-disable react/prop-types */

import { useStore } from "../../store/store";
import { Button } from "../ui/button";
import { Trash } from "lucide-react";

const Task = ({ title, key }) => {
  const task = useStore((store) =>
    store.tasks.find((task) => task.title === title)
  ); 
  const setDraggedTask= useStore((store) => store.setDraggedTask);
  const deleteTask = useStore((store) => store.deleteTask);
  return (
    <div className="flex flex-col items-center justify-center bg-slate-300 border-solid border-2 border-chart-3 rounded-3xl min-h-12 mt-10 p-2 cursor-move" draggable onDragStart={()=>{setDraggedTask(task.id)}}>
      <div className="text-lg font-medium">{task.title}</div>
      <div className="flex items-center gap-4 mt-2">
        <Button onClick={() => deleteTask(key)}>
          <Trash />
        </Button>
        <div>{task.state}</div>
      </div>
    </div>
  );
};

export default Task;
