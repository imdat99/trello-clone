import dummyData from "./dataset";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  setAllTasks,
  setAllColumns,
  setColumnOrder,
  taskStore,
} from "./taskSlice";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useSelector } from "react-redux";

const Board = () => {
  const dispatch = useDispatch();
  const { columnOrder, columns, tasks } = useSelector(taskStore);
  useEffect(() => {
    dispatch(setAllTasks(dummyData.tasks));
    dispatch(setAllColumns(dummyData.columns));
    dispatch(setColumnOrder(dummyData.columnOrder));
  }, [dispatch]);

  const handleDragEnd = (res) => {
    const { source, destination } = res;
    if (!destination) return;
    console.log(res);
    if (source.droppableId !== destination.droppableId) {
    }
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div>
        <Droppable
          direction="horizontal"
          type="columns"
          droppableId={"droppable-Root"}
        >
          {(provided) => (
            <div
              className="dnd-layout"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {columnOrder.map((item, index) => (
                <Draggable key={item} draggableId={item} index={index}>
                  {(columnProvided, snapshot) => (
                    <div
                      ref={columnProvided.innerRef}
                      {...columnProvided.draggableProps}
                      {...columnProvided.dragHandleProps}
                      style={{
                        ...columnProvided.draggableProps.style,
                        opacity: snapshot.isDragging ? "0.6" : "1",
                      }}
                      className="dnd-container"
                    >
                      <Droppable
                        type="task"
                        key={item}
                        droppableId={columns[item].id}
                      >
                        {(provided) => (
                          <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                            className="column-container"
                          >
                            <div className="column-content">
                              <div className="column-header">
                                <span>{columns[item].title}</span>
                              </div>
                              <div>
                                {columns[item].taskIds?.map((taskId, index) => (
                                  <Draggable
                                    key={tasks[taskId].id}
                                    draggableId={tasks[taskId].id}
                                    index={index}
                                  >
                                    {(provided, snapshot) => (
                                      <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        style={{
                                          ...provided.draggableProps.style,
                                          opacity: snapshot.isDragging
                                            ? "0.6"
                                            : "1",
                                        }}
                                        className="task"
                                      >
                                        <div>{tasks[taskId].taskTitle}</div>
                                      </div>
                                    )}
                                  </Draggable>
                                ))}
                                {provided.placeholder}
                              </div>
                            </div>
                          </div>
                        )}
                      </Droppable>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
};

export default Board;
