import React, { useEffect, useState } from "react";
import styles from "../styles/tictactoe.module.css";
import MoveList from "./MoveList";
import AvatarList from "./AvatarList";
import DisplayWinner from "./DisplayWinner";
import ResetGame from "./ResetGame";
import DisplayDraw from "./DisplayDraw";

const TIcTacToe = () => {
  // Looped moves
  const [moves, setMoves] = useState([
    { id: 1, move: "", weight: 3, win: false },
    { id: 2, move: "", weight: 1, win: false },
    { id: 3, move: "", weight: 4, win: false },
    { id: 4, move: "", weight: 1, win: false },
    { id: 5, move: "", weight: 4, win: false },
    { id: 6, move: "", weight: 3, win: false },
    { id: 7, move: "", weight: 3, win: false },
    { id: 8, move: "", weight: 1, win: false },
    { id: 9, move: "", weight: 3, win: false },
  ]);

  // Avatars array of objects
  const [avatars, setAvatars] = useState([
    { avatar: "X", status: true, score: 0 },
    { avatar: "O", status: false, score: 0 },
  ]);

  //avatars saved seperated on a state
  const [userAvatar, setUserAvatar] = useState("X");
  const [computerAvatar, setComputerAvatar] = useState("O");

  // Display message
  const [playMessage, setPlayMessage] = useState("Start game or select player");
  const [hideMovesList, setHidemovesList] = useState(false);

  const [computerScore, setComputerScore] = useState([]);
  const [isPlayed, setIsPlayed] = useState("");

  const [clickedMoves, setClickedMoves] = useState([]);
  const [clickedMove, setClickedMove] = useState();
  const [scores, setScores] = useState([]);

  const [userScore, setUserScore] = useState([]);
  const [isWinner, setIsWinner] = useState(false);
  const [winner, setWinner] = useState(computerAvatar);
  const [movesWin, setMovesWin] = useState(false);

  const [draw, setDraw] = useState(true);
  const [isDraw, setIsDraw] = useState(false);

  useEffect(() => {
    // user
    let userRow11 = [];
    let userRow22 = [];
    let userRow33 = [];
    let userColumn11 = [];
    let userColumn22 = [];
    let userColumn33 = [];
    let userSlide = [];

    // computer
    let compRow11 = [];
    let compRow22 = [];
    let compRow33 = [];
    let compColumn11 = [];
    let compColumn22 = [];
    let compColumn33 = [];
    let compSlide = [];

    // const displayScore = (array, x1, x2, x3) => {
    //   if (array.length === 3) {
    //     // make sure all 3 user moves are played before running code
    //     if (
    //       array[0].move === userAvatar &&
    //       array[1].move === userAvatar &&
    //       array[2].move === userAvatar
    //     ) {
    //       // toggle won user moves
    //       moves.map((move) => {
    //         if (move.id === x1 || move.id === x2 || move.id === x3) {
    //           move.win = true;
    //         }
    //       });
    //       setMoves(moves);

    //       setPlayMessage("Game Over");

    //       setTimeout(() => {
    //         setWinner(userAvatar);
    //         setIsWinner(true);

    //         // set user score count
    //         avatars.map((avatar) =>
    //           avatar.avatar === userAvatar
    //             ? (avatar.score = avatar.score + 1)
    //             : (avatar.score = avatar.score)
    //         );
    //         setAvatars(avatars);
    //       }, 3000);
    //     }

    //     // make sure all 3 computer moves are played before run code
    //     else if (
    //       array[0].move === computerAvatar &&
    //       array[1].move === computerAvatar &&
    //       array[2].move === computerAvatar
    //     ) {
    //       // toggle won computer moves
    //       moves.map((move) => {
    //         if (move.id === x1 || move.id === x2 || move.id === x3) {
    //           move.win = true;
    //         }
    //       });
    //       setMoves(moves);

    //       setPlayMessage("Game Over");

    //       setTimeout(() => {
    //         setIsWinner(true);
    //         setWinner(computerAvatar);

    //         // set computer score count
    //         avatars.map((avatar) =>
    //           avatar.avatar === computerAvatar
    //             ? (avatar.score = avatar.score + 1)
    //             : (avatar.score = avatar.score)
    //         );
    //         setAvatars(avatars);
    //       }, 3000);
    //     }
    //   }
    // };

    const displayScore = (array, x1, x2, x3) => {
      if (array.length === 3) {
        // make sure all 3 user moves are played before running code
        if (
          array[0].move === userAvatar &&
          array[1].move === userAvatar &&
          array[2].move === userAvatar
        ) {
          setDraw(false);

          // toggle won user moves
          moves.map((move) => {
            if (move.id === x1 || move.id === x2 || move.id === x3) {
              move.win = true;
            }
          });
          setMoves(moves);
          setMovesWin(true);
          setPlayMessage("Game Over");

          setTimeout(() => {
            setHidemovesList(true);
            setWinner(userAvatar);
            setIsWinner(true);

            // // set user score count
            // avatars.map((avatar) =>
            //   avatar.avatar === userAvatar
            //     ? (avatar.score = avatar.score + 1)
            //     : (avatar.score = avatar.score)
            // );

            // console.log("still runnig...");
            // setAvatars(avatars);

            if (winner === userAvatar) {
              // set user score count
              avatars.map((avatar) =>
                avatar.avatar === userAvatar
                  ? (avatar.score = avatar.score + 1)
                  : (avatar.score = avatar.score)
              );

              console.log("still runnig...");
              setAvatars(avatars);
            }
          }, 950);

          // force state to'Game Over'
          setTimeout(() => {
            setPlayMessage("Game Over");
          }, 1000);
        }

        // make sure all 3 computer moves are played before run code
        else if (array.length === 3) {
          if (
            array[0].move === computerAvatar &&
            array[1].move === computerAvatar &&
            array[2].move === computerAvatar
          ) {
            setDraw(false);
            // toggle won computer moves
            moves.map((move) => {
              if (move.id === x1 || move.id === x2 || move.id === x3) {
                move.win = true;
              }
            });
            setMoves(moves);

            setPlayMessage("Game Over");

            setTimeout(() => {
              setHidemovesList(true);
              setIsWinner(true);
              setWinner(computerAvatar);

              // set computer score count
              avatars.map((avatar) =>
                avatar.avatar === computerAvatar
                  ? (avatar.score = avatar.score + 1)
                  : (avatar.score = avatar.score)
              );
              console.log("computer still running");
              setAvatars(avatars);
            }, 3000);
          }
        }
      }
    };

    const displayComScore = () => {
      if (array.length === 3) {
        if (
          array[0].move === computerAvatar &&
          array[1].move === computerAvatar &&
          array[2].move === computerAvatar
        ) {
          // toggle won computer moves
          moves.map((move) => {
            if (move.id === x1 || move.id === x2 || move.id === x3) {
              move.win = true;
            }
          });
          setMoves(moves);

          setPlayMessage("Game Over");

          setTimeout(() => {
            setIsWinner(true);
            setWinner(computerAvatar);

            // set computer score count
            avatars.map((avatar) =>
              avatar.avatar === computerAvatar
                ? (avatar.score = avatar.score + 1)
                : (avatar.score = avatar.score)
            );
            console.log("computer still running");
            setAvatars(avatars);
          }, 3000);
        }
      }
    };
    // computer function
    // const displayComScore = (array, x1, x2, x3) => {
    //   if (array.length === 3) {
    //     // make sure all 3 computer moves are played before run code
    //     if (
    //       array[0].move === computerAvatar &&
    //       array[1].move === computerAvatar &&
    //       array[2].move === computerAvatar
    //     ) {
    //       // toggle won computer moves
    //       moves.map((move) => {
    //         if (move.id === x1 || move.id === x2 || move.id === x3) {
    //           move.win = true;
    //         }
    //       });
    //       setMoves(moves);

    //       setPlayMessage("Game Over");

    //       setTimeout(() => {
    //         setIsWinner(true);
    //         setWinner(computerAvatar);

    //         // set computer score count
    //         avatars.map((avatar) =>
    //           avatar.avatar === computerAvatar
    //             ? (avatar.score = avatar.score + 1)
    //             : (avatar.score = avatar.score)
    //         );
    //         console.log("computer still running");
    //         setAvatars(avatars);
    //       }, 3000);
    //     }
    //   }
    // };

    moves.map((move) => {
      // Run only when move is equal to userAvatar
      if (move.move === userAvatar) {
        // for row 1
        if (move.id === 1 || move.id === 2 || move.id === 3) {
          // to make sure selected moves are not empty before adding them to the array
          if (move.move !== "") {
            userRow11.push(move);
            console.log(userRow11);
            displayScore(userRow11, 1, 2, 3);
          }
        }

        // for row 2
        if (move.id === 4 || move.id === 5 || move.id === 6) {
          // to make sure selected moves are not empty before adding them to the array
          if (move.move !== "") {
            userRow22.push(move);
            console.log(userRow22);
            displayScore(userRow22, 4, 5, 6);
          }
        }

        // for row 3
        if (move.id === 7 || move.id === 8 || move.id === 9) {
          // to make sure selected moves are not empty before adding them to the array
          if (move.move !== "") {
            userRow33.push(move);
            console.log(userRow33);
            displayScore(userRow33, 7, 8, 9);
          }
        }

        // for column 1
        if (move.id === 1 || move.id === 4 || move.id === 7) {
          // to make sure selected moves are not empty before adding them to the array
          if (move.move !== "") {
            userColumn11.push(move);
            console.log(userColumn11);
            displayScore(userColumn11, 1, 4, 7);
          }
        }

        // for column 2
        if (move.id === 2 || move.id === 5 || move.id === 8) {
          // to make sure selected moves are not empty before adding them to the array
          if (move.move !== "") {
            userColumn22.push(move);
            console.log(userColumn22);
            displayScore(userColumn22, 2, 5, 8);
          }
        }

        // for column 3
        if (move.id === 3 || move.id === 6 || move.id === 9) {
          // to make sure selected moves are not empty before adding them to the array
          if (move.move !== "") {
            userColumn33.push(move);
            console.log(userColumn33);
            displayScore(userColumn33, 3, 6, 9);
          }
        }

        // for slide
        if (move.id === 1 || move.id === 5 || move.id === 9) {
          // to make sure selected moves are not empty before adding them to the array
          if (move.move !== "") {
            userSlide.push(move);
            console.log(userSlide);
            displayScore(userSlide, 1, 5, 9);
          }
        }
      }

      // run this code only when user haven't won
      else if (movesWin !== true) {
        // Run only when move is equal to computerAvatar
        if (move.move === computerAvatar) {
          // for row 1
          if (move.id === 1 || move.id === 2 || move.id === 3) {
            // to make sure selected moves are not empty before adding them to the array
            if (move.move !== "") {
              compRow11.push(move);
              console.log(compRow11);
              displayScore(compRow11, 1, 2, 3);
              // displayComScore(compRow11, 1, 2, 3);
            }
          }

          // for row 2
          if (move.id === 4 || move.id === 5 || move.id === 6) {
            // to make sure selected moves are not empty before adding them to the array
            if (move.move !== "") {
              compRow22.push(move);
              console.log(compRow22);
              displayScore(compRow22, 4, 5, 6);
              // displayComScore(compRow22, 4, 5, 6);
            }
          }

          // for row 3
          if (move.id === 7 || move.id === 8 || move.id === 9) {
            // to make sure selected moves are not empty before adding them to the array
            if (move.move !== "") {
              compRow33.push(move);
              console.log(compRow33);
              displayScore(compRow33, 7, 8, 9);
              // displayComScore(compRow33, 7, 8, 9);
            }
          }

          // for column 1
          if (move.id === 1 || move.id === 4 || move.id === 7) {
            // to make sure selected moves are not empty before adding them to the array
            if (move.move !== "") {
              compColumn11.push(move);
              console.log(compColumn11);
              displayScore(compColumn11, 1, 4, 7);
              // displayComScore(compColumn11, 1, 4, 7);
            }
          }

          // for column 2
          if (move.id === 2 || move.id === 5 || move.id === 8) {
            // to make sure selected moves are not empty before adding them to the array
            if (move.move !== "") {
              compColumn22.push(move);
              console.log(compColumn22);
              displayScore(compColumn22, 2, 5, 8);
              // displayComScore(compColumn22, 2, 5, 8);
            }
          }

          // for column 3
          if (move.id === 3 || move.id === 6 || move.id === 9) {
            // to make sure selected moves are not empty before adding them to the array
            if (move.move !== "") {
              compColumn33.push(move);
              console.log(compColumn33);
              displayScore(compColumn33, 3, 6, 9);
              // displayComScore(compColumn33, 3, 6, 9);
            }
          }

          // for slide
          if (move.id === 1 || move.id === 5 || move.id === 9) {
            // to make sure selected moves are not empty before adding them to the array
            if (move.move !== "") {
              compSlide.push(move);
              console.log(compSlide);
              displayScore(compSlide, 1, 5, 9);
              // displayComScore(compSlide, 1, 5, 9);
            }
          }
        }
      }
      if (clickedMoves.length >= 5 && scores.length >= 4) {
        if (draw) {
          setTimeout(() => {
            setHidemovesList(true);
            setIsDraw(true);
            setPlayMessage("Game Over");
            console.log("Tie");
          }, 1000);
        }
      }
    });
  }, [isPlayed]);

  return (
    <div className={styles.container}>
      <div className={styles.gameContainer}>
        <AvatarList
          avatars={avatars}
          setAvatars={setAvatars}
          setUserAvatar={setUserAvatar}
          setComputerAvatar={setComputerAvatar}
        />

        <div className={styles.play}>{playMessage}</div>
        <MoveList
          moves={moves}
          setMoves={setMoves}
          clickedMoves={clickedMoves}
          setClickedMoves={setClickedMoves}
          userAvatar={userAvatar}
          computerAvatar={computerAvatar}
          userScore={userScore}
          setUserScore={setUserScore}
          computerScore={computerScore}
          setComputerScore={setComputerScore}
          setClickedMove={setClickedMove}
          setPlayMessage={setPlayMessage}
          scores={scores}
          setScores={setScores}
          hideMovesList={hideMovesList}
          isWinner={isWinner}
          isDraw={isDraw}
          movesWin={movesWin}
          setIsPlayed={setIsPlayed}
        />

        <DisplayWinner isWinner={isWinner} winner={winner} />
        <DisplayDraw
          isDraw={isDraw}
          userAvatar={userAvatar}
          computerAvatar={computerAvatar}
        />
        <ResetGame
          setWinner={setWinner}
          setIsWinner={setIsWinner}
          setMovesWin={setMovesWin}
          setPlayMessage={setPlayMessage}
          moves={moves}
          setMoves={setMoves}
          setHidemovesList={setHidemovesList}
          setIsDraw={setIsDraw}
          setDraw={setDraw}
          setClickedMoves={setClickedMoves}
          setScores={setScores}
        />
      </div>

      <div className={styles.footer}>
        <div className={styles.playConatiner}>
          <div className={styles.play}>
            Playing in: <span className={styles.grey}>room-3</span>
          </div>
          <div className={styles.avatar}>
            You are: <span className={styles.grey}>{userAvatar}</span>
          </div>
        </div>

        <div className={styles.opponent}>
          Opponent: <span className={styles.grey}>grfhror465w</span>
        </div>
      </div>
    </div>
  );
};

export default TIcTacToe;
