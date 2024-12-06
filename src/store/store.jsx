/* eslint-disable no-unused-vars */
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const store = (set) => ({
  //   tasks: [{ title: "testTask", state: "Planned", id: "123" }],
  tasks: [],
  draggedTask: null,
  addTask: (title, state, id) =>
    set(
      (store) => ({
        tasks: [...store.tasks, { title, state, id }],
      }),
      false,
      "addTask"
    ),
  deleteTask: (key) =>
    set(
      (store) => ({
        tasks: [store.tasks.filter((task) => task.id !== key)],
      }),
      false,
      "deleteTask"
    ),
  setDraggedTask: (id) => {
    set({ draggedTask: id });
  },
  moveTask: (state, id) => {
    set((store) => ({
      tasks: store.tasks.map((task) => {
        return task.id === id ? { ...task, state } : task;
      }),
    }));
  },
});

const log = (config) => (set, get, api) =>
  config(
    (...args) => {
      console.log(args);
      set(...args);
    },
    get,
    api
  );

export const useStore = create(
  log(persist(devtools(store), { name: "store" }))
);
