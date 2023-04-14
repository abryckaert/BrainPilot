import React from "react";
import { Droppable } from "react-beautiful-dnd";

export default function Column() {
  return (
    <Container style={{
      backgroundColor:"#f4f5f7",
      borderRadius: "2.5px",
      width:"300px",
      height:"475px",
      overflowY :"scroll",
      scrollbarWith:"none",
      border:"1px solid gray"

    }}>
        <Title
        style={{
          backgroundColor: "lightblue",
          position: "stick",
          padding:"8px",
          textAlign:"center",
        }}
      >
        {title}
      </Title>
      <Droppable droppableId={id}>
        {(provided, snapshot) => {
          <TaskList
            ref={provided.innerRef}
            {...provided.droppableProps}
            isDraggingOver={snapshot.isDraggingOver}
            style={{
              padding: "3px",
              transistion: "backgroundColor 0.2s ease",
              backgroundColor: "#f4f5f7",
              flexGrow: "1",
              minHeight: "100px",
            }}
          >
            


            {provided.placeholder}
          </TaskList>;
        }}
      </Droppable>
    </Container>
  );
}