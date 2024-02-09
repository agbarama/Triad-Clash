import React from "react";
import styles from "../styles/move.module.css";

const Move = ({ move, ...rest }) => {
  return (
    <>
      <div className={styles.box} {...rest}>
        {move.move}
      </div>
    </>
  );
};

export default Move;
