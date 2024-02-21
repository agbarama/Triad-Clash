import styles from "../styles/displaywinner.module.css";

const DisplayWinner = ({ isWinner, winner }) => {
  return (
    <div className={`${isWinner ? styles.winner : styles.hideWinner}`}>
      <p className={styles.winnerAvatar}>{winner}</p>
      <p className={styles.winnerText}>WINNER!</p>
    </div>
  );
};

export default DisplayWinner;
