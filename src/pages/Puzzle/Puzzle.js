import React, { useState } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import base from "../../assests/Supine/Base.png";
import base1 from "../../assests/Supine/PUzzleImgs/Foot L.png";
import base2 from "../../assests/Supine/PUzzleImgs/Knee L.png";
import base3 from "../../assests/Supine/PUzzleImgs/Knee R.png";
import base5 from "../../assests/Supine/PUzzleImgs/Shoulder L.png";

// Puzzle pieces data with approximate positions
const puzzlePieces = [
  { id: 1, src: { base1 }, correctPosition: { top: 20, left: 20 } }, // Head piece
  { id: 2, src: { base2 }, correctPosition: { top: 50, left: 140 } }, // Upper Arm Left
  { id: 3, src: { base3 }, correctPosition: { top: 100, left: 240 } }, // Upper Chest Left
  { id: 4, src: { base5 }, correctPosition: { top: 130, left: 380 } }, // Lower Chest Right
  { id: 5, src: { base5 }, correctPosition: { top: 80, left: 510 } }, // Upper Arm Right
  { id: 6, src: { base1 }, correctPosition: { top: 150, left: 580 } }, // Face Right Side
  { id: 7, src: { base1 }, correctPosition: { top: 210, left: 160 } }, // Upper Leg Left
  { id: 8, src: { base1 }, correctPosition: { top: 250, left: 470 } }, // Lower Leg Right
];

// Draggable puzzle piece component
const PuzzlePiece = ({ id, src, position }) => {
  const [{ isDragging }, dragRef] = useDrag({
    type: "piece",
    item: { id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <img
      ref={dragRef}
      src={src}
      alt={`Piece ${id}`}
      style={{
        position: "absolute",
        top: position.top,
        left: position.left,
        opacity: isDragging ? 0.5 : 1,
        cursor: "move",
        width: "100px", // Adjust the size based on your pieces
        height: "100px", // Adjust the size based on your pieces
      }}
    />
  );
};

// Drop target slot for each puzzle piece
const PuzzleSlot = ({ id, correctPosition, onDrop }) => {
  const [{ isOver }, dropRef] = useDrop({
    accept: "piece",
    drop: (item) => onDrop(item.id, id),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <div
      ref={dropRef}
      style={{
        position: "absolute",
        top: correctPosition.top,
        left: correctPosition.left,
        width: "100px",
        height: "100px",
        border: isOver ? "2px dashed green" : "2px dashed gray",
        backgroundColor: isOver ? "lightgray" : "transparent",
      }}
    ></div>
  );
};

// Main Puzzle Game component
const PuzzleGame = () => {
  const [positions, setPositions] = useState({
    1: { top: 10, left: 10 }, // Initial position for piece 1
    2: { top: 10, left: 130 }, // Initial position for piece 2
    3: { top: 10, left: 250 }, // Initial position for piece 3
    4: { top: 10, left: 370 }, // Initial position for piece 4
    5: { top: 10, left: 490 }, // Initial position for piece 5
    6: { top: 10, left: 610 }, // Initial position for piece 6
    7: { top: 10, left: 730 }, // Initial position for piece 7
    8: { top: 10, left: 850 }, // Initial position for piece 8
  });

  const handleDrop = (pieceId, slotId) => {
    if (pieceId === slotId) {
      const correctPosition = puzzlePieces.find(
        (piece) => piece.id === slotId
      ).correctPosition;
      setPositions({
        ...positions,
        [pieceId]: correctPosition,
      });
    } else {
      alert("Incorrect piece! Try again.");
    }
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div style={{ position: "relative", width: "663px", height: "374px" }}>
        {/* Base image */}
        <img
          src={base}
          alt="Base Puzzle"
          style={{ width: "100%", height: "100%" }}
        />

        {/* Slots where pieces should be dropped */}
        {puzzlePieces.map((piece) => (
          <PuzzleSlot
            key={piece.id}
            id={piece.id}
            correctPosition={piece.correctPosition}
            onDrop={handleDrop}
          />
        ))}

        {/* Draggable puzzle pieces */}
        {puzzlePieces.map((piece) => (
          <PuzzlePiece
            key={piece.id}
            id={piece.id}
            src={piece.src}
            position={positions[piece.id]}
          />
        ))}
      </div>
    </DndProvider>
  );
};

export default PuzzleGame;
