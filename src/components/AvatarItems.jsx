import styles from "../styles/avataritems.module.css";

const AvatarItems = ({ avatar, ...rest }) => {
  return (
    <div
      className={`${styles.avatar} ${avatar.status ? styles.border : ""}`}
      {...rest}
    >
      <p className={styles.p}>{avatar.avatar} </p>{" "}
      <p className={styles.p}>{avatar.score} </p>
    </div>
  );
};

export default AvatarItems;
