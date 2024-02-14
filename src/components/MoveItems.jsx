import styles from "../styles/moveitems.module.css";

const MoveItems = ({ move, ...rest }) => {
  return (
    <>
      <div className={styles.box} {...rest}>
        {move.move}
      </div>
    </>
  );
};

export default MoveItems;
