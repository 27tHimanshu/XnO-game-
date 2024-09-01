import React, { useState, useEffect } from "react";
import Square from "./Square";
import "./App.css";

const App = () => {
  const winningPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState("X");
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    const gameWinner = getWinner();
    if (gameWinner) {
      setWinner(gameWinner);
      alert(`${gameWinner} won the game`);
    }
  }, [board]);

  const reloadPage = () => {
    window.location.reload();
  };

  const getWinner = () => {
    for (let i = 0; i < winningPattern.length; i++) {
      const [a, b, c] = winningPattern[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  const handleClick = (index) => {
    if (board[index] || winner) {
      alert("This place is filled already or the game is over");
      return;
    }

    const newBoard = board.slice();
    newBoard[index] = turn;
    setBoard(newBoard);

    const gameWinner = getWinner();
    if (gameWinner) {
      setWinner(gameWinner);
      alert(`${gameWinner} won the game`);
    } else {
      setTurn(turn === "X" ? "O" : "X");
    }
  };

  return (
    <div className="board">
      <center>
        <h2 style={{color:'white'}}>Tic Tac Toe</h2>
      </center>
      <div className="row">
        <Square value={board[0]} func={() => handleClick(0)} />
        <Square value={board[1]} func={() => handleClick(1)} />
        <Square value={board[2]} func={() => handleClick(2)} />
      </div>
      <div className="row">
        <Square value={board[3]} func={() => handleClick(3)} />
        <Square value={board[4]} func={() => handleClick(4)} />
        <Square value={board[5]} func={() => handleClick(5)} />
      </div>
      <div className="row">
        <Square value={board[6]} func={() => handleClick(6)} />
        <Square value={board[7]} func={() => handleClick(7)} />
        <Square value={board[8]} func={() => handleClick(8)} />
      </div>
      <div className="turn">
       {winner ? (
        <>
        <h2> Winner is {winner} </h2>
        <button className="new-game" onClick={reloadPage}>New Game</button>
        </>
        
       ) : (
        <h2>
        {turn}'s turn
        </h2>
       )}
       
         
      </div>
    </div>
  );
};

export default App;
