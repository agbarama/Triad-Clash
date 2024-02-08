import React from "react";
import styles from "../styles/tictactoe.module.css";

const TIcTacToe = () => {
  return (
    <div className={styles.container}>
      <div className={styles.gameContainer}>
        <div className={styles.play}>It's your turn</div>
        <div className={styles.boxesContainer}>
          <div className={styles.boxes}>
            <div className={styles.box}>X</div>
            <div className={styles.box}>O</div>
            <div className={styles.box}>X</div>
          </div>
          <div className={styles.boxes}>
            <div className={styles.box}>X</div>
            <div className={styles.box}>O</div>
            <div className={styles.box}>X</div>
          </div>
          <div className={styles.boxes}>
            <div className={styles.box}>X</div>
            <div className={styles.box}>O</div>
            <div className={styles.box}>X</div>
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
