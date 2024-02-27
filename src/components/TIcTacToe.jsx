import React, { useEffect, useState } from "react";
import styles from "../styles/tictactoe.module.css";
import MoveList from "./MoveList";
import AvatarList from "./AvatarList";
import DisplayWinner from "./DisplayWinner";

const TIcTacToe = () => {
  // Looped moves
  const [moves, setMoves] = useState([
    { id: 1, move: "", win: false },
    { id: 2, move: "", win: false },
    { id: 3, move: "", win: false },
    { id: 4, move: "", win: false },
    { id: 5, move: "", win: false },
    { id: 6, move: "", win: false },
    { id: 7, move: "", win: false },
    { id: 8, move: "", win: false },
    { id: 9, move: "", win: false },
  ]);

  const [clickedMoves, setClickedMoves] = useState([]);
  const [clickedMove, setClickedMove] = useState();
  const [scores, setScores] = useState([]);
  const [computerScore, setComputerScore] = useState([]);

  // Avatars array of objects
  const [avatars, setAvatars] = useState([
    { avatar: "X", status: true, score: 0 },
    { avatar: "O", status: false, score: 0 },
  ]);

  //avatars saved seperated on a state
  const [userAvatar, setUserAvatar] = useState("X");
  const [computerAvatar, setComputerAvatar] = useState("O");

  // display message
  const [playMessage, setPlayMessage] = useState("Start game or select player");

  const [userScore, setUserScore] = useState([]);
  const [isWinner, setIsWinner] = useState(false);
  const [winner, setWinner] = useState(computerAvatar);
  const [movesWin, setMovesWin] = useState(false);

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

    const displayScore = (array, x1, x2, x3) => {
      if (array.length === 3) {
        // make sure all 3 user moves are played before running code
        if (
          array[0].move === userAvatar &&
          array[1].move === userAvatar &&
          array[2].move === userAvatar
        ) {
          // toggle won user moves
          moves.map((move) => {
            if (move.id === x1 || move.id === x2 || move.id === x3) {
              move.win = true;
            }
          });
          setMoves(moves);

          setPlayMessage("Game Over");

          setTimeout(() => {
            setWinner(userAvatar);
            setIsWinner(true);

            // set user score count
            avatars.map((avatar) =>
              avatar.avatar === userAvatar
                ? (avatar.score = avatar.score + 1)
                : (avatar.score = avatar.score)
            );
            setAvatars(avatars);
          }, 3000);
        }

        // make sure all 3 computer moves are played before run code
        else if (
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
            setAvatars(avatars);
          }, 3000);
        }
      }
    };

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

      // Run only when move is equal to computerAvatar
      if (move.move === computerAvatar) {
        // for row 1
        if (move.id === 1 || move.id === 2 || move.id === 3) {
          // to make sure selected moves are not empty before adding them to the array
          if (move.move !== "") {
            compRow11.push(move);
            console.log(compRow11);
            displayScore(compRow11, 1, 2, 3);
          }
        }

        // for row 2
        if (move.id === 4 || move.id === 5 || move.id === 6) {
          // to make sure selected moves are not empty before adding them to the array
          if (move.move !== "") {
            compRow22.push(move);
            console.log(compRow22);
            displayScore(compRow22, 4, 5, 6);
          }
        }

        // for row 3
        if (move.id === 7 || move.id === 8 || move.id === 9) {
          // to make sure selected moves are not empty before adding them to the array
          if (move.move !== "") {
            compRow33.push(move);
            console.log(compRow33);
            displayScore(compRow33, 7, 8, 9);
          }
        }

        // for column 1
        if (move.id === 1 || move.id === 4 || move.id === 7) {
          // to make sure selected moves are not empty before adding them to the array
          if (move.move !== "") {
            compColumn11.push(move);
            console.log(compColumn11);
            displayScore(compColumn11, 1, 4, 7);
          }
        }

        // for column 2
        if (move.id === 2 || move.id === 5 || move.id === 8) {
          // to make sure selected moves are not empty before adding them to the array
          if (move.move !== "") {
            compColumn22.push(move);
            console.log(compColumn22);
            displayScore(compColumn22, 2, 5, 8);
          }
        }

        // for column 3
        if (move.id === 3 || move.id === 6 || move.id === 9) {
          // to make sure selected moves are not empty before adding them to the array
          if (move.move !== "") {
            compColumn33.push(move);
            console.log(compColumn33);
            displayScore(compColumn33, 3, 6, 9);
          }
        }

        // for slide
        if (move.id === 1 || move.id === 5 || move.id === 9) {
          // to make sure selected moves are not empty before adding them to the array
          if (move.move !== "") {
            compSlide.push(move);
            console.log(compSlide);
            displayScore(compSlide, 1, 5, 9);
          }
        }
      }
    });
  }, [clickedMoves]);

  // useEffect(() => {
  //   moves.map((move) => {
  //     if (move.move === computerAvatar) {
  //       setScores([...scores, move]);
  //     }
  //   });
  // }, [moves]);

  // useEffect(()=> {

  //     moves.map((move) =>
  //     move.move !== "" ? setUserScore([...userScore, move]) : moves
  //   );
  //   userScore.map(()=> )
  // }, [userScore])

  // useEffect(() => {
  //   const usserScore = [];

  //   // score objects arrays
  //   const row1 = [];
  //   const row2 = [];
  //   const row3 = [];
  //   const column1 = [];
  //   const column2 = [];
  //   const column3 = [];
  //   const slide = [];

  //   moves.map((move) =>
  //     move.move !== "" ? setUserScore([...userScore, move]) : moves
  //   );

  //   // console.log(userScore);

  //   let one;
  //   let two;
  //   let three;
  //   let four;
  //   let five;
  //   let six;
  //   let seven;
  //   let eight;
  //   let nine;

  //   // userScore.map((u) => {
  //   //   if (u.id === 2) {
  //   //     one = u.id;
  //   //     console.log(u.id);
  //   //   }
  //   // });

  //   // for id 1
  //   userScore.map((uScore) => {
  //     if (uScore.id === 1) {
  //       one = uScore.id;
  //       if (!row1.includes(uScore.id)) {
  //         row1.push(...row1, uScore.id);
  //       }

  //       if (!column1.includes(uScore.id)) {
  //         column1.push(...column1, uScore.id);
  //       }

  //       if (!slide.includes(uScore.id)) {
  //         slide.push(...slide, uScore.id);
  //       }

  //       // row1.push(...row1, uScore.id);
  //       // column1.push(...column1, uScore.id);
  //       // slide.push(...slide, uScore.id);
  //     }
  //   });

  //   // for id 2
  //   userScore.map((uScore) => {
  //     if (uScore.id === 2) {
  //       two = uScore.id;
  //       // column2.push(...column1, one);

  //       console.log(one);

  //       // column2.push(...column1, uScore.id);

  //       const same = 2;

  //       if (!row1.includes(uScore.id)) {
  //         row1.push(...row1, uScore.id);
  //       }
  //       if (!column2.includes(same)) {
  //         column2.push(...column2, same);
  //       } else {
  //         console.log("same");
  //         console.log(column2);
  //       }
  //     }
  //   });

  //   // for id 3
  //   userScore.map((uScore) => {
  //     if (uScore.id === 3) {
  //       three = uScore.id;

  //       if (!row1.includes(uScore.id)) {
  //         row1.push(...row1, uScore.id);
  //       }

  //       if (!column3.includes(uScore.id)) {
  //         column3.push(...column3, uScore.id);
  //       }

  //       // row1.push(...row1, uScore.id);
  //       // column3.push(...column3, uScore.id);
  //     }
  //   });

  //   // for id 4
  //   userScore.map((uScore) => {
  //     if (uScore.id === 4) {
  //       four = uScore.id;

  //       if (!row2.includes(uScore.id)) {
  //         row2.push(...row2, uScore.id);
  //       }
  //       if (!column1.includes(uScore.id)) {
  //         column1.push(...column1, uScore.id);
  //       }

  //       // row2.push(...row2, uScore.id);
  //       // column1.push(...column1, uScore.id);
  //     }
  //   });

  //   // for id 5
  //   userScore.map((uScore) => {
  //     if (uScore.id === 5) {
  //       five = uScore.id;

  //       const same = uScore.id;

  //       if (!row2.includes(uScore.id)) {
  //         row2.push(...row2, uScore.id);
  //       }

  //       if (!column2.includes(same)) {
  //         column2.push(...column2, same);
  //       }

  //       if (!slide.includes(uScore.id)) {
  //         slide.push(...slide, uScore.id);
  //       }

  //       // row2.push(...row2, uScore.id);
  //       // column2.push(...column2, uScore.id);
  //       // slide.push(...slide, uScore.id);
  //     }
  //   });

  //   // for id 6
  //   userScore.map((uScore) => {
  //     if (uScore.id === 6) {
  //       six = uScore.id;

  //       if (!row2.includes(uScore.id)) {
  //         row2.push(...row2, uScore.id);
  //       }
  //       if (!column2.includes(uScore.id)) {
  //         column2.push(...column2, uScore.id);
  //       }
  //       // row2.push(...row2, uScore.id);
  //       // column2.push(...column2, uScore.id);
  //     }
  //   });

  //   // for id 7
  //   userScore.map((uScore) => {
  //     if (uScore.id === 7) {
  //       seven = uScore.id;

  //       if (!row3.includes(uScore.id)) {
  //         row3.push(...row3, uScore.id);
  //       }

  //       if (!column1.includes(uScore.id)) {
  //         column1.push(...column1, uScore.id);
  //       }
  //       // row3.push(...row3, uScore.id);
  //       // column1.push(...column1, uScore.id);
  //     }
  //   });

  //   // for id 8
  //   userScore.map((uScore) => {
  //     if (uScore.id === 8) {
  //       eight = uScore.id;

  //       const same = uScore.id;

  //       if (!row3.includes(uScore.id)) {
  //         row3.push(...row3, uScore.id);
  //       }

  //       if (!column2.includes(same)) {
  //         column2.push(...column2, same);
  //       }
  //       // row3.push(...row3, uScore.id);
  //       // column2.push(...column2, uScore.id);
  //     }
  //   });

  //   // for id 9
  //   userScore.map((uScore) => {
  //     if (uScore.id === 9) {
  //       nine = uScore.id;

  //       if (!row3.includes(uScore.id)) {
  //         row3.push(...row3, uScore.id);
  //       }
  //       if (!column3.includes(uScore.id)) {
  //         column3.push(...column3, uScore.id);
  //       }
  //       if (!slide.includes(uScore.id)) {
  //         slide.push(...slide, uScore.id);
  //       }
  //       // row3.push(...row3, uScore.id);
  //       // column3.push(...column3, uScore.id);
  //       // slide.push(...slide, uScore.id);
  //     }
  //   });

  //   console.log(column2);

  //   const rowOne = row1.join(",");
  //   const rowTwo = row2.join(",");
  //   const rowThree = row3.join(",");

  //   const columnOne = column1.join(",");
  //   const columnTwo = column2.join(",");
  //   const columnThree = column3.join(",");
  //   const slid = slide.join(",");

  //   setScore({
  //     ...score,
  //     row1: rowOne,
  //     score,
  //     row2: rowTwo,
  //     row3: rowThree,
  //     column1: columnOne,
  //     column2: columnTwo,
  //     colum3: columnThree,
  //     slide: slid,
  //   });
  // }, [clickedMove]);

  // useEffect(() => {
  //   // array to save mapped boxes with 'O'
  //   const computeScore = [];

  //   // score objects arrays
  //   const row1 = [];
  //   const row2 = [];
  //   const row3 = [];
  //   const column1 = [];
  //   const column2 = [];
  //   const column3 = [];
  //   const slide = [];

  //   // map and save id to array above
  //   moves.map((move) =>
  //     move.move === computerAvatar
  //       ? computeScore.push(...computerScore, move.id)
  //       : moves
  //   );

  //   computeScore.map((scr) => {
  //     if (scr === 1) {
  //       row1.push(...row1, scr);
  //       column1.push(...column1, scr);
  //       slide.push(...slide, scr);
  //     }

  //     if (scr === 2) {
  //       row1.push(...row1, scr);
  //       column2.push(...column2, scr);
  //     }

  //     if (scr === 3) {
  //       row1.push(...row1, scr);
  //       column3.push(...column3, scr);
  //     }

  //     if (scr === 4) {
  //       row2.push(...row2, scr);
  //       column1.push(...column1, scr);
  //     }

  //     if (scr === 5) {
  //       row2.push(...row2, scr);
  //       column2.push(...column2, 5);
  //       slide.push(...slide, scr);
  //     }

  //     if (scr === 6) {
  //       row2.push(...row2, scr);
  //       column3.push(...column3, scr);
  //     }

  //     if (scr === 7) {
  //       row3.push(...row3, scr);
  //       column1.push(...column1, scr);
  //     }

  //     if (scr === 8) {
  //       row3.push(...row3, scr);
  //       column2.push(...column2, scr);
  //     }

  //     if (scr === 9) {
  //       row3.push(...row3, scr);
  //       column3.push(...column3, scr);
  //       slide.push(...slide, scr);
  //     }
  //   });

  //   // code to run to display scores
  //   if (row1.includes(1) && row1.includes(2) && row1.includes(3)) {
  //     alert("You lose, row 1");
  //   } else if (row2.includes(4) && row2.includes(5) && row2.includes(6)) {
  //     alert("You lose, row 2");
  //   } else if (row3.includes(7) && row3.includes(8) && row3.includes(9)) {
  //     alert("You lose, row 3");
  //   } else if (
  //     column1.includes(1) &&
  //     column1.includes(4) &&
  //     column1.includes(7)
  //   ) {
  //     alert("You lose, column 1");
  //   } else if (
  //     column2.includes(2) &&
  //     column2.includes(5) &&
  //     column2.includes(8)
  //   ) {
  //     alert("You lose, column 2");
  //   } else if (
  //     column3.includes(3) &&
  //     column3.includes(6) &&
  //     column3.includes(9)
  //   ) {
  //     alert("You lose, column 3");
  //   } else if (slide.includes(1) && slide.includes(5) && slide.includes(9)) {
  //     alert("You lose, slide");
  //   } else if (clickedMoves.length >= 7) {
  //     alert("Draw");
  //   }
  // }, [moves]);

  // const [userScore, setUserScore] = useState([]);
  const [userResult, setUserResult] = useState([]);

  // const [computerScore, setComputerScore] = useState([]);
  const [computerRow, setComputerRow] = useState([]);

  // function to reset game
  const handleReset = () => {
    setIsWinner(false);
    setMovesWin(false);
    setPlayMessage("Start game or select player");
    // map and save all objects containing a move and also return back objects that are empty
    const clearMoves = moves.map((move) => (move.move !== "" ? move : move));

    // map and save all objects containing win as true
    const clearWins = moves.map((move) => (move.move !== "" ? move : move));

    // change all mapped move to an empty string
    clearMoves.map((clr) => (clr.move = ""));

    // change all mapped win to false
    clearWins.map((clr) => (clr.win = false));

    // set moves to clear
    setMoves(clearMoves);

    // set wins to false
    setMoves(clearWins);
  };

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
          isWinner={isWinner}
          movesWin={movesWin}
        />

        <DisplayWinner isWinner={isWinner} winner={winner} />

        <div className={styles.move}>
          <div className={styles.resetGame} onClick={handleReset}>
            Reset Game
          </div>
          <div>Taunt</div>
        </div>
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
