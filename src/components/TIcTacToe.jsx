import React, { useRef, useState } from "react";
import styles from "../styles/tictactoe.module.css";
import Move from "./Move";

const TIcTacToe = () => {
  const [moves, setMoves] = useState([
    { id: 1, move: "" },
    { id: 2, move: "" },
    { id: 3, move: "" },
    { id: 4, move: "" },
    { id: 5, move: "" },
    { id: 6, move: "" },
    { id: 7, move: "" },
    { id: 8, move: "" },
    { id: 9, move: "" },
  ]);

  const [clickedMoves, setClikedMoves] = useState([]);

  const user = "X";
  const computer = "O";

  const handleClick = (move) => {
    // check for matching id
    const clickedId = moves.findIndex((movve) => movve.id === move.id);
    const updatedMoves = [...moves];
    updatedMoves[clickedId].move = user;

    clickedMoves.map((clicked) =>
      clicked === clickedId
        ? console.log("already clicked")
        : setMoves(updatedMoves)
    );

    setClikedMoves([...clickedMoves, clickedId]);

    box1(move);
    box2(move);
    box3(move);
    box4(move);
    box5(move);
    box6(move);
    box7(move);
    box8(move);
    box9(move);
  };

  // Box 1
  const box1 = (move) => {
    const arr = [];

    if (move.id === 1) {
      moves.map((movve) => {
        if (movve.id === 2 || movve.id === 3) {
          arr.push(...arr, movve);
        }
      });
    }

    arr.find((ar) =>
      ar.move === "" ? (ar.move = computer) : console.log("uuu")
    );
  };

  // Box 2
  const box2 = (move) => {
    const arr = [];
    if (move.id === 2) {
      moves.map((movve) => {
        if (movve.id === 1 || movve.id === 3) {
          arr.push(...arr, movve);
        }
      });
    }

    arr.find((ar) =>
      ar.move == "" ? (ar.move = computer) : console.log("uuu")
    );
  };

  // Box 3
  const box3 = (move) => {
    const arr = [];
    if (move.id === 3) {
      moves.map((movve) => {
        if (movve.id === 1 || movve.id === 2) {
          arr.push(...arr, movve);
        }
      });
    }

    arr.find((ar) =>
      ar.move == "" ? (ar.move = computer) : console.log("uuu")
    );
  };

  // Box 4
  const box4 = (move) => {
    const arr = [];
    if (move.id === 4) {
      moves.map((movve) => {
        if (movve.id === 5 || movve.id === 6) {
          arr.push(...arr, movve);
        }
      });
    }

    arr.find((ar) =>
      ar.move == "" ? (ar.move = computer) : console.log("uuu")
    );
  };

  // Box 5
  const box5 = (move) => {
    const arr = [];
    if (move.id === 5) {
      moves.map((movve) => {
        if (movve.id === 4 || movve.id === 6) {
          arr.push(...arr, movve);
        }
      });
    }

    arr.find((ar) =>
      ar.move == "" ? (ar.move = computer) : console.log("uuu")
    );
  };

  // Box 6
  const box6 = (move) => {
    const arr = [];
    if (move.id === 6) {
      moves.map((movve) => {
        if (movve.id === 4 || movve.id === 5) {
          arr.push(...arr, movve);
        }
      });
    }

    arr.find((ar) =>
      ar.move == "" ? (ar.move = computer) : console.log("uuu")
    );
  };

  // Box 7
  const box7 = (move) => {
    const arr = [];
    if (move.id === 7) {
      moves.map((movve) => {
        if (movve.id === 8 || movve.id === 9) {
          arr.push(...arr, movve);
        }
      });
    }

    arr.find((ar) =>
      ar.move == "" ? (ar.move = computer) : console.log("uuu")
    );
  };

  // Box 8
  const box8 = (move) => {
    const arr = [];
    if (move.id === 8) {
      moves.map((movve) => {
        if (movve.id === 7 || movve.id === 9) {
          arr.push(...arr, movve);
        }
      });
    }

    arr.find((ar) =>
      ar.move == "" ? (ar.move = computer) : console.log("uuu")
    );
  };

  // Box 9
  const box9 = (move) => {
    const arr = [];
    if (move.id === 9) {
      moves.map((movve) => {
        if (movve.id === 7 || movve.id === 8) {
          arr.push(...arr, movve);
        }
      });
    }

    arr.find((ar) =>
      ar.move == "" ? (ar.move = computer) : console.log("uuu")
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.gameContainer}>
        <div className={styles.play}>It's your turn</div>
        <div className={styles.boxesContainer}>
          <div className={styles.boxes}>
            {moves.map((move) => (
              <Move
                key={move.id}
                move={move}
                onClick={() => handleClick(move)}
              />
            ))}
          </div>
        </div>
        <div className={styles.move}>
          <div>Reset Game </div>
          <div>Taunt</div>
        </div>
      </div>

      <div className={styles.footer}>
        <div className={styles.playConatiner}>
          <div className={styles.play}>
            Playing in: <span className={styles.grey}>room-3</span>
          </div>
          <div className={styles.avatar}>
            You are: <span className={styles.grey}>x</span>
          </div>
        </div>

        <div className={styles.opponent}>
          Opponent: <span className={styles.grey}>grfhror465w</span>
        </div>
      </div>
    </div>
  );
};

export default TIcTacToe;
