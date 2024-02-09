import React, { useState, useContext } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { SelectedPlaceContext } from "../Map/SelectedPlaceContext";
import { Card, CardContent, Typography } from '@mui/material';
import { useEffect } from "react";
import { set } from "lodash";
import {Button} from "@mui/material";



function Final({setListPlaces}) {
  
  const {selectedPlace}=useContext(SelectedPlaceContext);
  const newItems = selectedPlace ? selectedPlace.map((place, index) => { return { content : place.name , id :  place.location_id , lng : (parseFloat)(place.longitude) , lat :(parseFloat)(place.latitude) };}) : [];
  console.log(newItems)

  const rowsFromBackend = {
    Bucket: {
      name: "Bucket",
      items: newItems,
    },
    List: {
      name: "Day1",
      items: [],
    },
  };

  useEffect(() => {
    const newItems = selectedPlace ? selectedPlace.map((place, index) => { return { content : place.name , id :  place.location_id };}) : [];
    const rowsFromBackend = {
      Bucket: {
        name: "Bucket",
        items: newItems,
      },
      Day1: {
        name: "Day1",
        items: [],
      },
      Day2: {
        name: "Day2",
        items: [],
      },
      Day3: {
        name: "Day3",
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
  const addNewList = () => {
    setColumns(prev => ({
      ...prev,
      [`Day${Object.keys(prev).length}`]: {
        name: `Day${Object.keys(prev).length}`,
        items: [],
      },
    }));
  };

  return (
    <>
    <Card className="DragClass" sx={{display : "flex" , justifyContent : 'space-between'} }>
      <CardContent>
      <div style={{ display: 'flex', flexWrap : 'wrap' }}>
        <DragDropContext onDragEnd={(result) => onDragEnd(result, columns, setColumns)}>
          {Object.entries(columns).map(([columnId, column], index) => {
            return (
              <Card key={columnId} style={{ backgroundColor: index === 0 ? 'lightgrey' : 'white' }}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    {column.name}
                  </Typography>

                  <Button onClick={()=> setListPlaces(newItems)} > Show Directions</Button>
                  <Droppable droppableId={columnId} key={columnId}>
                    {(provided, snapshot) => {
                      return (
                        <div {...provided.droppableProps} ref={provided.innerRef} style={{ background: snapshot.isDraggingOver ? "lightblue" : "white", padding: 4, width: "28vw", minHeight: "8rem" }}>
                          {column.items.map((item, index) => {
                            return (
                              <Draggable key={item.id} draggableId={item.id} index={index}>
                                {(provided, snapshot) => {
                                  return (
                                    <Card ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} style={{...provided.draggableProps.style }} sx = {{marginBottom : '5px'}}>
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
        </div>
      </CardContent>
    </Card>
    <Button onClick={addNewList}>Add New Day</Button>
    </>
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