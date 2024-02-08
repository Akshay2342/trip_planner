import React, { useState, useContext } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { SelectedPlaceContext } from "../Map/SelectedPlaceContext";
import { Card, CardContent, Typography } from '@mui/material';
import { useEffect } from "react";



function Final() {
  
  const {selectedPlace}=useContext(SelectedPlaceContext);
  // const [items , setItems] = useState([]);
  // console.log(selectedPlace)
  const newItems = selectedPlace ? selectedPlace.map((place, index) => { return { content : place.name , id :  place.location_id };}) : [];
  // newItems.push({content : "hello" , id : "1"},{content : "hello" , id : "2"},{content : "hello" , id : "3"},{content : "hello" , id : "4"},{content : "hello" , id : "5"},{content : "hello" , id : "6"},{content : "hello" , id : "7"},{content : "hello" , id : "8"},{content : "hello" , id : "9"},{content : "hello" , id : "10"});
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

  useEffect(() => {
    const newItems = selectedPlace ? selectedPlace.map((place, index) => { return { content : place.name , id :  place.location_id };}) : [];
    newItems.push({content : "hello" , id : "1"},{content : "hello" , id : "2"},{content : "hello" , id : "3"},{content : "hello" , id : "4"},{content : "hello" , id : "5"},{content : "hello" , id : "6"},{content : "hello" , id : "7"},{content : "hello" , id : "8"},{content : "hello" , id : "9"},{content : "hello" , id : "10"});
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
    setColumns(rowsFromBackend);
  }, [selectedPlace]);

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
                        <div {...provided.droppableProps} ref={provided.innerRef} style={{ background: snapshot.isDraggingOver ? "lightblue" : "white", padding: 4, width: "30vw", minHeight: "8rem" }}>
                          {column.items.map((item, index) => {
                            return (
                              <Draggable key={item.id} draggableId={item.id} index={index}>
                                {(provided, snapshot) => {
                                  return (
                                    <Card ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} style={{...provided.draggableProps.style }}>
                                      <CardContent>
                                        <Typography variant="h6" component="div">
                                          {item.content}
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



// import React, { useState, useContext } from "react";
// import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
// import { SelectedPlaceContext } from "../Map/SelectedPlaceContext";
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';



// function Final() {

//   const {selectedPlace}=useContext(SelectedPlaceContext);
//     console.log(selectedPlace)
//     const newItems = selectedPlace ? selectedPlace.map((place, index) => { return { content : place.name , id :  place.location_id };}) : [];
//     console.log(newItems)

//   const rowsFromBackend = {
//     Bucket: {
//       name: "Bucket",
//       items: newItems,
//     },
//     List: {
//       name: "List",
//       items: [],
//     },
//   };

//   const [columns, setColumns] = useState(rowsFromBackend);

//   const onDragEnd = (result) => {
//     if (!result.destination) return;
//     const { source, destination } = result;

//     if (source.droppableId !== destination.droppableId) {
//       const sourceColumn = columns[source.droppableId];
//       const destColumn = columns[destination.droppableId];
//       const sourceItems = [...sourceColumn.items];
//       const destItems = [...destColumn.items];
//       const [removed] = sourceItems.splice(source.index, 1);
//       destItems.splice(destination.index, 0, removed);
//       setColumns({
//         ...columns,
//         [source.droppableId]: {
//           ...sourceColumn,
//           items: sourceItems,
//         },
//         [destination.droppableId]: {
//           ...destColumn,
//           items: destItems,
//         },
//       });
//     } else {
//       const column = columns[source.droppableId];
//       const copiedItems = [...column.items];
//       const [removed] = copiedItems.splice(source.index, 1);
//       copiedItems.splice(destination.index, 0, removed);
//       setColumns({
//         ...columns,
//         [source.droppableId]: {
//           ...column,
//           items: copiedItems,
//         },
//       });
//     }
//   };

//   return (
//     <div style={{ display: "flex", justifyContent: "center", height: "60rem" }}>
//       <DragDropContext onDragEnd={(result) => onDragEnd(result, columns, setColumns)}>
//         {Object.entries(columns).map(([columnId, column], index) => {
//           return (
//             <div style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "1rem" }} key={columnId}>
//               <h2>{column.name}</h2>
//               <Droppable droppableId={columnId} key={columnId}>
//                 {(provided, snapshot) => {
//                   return (
//                     <div {...provided.droppableProps} ref={provided.innerRef} style={{ background: snapshot.isDraggingOver ? "lightblue" : "white", padding: 4, width: "100vw", minHeight: "8rem" }}>
//                       {column.items.map((item, index) => {
                        // return (
                        //   <Draggable key={item.id} draggableId={item.id} index={index}>
                        //     {(provided, snapshot) => {
                        //       return (

                        //       );
                        //     }}
                        //   </Draggable>
                        // );
//                       })}
//                       {provided.placeholder}
//                     </div>
//                   );
//                 }}
//               </Droppable>
//             </div>
//           );
//         })}
//       </DragDropContext>
//     </div>
//   );
// }

// export default Final;