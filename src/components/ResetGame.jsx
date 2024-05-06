import { useState } from "react";
import styles from "../styles/resetgame.module.css";
const ResetGame = ({
  setWinner,
  setIsWinner,
  setMovesWin,
  setPlayMessage,
  moves,
  setMoves,
  setHidemovesList,
  setIsDraw,
  setDraw,
  setClickedMoves,
  setScores,
}) => {
  const handleReset = () => {
    setHidemovesList(false);
    setDraw(true);
    setIsDraw(false);
    setClickedMoves([]);
    setScores([]);
    setWinner("");
    setIsWinner(false);
    setMovesWin(false);
    setPlayMessage("Start game or select player");

    // map and set all objects containing a move to an empty string and win to false
    moves.map((move) => {
      if (move.move !== "") {
        move.win = false;
        move.move = "";
      }
    });
    setMoves(moves);
  };

  return (
    <div className={styles.move}>
      <div className={styles.resetGame} onClick={handleReset}>
        Reset Game
      </div>
      <div>Taunt</div>
    </div>
  );
};

export default ResetGame;
