import styles from "../styles/avatarlist.module.css";
import AvatarItems from "./AvatarItems";

const Avatars = ({ avatars }) => {
  return (
    <div className={styles.avatars}>
      {avatars.map((avatar, i) => (
        <AvatarItems key={i} avatar={avatar} />
      ))}
    </div>
  );
};

export default Avatars;
