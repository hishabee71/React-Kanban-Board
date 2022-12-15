import React from "react";
import { DndProvider } from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend"
import DragDrop from "./Components/DragDrop";

const App = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <h1 className="text-4xl text-red-700">Kanban Board</h1>
      <DragDrop/>
    </DndProvider>
  );
};

export default App;
