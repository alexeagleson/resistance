import React from "react";
import "./WelcomeScreen.css";
import { Game } from "./Game";

export const WelcomeScreen = () => {
  return (
    <>
      <h1>RESISTANCE</h1>
      <div>
        <img className="profile-picture"
          src="chakotaysmile.jpg"
          alt="chakotay standing"
        ></img>
        <img className="profile-picture"
          src="janewaysmile.jpg"
          alt="janeway standing"
        ></img>
        <img className="profile-picture"
          src="neelixsmile.jpg"
          alt="neelix standing"
        ></img>
      </div>
      <Game></Game>
      <p>Tap the screen to move</p>

      <button>Start</button>
    </>
  );
};
