import React from "react";
import TicTacToe from "../games/TicTacToe";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="Home">
      <Link to="/tictactoe">
      TicTacToe
      </Link>
      <Link to="/rockpaperscissors">
        Rock Paper Scissors
      </Link>
      <Link to="/typing">
        Typing
      </Link>
    </div>
  )
}

export default Home;