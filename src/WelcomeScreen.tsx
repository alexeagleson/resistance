import React from "react";
import  './WelcomeScreen.css';


export const WelcomeScreen = () => {
  return (
    <>
      <h1>RESISTANCE</h1>
      <p>Tap the screen to move</p>
    <div>
      <img src= 'chakotaysmile.jpg' alt="chakotay standing"></img>
      <img src= 'janewaysmile.jpg' alt="janeway standing"></img>
      <img src= 'neelixsmile.jpg' alt="neelix standing"></img>
    </div>  
      <button>Start</button>
    </>
  );
};
