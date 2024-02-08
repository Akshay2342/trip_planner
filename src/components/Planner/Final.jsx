import React, { useState, useContext } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { SelectedPlaceContext } from "../Map/SelectedPlaceContext";
import { Card, CardContent, Typography } from '@mui/material';

function Final() {
  const {selectedPlace}=useContext(SelectedPlaceContext);
  console.log(selectedPlace)
  const newItems = selectedPlace ? selectedPlace.map((place, index) => { return [place.name, place.location_id];}) : [];
  console.log(newItems)
  const rowsFromBackend = {
    Bucket: {
      name: "Bucket",
      items: newItems,
    },
    List: {
      name: "List",
      items: [],
    },
  };

  const [columns, setColumns] = useState(rowsFromBackend);

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      });
    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems,
        },
      });
    }
  };

  return (
    <Card>
      <CardContent>
        <DragDropContext onDragEnd={(result) => onDragEnd(result, columns, setColumns)}>
          {Object.entries(columns).map(([columnId, column], index) => {
            return (
              <Card key={columnId}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    {column.name}
                  </Typography>
                  <Droppable droppableId={columnId} key={columnId}>
                    {(provided, snapshot) => {
                      return (
                        <div {...provided.droppableProps} ref={provided.innerRef} style={{ background: snapshot.isDraggingOver ? "lightblue" : "white", padding: 4, width: "50vw", minHeight: "8rem" }}>
                          {column.items.map((item, index) => {
                            return (
                              <Draggable key={item[1]} draggableId={item[1]} index={index}>
                                {(provided, snapshot) => {
                                  return (
                                    <Card ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} style={{...provided.draggableProps.style }}>
                                      <CardContent>
                                        <Typography variant="body1" component="div">
                                          {item[0]}
                                        </Typography>
                                      </CardContent>

                                    </Card>
                                    
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
                </CardContent>
              </Card>
            );
          })}
        </DragDropContext>
      </CardContent>
    </Card>
  );
}
      


export default Final;