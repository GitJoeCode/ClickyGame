import React from "react";
import "./style.css";

function ScoreCount(props) {
  return (
    <>
      <h1> League of Legends Memory Game
        {/* <img src="./images/icon.png" alt="icon" id="icon"/>  */}
      </h1>     
      <h3>Objective: Click every different Champion, but only once!</h3>
      <p id="message">{props.message}</p>
      <div className="scoreBox">
        <span className="score">Score {props.score}</span>
        <span className="score">Top Score {props.topScore}</span>
      </div>
    </>
  )
}

export default ScoreCount;