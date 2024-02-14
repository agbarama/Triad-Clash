import styles from "../styles/avataritems.module.css";

const AvatarItems = ({ avatar }) => {
  return (
    <div className={`${styles.avatar} ${avatar.status ? styles.border : ""}`}>
      {avatar.avatar}
    </div>
  );
};

export default AvatarItems;
