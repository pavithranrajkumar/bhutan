// App.js

import React, { useState } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import "./Puzzle.module.css";
import base from "../../assests/Supine/Base.png";
import base1 from "../../assests/Supine/PUzzleImgs/Foot L.png";
import elbowL from "../../assests/Supine/PUzzleImgs/Elbow L.png";
import handR from "../../assests/Supine/PUzzleImgs/Hand R.png";
import footR from "../../assests/Supine/PUzzleImgs/Foot R.png";
import shoulderL from "../../assests/Supine/PUzzleImgs/Shoulder L.png";
import elbowR from "../../assests/Supine/PUzzleImgs/Elbow R.png";
import shoulderR from "../../assests/Supine/PUzzleImgs/Shoulder R.png";
import heart from "../../assests/Supine/PUzzleImgs/Heart.png";
import handL from "../../assests/Supine/PUzzleImgs/Hand L.png";
import hipL from "../../assests/Supine/PUzzleImgs/Hip L.png";
import hipR from "../../assests/Supine/PUzzleImgs/Hip R.png";
import kneeL from "../../assests/Supine/PUzzleImgs/Knee L.png";
import kneeR from "../../assests/Supine/PUzzleImgs/Knee R.png";

const DraggablePiece = ({ piece }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "piece",
    item: { id: piece.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <img
      ref={drag}
      src={piece.src}
      alt={`Piece ${piece.id}`}
      className="draggable-piece"
      style={{
        position: "absolute",
        top: piece.initialPosition.top, // Apply the top position dynamically
        left: piece.initialPosition.left, // Apply the left position dynamically
        opacity: isDragging ? 0.5 : 1,
        cursor: "move",
        width: `${piece.width}px`,
        height: `${piece.height}px`,
      }}
    />
  );
};

