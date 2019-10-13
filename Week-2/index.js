const gridContainer = document.querySelector(".grid-container");
const restart = document.getElementById("restart");

const gameBoard = (() => {
  const board = [["", "", ""], ["", "", ""], ["", "", ""]];
  const play = (type, x, y) => {
    if (board[x][y] === "") {
      board[x][y] = type;
      return true;
    }
    return false;
  };
  const winner = () => {
    for (let i = 0; i < 3; i++) {
      if (
        board[0][i] === board[1][i] &&
        board[1][i] === board[2][i] &&
        board[0][i] !== ""
      ) {
        return board[0][i];
      }
      if (
        board[i][0] === board[i][1] &&
        board[i][1] === board[i][2] &&
        board[i][0] !== ""
      ) {
        return board[i][0];
      }
    }
    if (
      (board[0][0] === board[1][1] &&
        board[1][1] === board[2][2] &&
        board[0][0] !== "") ||
      (board[0][2] === board[1][1] &&
        board[1][1] === board[2][0] &&
        board[0][2] !== "")
    ) {
      return board[1][1];
    }

    return "draw";
  };
  function clear() {
    for (let p = 0; p < 3; p++) {
      for (let j = 0; j < 3; j++) {
        board[p][j] = "";
      }
    }
    const gridContainerChildren = gridContainer.children;
    for (let k = 0; k < gridContainerChildren.length; k++) {
      gridContainerChildren[k].innerHTML = "";
    }
    document.getElementById("winner").innerHTML = "";
  }
  return { play, winner, clear };
})();

const player = type => {
  const makeMove = (x, y) => {
    const dup = gameBoard.play(type, x, y);
    if (dup === false) {
      return false;
    }
    return true;
  };
  return { makeMove };
};

const PlayerX = player("X");
const PlayerO = player("O");

const game = (() => {
  let Xturn = 1;
  let i = 0;
  function makePlay(e) {
    if (Xturn) {
      const repeat = PlayerX.makeMove(
        e.target.classList.item(0)[0],
        e.target.classList.item(0)[1]
      );
      if (repeat === true) {
        document.querySelector(
          `.${CSS.escape(e.target.classList.item(0))}`
        ).innerHTML = "X";
        Xturn = !Xturn;
        i++;
      }
    } else {
      const repeat = PlayerO.makeMove(
        e.target.classList.item(0)[0],
        e.target.classList.item(0)[1]
      );
      if (repeat === true) {
        document.querySelector(
          `.${CSS.escape(e.target.classList.item(0))}`
        ).innerHTML = "0";
        Xturn = !Xturn;
        i++;
      }
    }

    if (gameBoard.winner() !== "draw" || i === 9) {
      let result = `winner is ${gameBoard.winner()}`;
      gridContainer.removeEventListener("click", makePlay);
      if (gameBoard.winner() === "draw") {
        result = "Draw";
      }
      document.getElementById("winner").innerHTML = result;
      i = 0;
      Xturn = 1;
    }
  }

  gridContainer.addEventListener("click", makePlay);
  restart.addEventListener("click", () => {
    gameBoard.clear();
    gridContainer.addEventListener("click", makePlay);
  });
})();
