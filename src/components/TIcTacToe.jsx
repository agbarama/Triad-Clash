import React, { useEffect, useState } from "react";
import styles from "../styles/tictactoe.module.css";
import MoveList from "./MoveList";
import AvatarList from "./AvatarList";

const TIcTacToe = () => {
  // Looped moves
  const [moves, setMoves] = useState([
    { id: 1, move: "" },
    { id: 2, move: "" },
    { id: 3, move: "" },
    { id: 4, move: "" },
    { id: 5, move: "" },
    { id: 6, move: "" },
    { id: 7, move: "" },
    { id: 8, move: "" },
    { id: 9, move: "" },
  ]);

  const [clickedMoves, setClickedMoves] = useState([]);
  const [clickedMove, setClickedMove] = useState();

  // Avatars array of objects
  const [avatars, setAvatars] = useState([
    { avatar: "X", status: true },
    { avatar: "O", status: false },
  ]);

  //avatars saved seperated on a state
  const [userAvatar, setUserAvatar] = useState("X");
  const [computerAvatar, setComputerAvatar] = useState("O");

  const [playMessage, setPlayMessage] = useState("Start game or select player");

  const [userScore, setUserScore] = useState([]);

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

  const [computerScore, setComputerScore] = useState([]);
  useEffect(() => {
    // push object ids containing moves to the total array
    moves.map((move) => {
      if (move.move !== "") {
        setClickedMoves([...clickedMoves, move.id]);
      }
    });

    // array to save mapped boxes with 'O'
    const computeScore = [];

    // score objects arrays
    const row1 = [];
    const row2 = [];
    const row3 = [];
    const column1 = [];
    const column2 = [];
    const column3 = [];
    const slide = [];

    // map and save id to array above
    moves.map((move) =>
      move.move === computerAvatar
        ? computeScore.push(...computerScore, move.id)
        : moves
    );

    computeScore.map((scr) => {
      if (scr === 1) {
        row1.push(...row1, scr);
        column1.push(...column1, scr);
        slide.push(...slide, scr);
      }

      if (scr === 2) {
        row1.push(...row1, scr);
        column2.push(...column2, scr);
      }

      if (scr === 3) {
        row1.push(...row1, scr);
        column3.push(...column3, scr);
      }

      if (scr === 4) {
        row2.push(...row2, scr);
        column1.push(...column1, scr);
      }

      if (scr === 5) {
        row2.push(...row2, scr);
        column2.push(...column2, 5);
        slide.push(...slide, scr);
      }

      if (scr === 6) {
        row2.push(...row2, scr);
        column3.push(...column3, scr);
      }

      if (scr === 7) {
        row3.push(...row3, scr);
        column1.push(...column1, scr);
      }

      if (scr === 8) {
        row3.push(...row3, scr);
        column2.push(...column2, scr);
      }

      if (scr === 9) {
        row3.push(...row3, scr);
        column3.push(...column3, scr);
        slide.push(...slide, scr);
      }
    });

    // code to run to display scores
    if (row1.includes(1) && row1.includes(2) && row1.includes(3)) {
      alert("You lose, row 1");
    } else if (row2.includes(4) && row2.includes(5) && row2.includes(6)) {
      alert("You lose, row 2");
    } else if (row3.includes(7) && row3.includes(8) && row3.includes(9)) {
      alert("You lose, row 3");
    } else if (
      column1.includes(1) &&
      column1.includes(4) &&
      column1.includes(7)
    ) {
      alert("You lose, column 1");
    } else if (
      column2.includes(2) &&
      column2.includes(5) &&
      column2.includes(8)
    ) {
      alert("You lose, column 2");
    } else if (
      column3.includes(3) &&
      column3.includes(6) &&
      column3.includes(9)
    ) {
      alert("You lose, column 3");
    } else if (slide.includes(1) && slide.includes(5) && slide.includes(9)) {
      alert("You lose, slide");
    } else if (clickedMoves.length >= 7) {
      alert("Draw");
    }
  }, [moves]);

  // const [userScore, setUserScore] = useState([]);
  const [userResult, setUserResult] = useState([]);

  // const [computerScore, setComputerScore] = useState([]);
  const [computerRow, setComputerRow] = useState([]);

  // function to reset game
  const handleReset = () => {
    // map and save all objects containing a move
    const clear = moves.map((move) => (move.move !== "" ? move : ""));

    // change all mapped move to an empty string
    clear.map((clr) => (clr.move = ""));

    // set moves to clear
    setMoves(clear);
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
        />

        <div className={styles.move}>
          <div className={styles.resetGame} onClick={handleReset}>
            Reset Game{" "}
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
