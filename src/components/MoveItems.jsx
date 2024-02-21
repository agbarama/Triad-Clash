import styles from "../styles/moveitems.module.css";

const MoveItems = ({ move, ...rest }) => {
  return (
    <>
      <div
        className={`${styles.box} ${move.win ? styles.toggle : ""}`}
        {...rest}
      >
        <p className={`${move.win ? styles.p : ""}`}>{move.move}</p>
      </div>
    </>
  );
};

export default MoveItems;
