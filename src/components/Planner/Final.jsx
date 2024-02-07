import React, { useState, useContext } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { SelectedPlaceContext } from "../Map/SelectedPlaceContext";


const onDragEnd = (result, rows, setRows) => {
  if (!result.destination) return;
  const { source, destination } = result;

  const start = rows[source.droppableId];
  const end = rows[destination.droppableId];

  if (start === end) {
    const newList = Array.from(start.items);
    const [removed] = newList.splice(source.index, 1);
    newList.splice(destination.index, 0, removed);
    const newColumn = {
      ...start,
      items: newList,
    };
    setRows({
      ...rows,
      [newColumn.name]: newColumn,
    });
  } else {
    const startList = Array.from(start.items);
    const [removed] = startList.splice(source.index, 1);
    const startColumn = {
      ...start,
      items: startList,
    };
    const endList = Array.from(end.items);
    endList.splice(destination.index, 0, removed);
    const endColumn = {
      ...end,
      items: endList,
    };
    setRows({
      ...rows,
      [startColumn.name]: startColumn,
      [endColumn.name]: endColumn,
    });
  }
};

function Final() {
  const { selectedPlace } = useContext(SelectedPlaceContext);
  const rowsFromBackend = {
    Bucket: {
      name: "Bucket",
      items: selectedPlace,
    },
    List: {
      name: "List",
      items: [],
    },
  };
  const [rows, setRows] = useState(rowsFromBackend);

  
  return (
    <div style={{ display: "flex", justifyContent: "center", height: '60rem', }}>
      <DragDropContext onDragEnd={result => onDragEnd(result, rows, setRows)}>
        {Object.entries(rows).map(([columnId, column], index) => {
          return (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: '1rem' }} key={columnId}>
              <h2>{column.name}</h2>
              <Droppable droppableId={columnId} direction='horizontal'>
                {(provided, snapshot) => {
                  return (
                    <div {...provided.droppableProps} ref={provided.innerRef} style={{ background: snapshot.isDraggingOver ? "lightblue" : "white", padding: 4, width: "100vw", minHeight: '8rem', }}>
                    
                        {column.items.map((item, index) => {
                          return (
                            <Draggable key={item.id} draggableId={item.id} index={index}>
                              {(provided, snapshot) => {
                                return (
                                  <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} style={{ userSelect: "none", padding: 16, margin: '0 8px', minHeight: "50px", backgroundColor: snapshot.isDragging ? "#263B4A" : "#456C86", color: "white", borderRadius: '5px', ...provided.draggableProps.style }}>
                                    {item.content}
                                  </div>
                                );
                              }}
                            </Draggable>
                          );
                        })}
                      
                      {provided.placeholder}
                    </div>
                  );
                }}
              </Droppable>
            </div>
          );
        })}
      </DragDropContext>
    </div>
  );
}

export default Final;