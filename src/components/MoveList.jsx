import React from "react";
import styles from "../styles/movelist.module.css";
import MoveItems from "./MoveItems";

const MoveList = ({
  moves,
  setMoves,
  clickedMoves,
  setClickedMoves,
  userAvatar,
  computerAvatar,
  userScore,
  setUserScore,
  computerScore,
  setComputerScore,
  setClickedMove,
  setPlayMessage,
  scores,
  setScores,
  isWinner,
  movesWin,
  setIsPlayed,
}) => {
  const handleClick = (move) => {
    // check for matching id
    const clickedId = moves.findIndex((movve) => movve.id === move.id);
    const updatedMoves = [...moves];
    updatedMoves[clickedId].move = userAvatar;

    clickedMoves.map((clicked) =>
      clicked === clickedId
        ? console.log("already clicked")
        : setMoves(updatedMoves)
    );

    setClickedMoves([...clickedMoves, clickedId]);

    setPlayMessage(`${computerAvatar} Turn`);

    // set a timeout so as to run computer move after 1sec of user move
    setTimeout(() => {
      box1(move);
      box2(move);
      box3(move);
      box4(move);
      box5(move);
      box6(move);
      box7(move);
      box8(move);
      box9(move);
    }, 1000);

    setScores([...scores, move]);
    setClickedMove(move);
    setIsPlayed(move);

    // setTotalMoves([...totalMoves, move]);
  };

  // Box 1
  const box1 = (move) => {
    const arr = [];
    let filledBox;

    if (move.id === 1) {
      moves.map((movve) => {
        if (movve.id === 2 || movve.id === 3) {
          arr.push(...arr, movve);

          // map through and check if move 2 & 3 have been made and save in a variable
          filledBox = arr.map((ar) => (ar.move !== "" ? true : false));
        }
      });

      // Run this code if box 2 & 3 is filled
      if (filledBox[0] === true) {
        moves.map((movve) => {
          movve.id === 4 || movve.id === 7 ? arr.push(...arr, movve) : moves;
        });
      }
    }

    // setPlayMessage(`${userAvatar} Turn`);

    // // Execute computer move
    // arr.find((ar) =>
    //   ar.move === ""
    //     ? (ar.move = computerAvatar)
    //     : setComputerScore([...computerScore, arr])
    // );

    // first check if movesWin is not true before executing computer move to aviod executing computer move after user win
    if (movesWin !== true) {
      setPlayMessage(`${userAvatar} Turn`);

      // Execute computer move
      arr.find((ar) =>
        ar.move === "" ? (ar.move = computerAvatar) : setComputerScore([ar])
      );
    } else {
      setPlayMessage("Game Over");
    }

    setIsPlayed(arr);
  };

  // Box 2
  const box2 = (move) => {
    const arr = [];
    let filledBox;

    if (move.id === 2) {
      moves.map((movve) => {
        if (movve.id === 1 || movve.id === 3) {
          arr.push(...arr, movve);

          // map through and check if move 1 & 3 have been made and save in a variable
          filledBox = arr.map((ar) => (ar.move !== "" ? true : false));
        }
      });

      // Run this code if box 1 & 3 is filled
      if (filledBox[0] === true) {
        moves.map((movve) => {
          movve.id === 5 || movve.id === 8
            ? arr.push(...arr, movve)
            : console.log("uu");
        });
      }
    }

    // setPlayMessage(`${userAvatar} Turn`);

    // // Execute computer move
    // arr.find((ar) => (ar.move == "" ? (ar.move = computerAvatar) : arr));

    // first check if movesWin is not true before executing computer move to aviod executing computer move after user win
    if (movesWin !== true) {
      setPlayMessage(`${userAvatar} Turn`);

      // Execute computer move
      arr.find((ar) =>
        ar.move === "" ? (ar.move = computerAvatar) : console.log("u")
      );
    } else {
      setPlayMessage("Game Over");
    }

    setIsPlayed(arr);
  };

  // Box 3
  const box3 = (move) => {
    const arr = [];
    let filledBox;

    if (move.id === 3) {
      moves.map((movve) => {
        if (movve.id === 1 || movve.id === 2) {
          arr.push(...arr, movve);

          // map through and check if move 1 & 2 have been made and save in a variable
          filledBox = arr.map((ar) => (ar.move !== "" ? true : false));
        }
      });

      // Run this code if box 1 & 2 is filled
      if (filledBox[0] === true) {
        moves.map((movve) => {
          movve.id === 6 || movve.id === 9 ? arr.push(...arr, movve) : moves;
        });
      }
    }

    // setPlayMessage(`${userAvatar} Turn`);

    // // Execute computer move
    // arr.find((ar) =>
    //   ar.move === "" ? (ar.move = computerAvatar) : console.log("u")
    // );

    // first check if movesWin is not true before executing computer move to aviod executing computer move after user win
    if (movesWin !== true) {
      setPlayMessage(`${userAvatar} Turn`);

      // Execute computer move
      arr.find((ar) =>
        ar.move === "" ? (ar.move = computerAvatar) : console.log("u")
      );
    } else {
      setPlayMessage("Game Over");
    }

    setIsPlayed(arr);
  };

  // Box 4
  const box4 = (move) => {
    const arr = [];
    let filledBox;

    if (move.id === 4) {
      moves.map((movve) => {
        if (movve.id === 5 || movve.id === 6) {
          arr.push(...arr, movve);

          // map through and check if move 5 & 6 have been made and save in a variable
          filledBox = arr.map((ar) => (ar.move !== "" ? true : false));
        }
      });

      // Run this code if box 5 & 6 is filled
      if (filledBox[0] === true) {
        moves.map((movve) => {
          movve.id === 1 || movve.id === 7 ? arr.push(...arr, movve) : moves;
        });
      }
    }

    // setPlayMessage(`${userAvatar} Turn`);

    // // Execute computer move
    // arr.find((ar) =>
    //   ar.move === "" ? (ar.move = computerAvatar) : console.log("u")
    // );

    // first check if movesWin is not true before executing computer move to aviod executing computer move after user win
    if (movesWin !== true) {
      setPlayMessage(`${userAvatar} Turn`);

      // Execute computer move
      arr.find((ar) =>
        ar.move === "" ? (ar.move = computerAvatar) : console.log("u")
      );
    } else {
      setPlayMessage("Game Over");
    }

    setIsPlayed(arr);
  };

  // Box 5
  const box5 = (move) => {
    const arr = [];
    let filledBox;

    if (move.id === 5) {
      moves.map((movve) => {
        if (movve.id === 4 || movve.id === 6) {
          arr.push(...arr, movve);

          // map through and check if move 4 & 6 have been made and save in a variable
          filledBox = arr.map((ar) => (ar.move !== "" ? true : false));
        }
      });

      // Run this code if box 5 & 6 is filled
      if (filledBox[0] === true) {
        moves.map((movve) => {
          movve.id === 2 || movve.id === 8 ? arr.push(...arr, movve) : moves;

          // map through and check if move 2, 4, 6 & 8 have been made and save in a variable
          filledBox = arr.map((ar) => (ar.move !== "" ? "true2" : false));
        });
      }

      // Run this code if box 2, 4, 6 & 8 is filled
      if (filledBox[0] === "true2") {
        moves.map((movve) => {
          movve.id === 1 || movve.id === 9 ? arr.push(...arr, movve) : moves;

          // map through and check if move 2, 4, 6 & 8 have been made and save in a variable
          filledBox = arr.map((ar) => (ar.move !== "" ? "true2" : false));
        });
      }
    }

    // setPlayMessage(`${userAvatar} Turn`);

    // // Execute computer move
    // arr.find((ar) =>
    //   ar.move === "" ? (ar.move = computerAvatar) : console.log("u")
    // );

    // first check if movesWin is not true before executing computer move to aviod executing computer move after user win
    if (movesWin !== true) {
      setPlayMessage(`${userAvatar} Turn`);

      // Execute computer move
      arr.find((ar) =>
        ar.move === "" ? (ar.move = computerAvatar) : console.log("u")
      );
    } else {
      setPlayMessage("Game Over");
    }

    setIsPlayed(arr);
  };

  // Box 6
  const box6 = (move) => {
    const arr = [];
    let filledBox;

    if (move.id === 6) {
      moves.map((movve) => {
        if (movve.id === 4 || movve.id === 5) {
          arr.push(...arr, movve);

          // map through and check if move 4 & 5 have been made and save in a variable
          filledBox = arr.map((ar) => (ar.move !== "" ? true : false));
        }
      });

      // Run this code if box 4 & 5 is filled
      if (filledBox[0] === true) {
        moves.map((movve) => {
          movve.id === 3 || movve.id === 9 ? arr.push(...arr, movve) : moves;
        });
      }
    }

    // setPlayMessage(`${userAvatar} Turn`);

    // // Execute computer move
    // arr.find((ar) =>
    //   ar.move === "" ? (ar.move = computerAvatar) : console.log("u")
    // );

    // first check if movesWin is not true before executing computer move to aviod executing computer move after user win
    if (movesWin !== true) {
      setPlayMessage(`${userAvatar} Turn`);

      // Execute computer move
      arr.find((ar) =>
        ar.move === "" ? (ar.move = computerAvatar) : console.log("u")
      );
    } else {
      setPlayMessage("Game Over");
      console.log("movesWin", true);
    }

    setIsPlayed(arr);
  };

  // Box 7
  const box7 = (move) => {
    console.log(movesWin);

    const arr = [];
    let filledBox;

    if (move.id === 7) {
      moves.map((movve) => {
        if (movve.id === 8 || movve.id === 9) {
          arr.push(...arr, movve);

          // map through and check if move 8 & 9 have been made and save in a variable
          filledBox = arr.map((ar) => (ar.move !== "" ? true : false));
        }
      });

      // Run this code if box 8 & 9 is filled
      if (filledBox[0] === true) {
        moves.map((movve) => {
          movve.id === 1 || movve.id === 4 ? arr.push(...arr, movve) : moves;
        });
      }
    }

    // setPlayMessage(`${userAvatar} Turn`);

    // // Execute computer move
    // arr.find((ar) =>
    //   ar.move === "" ? (ar.move = computerAvatar) : console.log("u")
    // );

    // first check if movesWin is not true before executing computer move to aviod executing computer move after user win
    if (movesWin !== true) {
      setPlayMessage(`${userAvatar} Turn`);
      console.log("movesWin", false);

      // Execute computer move
      arr.find((ar) =>
        ar.move === "" ? (ar.move = computerAvatar) : console.log("u")
      );
    } else {
      setPlayMessage("Game Over");
      console.log("movesWin", true);
    }

    setIsPlayed(arr);
  };

  // Box 8
  const box8 = (move) => {
    const arr = [];
    let filledBox;

    if (move.id === 8) {
      moves.map((movve) => {
        if (movve.id === 7 || movve.id === 9) {
          arr.push(...arr, movve);

          // map through and check if move 7 & 9 have been made and save in a variable
          filledBox = arr.map((ar) => (ar.move !== "" ? true : false));
        }
      });

      // Run this code if box 7 & 9 is filled
      if (filledBox[0] === true) {
        moves.map((movve) => {
          movve.id === 2 || movve.id === 5 ? arr.push(...arr, movve) : moves;
        });
      }
    }

    // setPlayMessage(`${userAvatar} Turn`);

    // // Execute computer move
    // arr.find((ar) =>
    //   ar.move === "" ? (ar.move = computerAvatar) : console.log("u")
    // );

    // first check if movesWin is not true before executing computer move to aviod executing computer move after user win
    if (movesWin !== true) {
      setPlayMessage(`${userAvatar} Turn`);

      // Execute computer move
      arr.find((ar) =>
        ar.move === "" ? (ar.move = computerAvatar) : console.log("u")
      );
    } else {
      setPlayMessage("Game Over");
    }

    setIsPlayed(arr);
  };

  // Box 9
  const box9 = (move) => {
    const arr = [];
    let filledBox;

    if (move.id === 9) {
      moves.map((movve) => {
        if (movve.id === 7 || movve.id === 8) {
          arr.push(...arr, movve);

          // map through and check if move 7 & 8 have been made and save in a variable
          filledBox = arr.map((ar) => (ar.move !== "" ? true : false));
        }
      });

      // Run this code if box 7 & 8 is filled
      if (filledBox[0] === true) {
        moves.map((movve) => {
          movve.id === 3 || movve.id === 6 ? arr.push(...arr, movve) : moves;
        });
      }
    }

    // setPlayMessage(`${userAvatar} Turn`);

    // // Execute computer move
    // arr.find((ar) =>
    //   ar.move === "" ? (ar.move = computerAvatar) : console.log("u")
    // );

    // first check if movesWin is not true before executing computer move to aviod executing computer move after user win
    if (movesWin !== true) {
      setPlayMessage(`${userAvatar} Turn`);

      // Execute computer move
      arr.find((ar) =>
        ar.move === "" ? (ar.move = computerAvatar) : console.log("u")
      );
    } else {
      setPlayMessage("Game Over");
    }

    setIsPlayed(arr);
  };

  return (
    <div className={styles.boxesContainer}>
      <div className={`${isWinner ? styles.hideBoxes : styles.boxes}`}>
        {moves.map((move) => (
          <MoveItems
            key={move.id}
            move={move}
            onClick={() => handleClick(move)}
          />
        ))}
      </div>
    </div>
  );
};

export default MoveList;
