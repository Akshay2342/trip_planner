import React from "react";
import { Draggable } from "react-beautiful-dnd";
import Card from '@mui/material/Card';

const ListItem = ({ item, index }) => {
  return (
    <Draggable draggableId={item.id} index={index}>
      {(provided, snapshot) => {
        return (
          <Card
          className="drag-item"
          ref={provided.innerRef}
          snapshot={snapshot}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <span>Content</span>
          <h4>{item.id}</h4>
        </Card>
        );
      }}
    </Draggable>
  );
};

export default ListItem;