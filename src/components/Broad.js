import dummyData from "./dataset";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  setAllTasks,
  setAllColumns,
  setColumnOrder,
  taskStore,
} from "./taskSlice";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { useSelector } from "react-redux";

const Broad = () => {
  const dispatch = useDispatch();
  const { columnOrder, columns } = useSelector(taskStore);
  useEffect(() => {
    dispatch(setAllTasks(dummyData.tasks));
    dispatch(setAllColumns(dummyData.columns));
    dispatch(setColumnOrder(dummyData.columnOrder));
  }, [dispatch]);

  const handleDragEnd = () => {};

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="dnd-layout">
        {columnOrder.map((item) => (
          <Droppable
            direction="horizontal"
            type={item}
            key={item}
            droppableId={item}
          >
            {(provided) => {
              console.log(provided);
              return (
                <div
                  className="dnd-container"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  <span>{columns[item].title}</span>
                </div>
              );
            }}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  );
};

export default Broad;
