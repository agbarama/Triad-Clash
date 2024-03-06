import styles from "../styles/avatarlist.module.css";
import AvatarItems from "./AvatarItems";

const Avatars = ({ avatars, setAvatars, setUserAvatar, setComputerAvatar }) => {
  const handleClick = (avatar) => {
    if (avatar.avatar === "X") {
      setUserAvatar("X");
      setComputerAvatar("O");
      setAvatars([
        { avatar: "X", status: true, score: 0 },
        { avatar: "O", status: false, score: 0 },
      ]);
    }

    if (avatar.avatar === "O") {
      setUserAvatar("O");
      setComputerAvatar("X");
      setAvatars([
        { avatar: "X", status: false, score: 0 },
        { avatar: "O", status: true, score: 0 },
      ]);
    }
  };

  return (
    <div className={styles.avatars}>
      {avatars.map((avatar, i) => (
        <AvatarItems
          key={i}
          avatar={avatar}
          onClick={() => handleClick(avatar)}
        />
      ))}
    </div>
  );
};

export default Avatars;
