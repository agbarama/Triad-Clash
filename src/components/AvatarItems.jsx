import styles from "../styles/avataritems.module.css";

const AvatarItems = ({ avatar, ...rest }) => {
  return (
    <div
      className={`${styles.avatar} ${avatar.status ? styles.border : ""}`}
      {...rest}
    >
      {avatar.avatar}
    </div>
  );
};

export default AvatarItems;
