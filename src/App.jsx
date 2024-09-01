import React from "react";
import { useState } from "react";
import Square from "./Square";

const App = () => {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [board, setBoard] = useState(arr);
  return (
    <>
      <div>
        <Square value={board[0]} />
        <Square value={board[1]} />
        <Square value={board[2]} />
      </div>
      <div>
        <Square value={board[3]} />
        <Square value={board[4]} />
        <Square value={board[5]} />
      </div>
      <div>
        <Square value={board[6]} />
        <Square value={board[7]} />
        <Square value={board[8]} />
      </div>
    </>
  );
};

export default App;
