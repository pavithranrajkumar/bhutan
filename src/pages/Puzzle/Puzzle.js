// App.js

import React, { useEffect, useState } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { motion } from "framer-motion";
import "./Puzzle.module.css";
import supineImg from "../../assests/Supine/SupineDemoness.png";
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

const DraggablePiece = ({ piece, dropZonePosition }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "piece",
    item: { id: piece.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <motion.img
      ref={drag}
      src={piece.src}
      alt={`Piece ${piece.id}`}
      className="draggable-piece"
      initial={{
        top: dropZonePosition.top, // Start at the drop zone's top position
        left: dropZonePosition.left, // Start at the drop zone's left position
        opacity: 0, // Start invisible
        scale: 0.5, // Start small for effect
      }}
      animate={{
        top: piece.initialPosition.top, // Animate to draggable initial position
        left: piece.initialPosition.left, // Animate to draggable initial position
        opacity: 1, // Fade in
        scale: 1, // Scale back to full size
      }}
      transition={{
        duration: 1.5, // Animation duration
        ease: "easeInOut", // Smoothing
      }}
      style={{
        position: "absolute",
        cursor: "move",
        width: `${piece.width}px`,
        height: `${piece.height}px`,
        opacity: isDragging ? 0.5 : 1, // Slight fade during drag
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
const Puzzle = ({ onComplete, resetPuzzleCard }) => {
  const initialPieces = [
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
      initialPosition: { top: "-53%", left: 148 },
      width: 59,
      height: 42,
    },
    {
      id: 3,
      src: handR,
      correctPosition: { top: 180, left: 700 },
      initialPosition: { top: "-80%", left: 280 },
      width: 61,
      height: 40,
    },
    {
      id: 4,
      src: heart,
      correctPosition: { top: 80, left: 350 },
      initialPosition: { top: "-98%", left: 90 },
      width: 61,
      height: 60,
    },
    {
      id: 5,
      src: hipR,
      correctPosition: { top: 220, left: 270 },
      initialPosition: { top: "-65%", left: -13 },
      width: 66,
      height: 50,
    },
    {
      id: 6,
      src: kneeL,
      correctPosition: { top: 300, left: 180 },
      initialPosition: { top: "-95%", left: -22 },
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
      initialPosition: { top: "-61%", left: 215 },
      width: 50,
      height: 53,
    },
    {
      id: 9,
      src: handL,
      correctPosition: { top: 240, left: 50 },
      initialPosition: { top: "-118%", left: 160 },
      width: 56,
      height: 64,
    },
    {
      id: 10,
      src: shoulderL,
      correctPosition: { top: 120, left: 80 },
      initialPosition: { top: "-32%", left: 128 },
      width: 56,
      height: 59,
    },
    {
      id: 11,
      src: hipL,
      correctPosition: { top: 340, left: 370 },
      initialPosition: { top: "-38%", left: 262 },
      width: 80,
      height: 48,
    },
    {
      id: 12,
      src: kneeR,
      correctPosition: { top: 440, left: 460 },
      initialPosition: { top: "-123%", left: -40 },
      width: 90,
      height: 60,
    },
    {
      id: 13,
      src: base1,
      correctPosition: { top: 550, left: 520 },
      initialPosition: { top: "-50%", left: -90 },
      width: 90,
      height: 70,
    },
  ];

  const dropZoneSpecifications = [
    { id: 1, top: "89%", left: 473, width: 57, height: 30 }, // Shoulder R
    { id: 2, top: "86.5%", left: 502, width: 59, height: 42 }, // Elbow R
    { id: 3, top: "86%", left: 424, width: 61, height: 40 }, // Hand R
    { id: 4, top: "89.5%", left: 428.5, width: 61, height: 60 }, // Heart
    { id: 5, top: "89.3%", left: 355, width: 66, height: 50 }, // Hip L
    { id: 6, top: "88.5%", left: 251, width: 115, height: 80 }, // Knee L
    { id: 7, top: "90.1%", left: 173, width: 92, height: 54 }, // Foot R
    { id: 8, top: "92.8%", left: 541, width: 50, height: 53 }, // Elbow L
    { id: 9, top: "90.15%", left: 576, width: 56, height: 64 }, // Hand L
    { id: 10, top: "90.6%", left: 481, width: 56, height: 59 }, // Shoulder L
    { id: 11, top: "90.8%", left: 350, width: 80, height: 48 }, // Hip R
    { id: 12, top: "87%", left: 246, width: 90, height: 60 }, // Knee R
    { id: 13, top: "92.6%", left: 177, width: 90, height: 70 }, // Base1 or Foot L
  ];

  const [pieces, setPieces] = useState(initialPieces);
  const [completed, setCompleted] = useState({});
  const [isCompleted, setIsCompleted] = useState(false);

  const handleDrop = (item, id) => {
    setPieces((prevPieces) => {
      const remainingPieces = prevPieces.filter((p) => p.id !== item.id);

      setCompleted((prevCompleted) => ({
        ...prevCompleted,
        [id]: prevPieces.find((p) => p.id === item.id),
      }));

      // Check if all pieces have been placed correctly
      if (remainingPieces.length === 0) {
        // Ensure this checks for the last piece
        setIsCompleted(true);
        onComplete(); // Trigger the completion callback
      }

      return remainingPieces;
    });
  };

  const resetPuzzle = () => {
    setPieces(initialPieces);
    setCompleted({});
    setIsCompleted(false);
    resetPuzzleCard();
  };

  useEffect(() => {
    resetPuzzleCard(() => resetPuzzle); // Ensure resetPuzzleCard is called when resetting puzzle
  }, [resetPuzzleCard]);

  return (
    // <DndProvider backend={HTML5Backend}>
    <motion.div
      alt=""
      initial={{ opacity: 0 }} // Initial state
      animate={{ opacity: 1 }} // Animation state
      transition={{ duration: 3, delay: 0.5 }}
      exit={{ opacity: 0, transition: { duration: 2 } }}
    >
      <div className="app">
        <div className="puzzle-container">
          <div className="main-image-grid">
            {isCompleted ? (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, delay: 0.5 }}
                  transition={{ duration:1.5 }} 
                  className="completed-image"
                >
                  <img src={supineImg} alt="Main" />
                </motion.div>
              </>
            ) : (
              <>
                <div className="dropzones">
                  {dropZoneSpecifications.map((dropZone) => (
                    <DropZone
                      key={dropZone.id}
                      id={dropZone.id}
                      onDrop={handleDrop}
                      image={completed[dropZone.id]}
                      position={{
                        top: dropZone.top,
                        left: dropZone.left,
                        width: dropZone.width,
                        height: dropZone.height,
                      }}
                    />
                  ))}
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, delay: 0.5 }}
                  transition={{ duration: 0.5 }} 
                  className="base-image" 
                >
                  <div className="main-image">
                    <img src={base} alt="Main" />
                  </div>
                </motion.div>
                <div className="pieces-container">
                  {pieces.map((piece) => {
                    // Find the corresponding drop zone position for this piece
                    const dropZonePosition = dropZoneSpecifications.find(
                      (zone) => zone.id === piece.id
                    );

                    // Check if dropZonePosition is defined
                    if (!dropZonePosition) {
                      return null; // Avoid rendering if no position is found
                    }

                    return (
                      !completed[piece.id] && (
                        <DraggablePiece
                          key={piece.id}
                          piece={piece}
                          dropZonePosition={{
                            top: dropZonePosition.top, // Correct starting position
                            left: dropZonePosition.left,
                          }}
                        />
                      )
                    );
                  })}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </motion.div>
    // </DndProvider>
  );
};

export default Puzzle;
