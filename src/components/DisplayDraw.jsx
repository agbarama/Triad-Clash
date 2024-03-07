import styles from "../styles/displaydraw.module.css";

const DisplayDraw = ({ isDraw, userAvatar, computerAvatar }) => {
  return (
    <div className={`${isDraw ? styles.draw : styles.hideDraw}`}>
      <p className={styles.drawAvatars}>
        {userAvatar} {computerAvatar}
      </p>
      <p className={styles.drawText}>DRAW!</p>
    </div>
  );
};

export default DisplayDraw;
