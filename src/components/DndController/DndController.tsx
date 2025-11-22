import { DragDropContext, DropResult } from "@hello-pangea/dnd";
import { sortDnd } from "../../../shared/sortDND/sortDnd";
import { useState } from "react";

type DndControllerProps = {
  onDragEnd: (sourceIndex: number, destinationIndex: number) => void;
};

const DndController = () => {
  const [items, setItems] = useState(["a", "b", "c"]);

  const indexSort = (result: DropResult) => {
    if (!result.destination) return;

    setItems((prev) =>
      sortDnd(prev, result.source.index, result.destination.index)
    );
  };

  return <DragDropContext onDragEnd={indexSort}></DragDropContext>;
};

export default DndController;