// Drop zone component
const DropZone = ({ onDrop, image, id, position }) => {
  const [{ isOver, canDrop }, drop] = useDrop(() => ({
    accept: "piece",
    drop: (item) => {
      if (item.id === id) {
        // Only allow the drop if the piece id matches the dropzone id
        onDrop(item, id);
      }
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  }));
  console.log("DropZone Position:", position);

  return (
    <div
      ref={drop}
      className="dropzone"
      style={{
        position: "fixed",
        top: position.top,
        left: position.left,
        width: position.width ? `${position.width}px` : "auto", // Apply dynamic width
        height: position.height ? `${position.height}px` : "auto", // Apply dynamic height
        // backgroundColor: isOver && canDrop ? "lightgreen" : "transparent",
        // border: "2px solid #ddd",
        zIndex: 20,
      }}
    >
      {image ? (
        <div
          className="completed-piece"
          style={{ width: "100%", height: "100%" }}
        >
          <img
            src={image.src}
            alt={`Completed ${id}`}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      ) : null}
    </div>
  );
};

// Main component
const Puzzle = () => {
  const [pieces, setPieces] = useState([
    {
      id: 1,
      src: shoulderR,
      correctPosition: { top: 80, left: 250 },
      initialPosition: { top: "-70%", left: 70 },
      width: 57,
      height: 30,
    },
    {
      id: 2,
      src: elbowR,
      correctPosition: { top: 120, left: 630 },
      initialPosition: { top: "-45%", left: 150 },
      width: 59,
      height: 42,
    },
    {
      id: 3,
      src: handR,
      correctPosition: { top: 180, left: 700 },
      initialPosition: { top: "-70%", left: 290 },
      width: 61,
      height: 40,
    },
    {
      id: 4,
      src: heart,
      correctPosition: { top: 80, left: 350 },
      initialPosition: { top: "-95%", left: 90 },
      width: 61,
      height: 60,
    },
    {
      id: 5,
      src: hipR,
      correctPosition: { top: 220, left: 270 },
      initialPosition: { top: "-20%", left: 90 },
      width: 66,
      height: 50,
    },
    {
      id: 6,
      src: kneeL,
      correctPosition: { top: 300, left: 180 },
      initialPosition: { top: "-90%", left: -10 },
      width: 115,
      height: 80,
    },
    {
      id: 7,
      src: footR,
      correctPosition: { top: 400, left: 100 },
      initialPosition: { top: "-110%", left: 250 },
      width: 92,
      height: 54,
    },
    {
      id: 8,
      src: elbowL,
      correctPosition: { top: 200, left: 150 },
      initialPosition: { top: "-70%", left: 250 },
      width: 50,
      height: 53,
    },
    {
      id: 9,
      src: handL,
      correctPosition: { top: 240, left: 50 }, //top: "-80%", left: 290
      initialPosition: { top: "-110%", left: 150 },
      width: 56,
      height: 64,
    },
    {
      id: 10,
      src: shoulderL,
      correctPosition: { top: 120, left: 80 },
      initialPosition: { top: "-20%", left: 90 },
      width: 56,
      height: 59,
    },
    {
      id: 11,
      src: hipL,
      correctPosition: { top: 340, left: 370 },
      initialPosition: { top: "-80%", left: 290 },
      width: 80,
      height: 48,
    },
    {
      id: 12,
      src: kneeR,
      correctPosition: { top: 440, left: 460 },
      initialPosition: { top: "-120%", left: -40 },
      width: 90,
      height: 60,
    },
    {
      id: 13,
      src: base1,
      correctPosition: { top: 550, left: 520 },
      initialPosition: { top: "-30%", left: -40 },
      width: 90,
      height: 70,
    },
  ]);

  const [completed, setCompleted] = useState({
    1: null,
    2: null,
    3: null,
  });

  const handleDrop = (item, id) => {
    const piece = pieces.find((p) => p.id === item.id);
    if (piece) {
      // Set the piece in the completed state
      setCompleted((prev) => ({ ...prev, [id]: piece }));

      // Remove the piece from the draggable pieces list
      setPieces((prevPieces) => prevPieces.filter((p) => p.id !== item.id));
    }
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="app">
        <div className="puzzle-container">
          <div className="main-image-grid">
            <div className="dropzones">
              <DropZone
                id={1}
                onDrop={handleDrop}
                image={completed[1]}
                position={{ top: "89%", left: 473, width: 57, height: 30 }} // Shoulder R (adjust as necessary)
              />
              <DropZone
                id={2}
                onDrop={handleDrop}
                image={completed[2]}
                position={{ top: "86.5%", left: 502, width: 59, height: 42 }} // Elbow R (adjust as necessary)
              />
              <DropZone
                id={3}
                onDrop={handleDrop}
                image={completed[3]}
                position={{ top: "86%", left: 424, width: 61, height: 40 }} // Hand R (adjust as necessary)
              />
              <DropZone
                id={4}
                onDrop={handleDrop}
                image={completed[4]}
                position={{ top: "89.5%", left: 428.5, width: 61, height: 60 }} // Heart (adjust as necessary)
              />
              <DropZone
                id={5}
                onDrop={handleDrop}
                image={completed[5]}
                position={{ top: "89.3%", left: 355, width: 66, height: 50 }} // Hip L (adjust as necessary) l hand
              />
              <DropZone
                id={6}
                onDrop={handleDrop}
                image={completed[6]}
                position={{ top: "88.5%", left: 251, width: 115, height: 80 }} // Knee L (adjust as necessary)
              />
              <DropZone
                id={7}
                onDrop={handleDrop}
                image={completed[7]}
                position={{ top: "90.1%", left: 173, width: 92, height: 54 }} // Foot R (adjust as necessary)
              />
              <DropZone
                id={8}
                onDrop={handleDrop}
                image={completed[8]}
                position={{ top: "92.8%", left: 541, width: 50, height: 53 }} // Elbow L (adjust as necessary)
              />
              <DropZone
                id={9}
                onDrop={handleDrop}
                image={completed[9]}
                position={{ top: "90.15%", left: 576, width: 56, height: 64 }} // Hand L (adjust as necessary)
              />
              <DropZone
                id={10}
                onDrop={handleDrop}
                image={completed[10]}
                position={{ top: "90.6%", left: 481, width: 56, height: 59 }} // Shoulder L (adjust as necessary)
              />
              <DropZone
                id={11}
                onDrop={handleDrop}
                image={completed[11]}
                position={{ top: "90.8%", left: 350, width: 80, height: 48 }} // Hip R (adjust as necessary)
              />
              <DropZone
                id={12}
                onDrop={handleDrop}
                image={completed[12]}
                position={{ top: "87%", left: 246, width: 90, height: 60 }} // Knee R (adjust as necessary)
              />
              <DropZone
                id={13}
                onDrop={handleDrop}
                image={completed[13]}
                position={{ top: "92.6%", left: 177, width: 90, height: 70 }} // Base1 or Foot L (adjust as necessary)
              />
            </div>
            <div className="main-image">
              <img src={base} alt="Main" />
            </div>
          </div>

          <div className="pieces-container">
            {pieces.map((piece) => (
              <DraggablePiece
                key={piece.id}
                piece={piece}
                className="pieces-container"
              />
            ))}
          </div>
        </div>
      </div>
    </DndProvider>
  );
};

export default Puzzle;
