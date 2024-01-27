import React from "react";
import { Droppable } from "react-beautiful-dnd";
import ListItem from "./ListItem";
import Card from '@mui/material/Card';

const DraggableElement = ({ prefix, elements }) => {
  return (
    <Card sx={{
      padding: '10px',
      borderRadius: '6px',
      background: '#d4d4d4',
      overflow: 'auto',
      height: '300px',
    }}>
      <h5>Hello</h5>
      <Droppable droppableId={`${prefix}`}>
        {(provided) => (
          <Card {...provided.droppableProps} ref={provided.innerRef}>
            {elements.map((item, index) => (
              <ListItem key={item.id} item={item} index={index} />
            ))}
            {provided.placeholder}
          </Card>
        )}
      </Droppable>
    </Card>
  );
};

export default DraggableElement;