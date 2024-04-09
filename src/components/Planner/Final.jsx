import React, { useState, useContext } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { SelectedPlaceContext } from "../Map/SelectedPlaceContext";
import { Card, CardContent, Typography } from '@mui/material';
import { useEffect } from "react";
import { set } from "lodash";
import {Button} from "@mui/material";
import { db } from "../../Backend/setup";
import { auth } from "../../Backend/setup";
import { getUserInfo } from "../../api/getUserInfo";
import { onAuthStateChanged } from "firebase/auth";
import { doc, updateDoc, arrayUnion, getFirestore } from "firebase/firestore";
import { columnsRef } from "../globalStore";
import { getDocs } from "firebase/firestore";
import { query, collection , where  } from "firebase/firestore";
import axios from "axios";

function Final({setListPlaces, formData}) {
  const [uid , setuid] =  useState(null);
  const {selectedPlace}=useContext(SelectedPlaceContext);
  const newItems = selectedPlace ? selectedPlace.map((place, index) => { return { content : place.name , id :  place.location_id , lng : (parseFloat)(place.longitude) , lat :(parseFloat)(place.latitude) };}) : [];
  // console.log(newItems)
  
  const savetrip = async (columns) => {
    // console.log({uid})
    const q = query(collection(db, "users"), where("uid", "==", uid));
    const querySnapshot = await getDocs(q);
    const docData = querySnapshot.docs[0].data();
    const docRef = doc(db, 'users', querySnapshot.docs[0].id);
    console.log({columns});
    let obj = {
      formData: formData || "default value",
      columns
    }
    if (docData && Array.isArray(docData.trips)) {
      // If trips is an array, update it with arrayUnion
      await updateDoc(docRef, {
        trips: arrayUnion(obj)
      });
    } else {
      // If trips doesn't exist or isn't an array, initialize it as an empty array
      await updateDoc(docRef, {
        trips: [obj]
      });
    }
  }

  const getRowsUpdated = async () => {
    const dataToSend = {columns};
    console.log(dataToSend);
    try {
      const response = await axios.post(`http://localhost:4000/UpdateRows`, dataToSend);
      // Handle response here
      setColumns(response.data.columns);
      // console.log(response.data.itenerary_name);
      // console.log(columns);
      console.log(response.data)
      // console.log(response.data)
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log("Final " ,{uid : user.uid});
      setuid(user.uid);
    });
    return () => unsubscribe();
  }, []);
  
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
    const newItems = selectedPlace ? selectedPlace.map((place, index) => { return { content : place.name , id :  place.location_id , lng : (parseFloat)(place.longitude) , lat :(parseFloat)(place.latitude) };}) : [];
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

                  <Button onClick={()=>{ setListPlaces(column.items) ; console.log({"set" : column})}} > Show Directions</Button>
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
    <Button onClick={getRowsUpdated } >AI Automate</Button>
    <Button onClick={addNewList}>Add New Day</Button>
    <Button onClick={()=>{savetrip(columns)}}> Save My trip </Button>

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