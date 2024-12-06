// import { create } from "zustand";
// import "./App.css";
// import { Button } from "./components/ui/button";

// const useStore = create((set) => ({
//   count: 0,
//   inc: () => set((state) => ({ count: state.count + 1 })),
//   dec: () => set((state) => ({ count: state.count - 1 })),
// }));
// function App() {
//   const store = useStore();
//   return (
//     <>
//       <Button onClick={store.inc}>+</Button>
//       {store.count}
//       <Button onClick={store.dec}>-</Button>
//     </>
//   );
// }

// export default App;

import "./App.css";
import Column from "./components/logic/Column";
const App = () => {
  return (
    <div className="flex flex-row justify-between h-full">
      <Column state="Planned" />
      <Column state="Ongoing" />
      <Column state="Done" />
    </div>
  );
};

export default App;
