// import { useCallback, useEffect, useMemo, useState } from "react";
// import { DragDropContext,Droppable } from "react-beautiful-dnd";
// import "./style/dragList.css";
// import DraggableElement from "./DraggableElement";
// import Card from '@mui/material/Card';




// const DragList = () => {
//   const lists = useMemo(() => ["todo", "inProgress", "done"], []);
//   const bucket = useMemo(() => ["bucket"], []);
//   const getItems = (count, prefix) =>
//     Array.from({ length: count }).map((k) => {
//       const randomId = Math.floor(Math.random() * 1000);
//       return {
//         id: `item-${Date.now() + randomId}`,
//         prefix,
//         content: `item ${Date.now() + randomId}`
//       };
//     });
//   const generateLists = useCallback(
//     () =>
//       [...lists, ...bucket].reduce(
//         (acc, listKey) => ({ ...acc, [listKey]: listKey === "bucket" ? [] : getItems(10, listKey) }),
//         {}
//       ),
//     [lists, bucket]
//   );

//   const [elements, setElements] = useState(generateLists());

//   const removeFromList = (list, index) => {
//     const result = Array.from(list);
//     const [removed] = result.splice(index, 1);
//     return [removed, result];
//   };

//   const addToList = useCallback((list, index, element) => {
//     const result = Array.from(list);
//     result.splice(index, 0, element);
//     return result;
//   }, []);

//   const onDragEnd = useCallback(
//     (result) => {
//       if (!result.destination) {
//         return;
//       }

//       const listCopy = { ...elements };
//       const sourceList = listCopy?.[result.source.droppableId];

//       const [removedElement, newSourceList] = removeFromList(
//         sourceList,
//         result.source.index
//       );

//       listCopy[result.source.droppableId] = newSourceList;
//       const destinationList = listCopy[result.destination.droppableId];
//       listCopy[result.destination.droppableId] = addToList(
//         destinationList,
//         result.destination.index,
//         removedElement
//       );
//       setElements(listCopy);
//       console.log("DD", result, sourceList, listCopy);
//     },
//     [elements, addToList]
//   );

//   useEffect(() => {
//     setElements(generateLists());
//   }, [generateLists]);

//   return (
//     <Card className="container">
//       <DragDropContext onDragEnd={onDragEnd}>
//       <Card className="bucket">
//           {bucket.map((listKey) => (
//             <Droppable droppableId={listKey}>
//               {(provided) => (
//                 <div ref={provided.innerRef} {...provided.droppableProps}>
//                   <DraggableElement
//                     elements={elements[listKey]}
//                     key={listKey}
//                     prefix={listKey}
//                   />
//                   {provided.placeholder}
//                 </div>
//               )}
//             </Droppable>
//           ))}
//         </Card>
//        <Card className="planner">
//        <Card className="list-grid">
//           {lists.map((listKey) => (
//             <DraggableElement
//               elements={elements[listKey]}
//               key={listKey}
//               prefix={listKey}
//             />
//           ))}
//         </Card>
//        </Card>
        
//       </DragDropContext>
//     </Card>
//   );
// };

// export default DragList;





import { useCallback, useEffect, useMemo, useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import "./style/dragList.css";
import DraggableElement from "./DraggableElement";
import Card from '@mui/material/Card';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';

const DragList = () => {
  const [lists, setLists] = useState(["todo", "inProgress", "done"]);
  const bucket = useMemo(() => ["bucket"], []);
  const getItems = (count, prefix) =>
    Array.from({ length: count }).map((k) => {
      const randomId = Math.floor(Math.random() * 1000);
      return {
        id: `item-${Date.now() + randomId}`,
        prefix,
        content: `item ${Date.now() + randomId}`
      };
    });
  const generateLists = useCallback(
    () =>
      [...lists, ...bucket].reduce(
        (acc, listKey) => ({ ...acc, [listKey]: listKey === "bucket" ? [] : getItems(10, listKey) }),
        {}
      ),
    [lists, bucket]
  );

  const [elements, setElements] = useState(generateLists());

  const removeFromList = (list, index) => {
    const result = Array.from(list);
    const [removed] = result.splice(index, 1);
    return [removed, result];
  };

  const addToList = useCallback((list, index, element) => {
    const result = Array.from(list);
    result.splice(index, 0, element);
    return result;
  }, []);

  const onDragEnd = useCallback(
    (result) => {
      if (!result.destination) {
        return;
      }

      const listCopy = { ...elements };
      const sourceList = listCopy?.[result.source.droppableId];

      const [removedElement, newSourceList] = removeFromList(
        sourceList,
        result.source.index
      );

      listCopy[result.source.droppableId] = newSourceList;
      const destinationList = listCopy[result.destination.droppableId];
      listCopy[result.destination.droppableId] = addToList(
        destinationList,
        result.destination.index,
        removedElement
      );
      setElements(listCopy);
      console.log("DD", result, sourceList, listCopy);
    },
    [elements, addToList]
  );

  const addNewCard = () => {
    const newCardKey = `newCard${Date.now()}`;
    setLists(prevLists => [...prevLists, newCardKey]);
    setElements(prevElements => ({ ...prevElements, [newCardKey]: [] }));
  };

  useEffect(() => {
    setElements(generateLists());
  }, [generateLists]);

  return (
    <Card className="container">
      <DragDropContext onDragEnd={onDragEnd}>
        <Card className="bucket">
          {bucket.map((listKey) => (
            <Droppable droppableId={listKey}>
              {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  <DraggableElement
                    elements={elements[listKey]}
                    key={listKey}
                    prefix={listKey}
                  />
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </Card>
        <Card className="planner">
        <Card className="list-grid">
  {lists.map((listKey) => (
    <DraggableElement
      className="list-grid-item"
      elements={elements[listKey]}
      key={listKey}
      prefix={listKey}
    />
  ))}
  
  <IconButton className="add-button" onClick={addNewCard}>
    <AddIcon />
  </IconButton>
</Card>
          
        </Card>
      </DragDropContext>
    </Card>
  );
};

export default DragList;