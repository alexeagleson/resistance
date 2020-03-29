import React, { useEffect } from "react";
import * as ROT from "rot-js";
import { DisplayOptions } from "rot-js/lib/display/types";

const displayConfig: Partial<DisplayOptions> = {
  width: 30,
  height: 10,
  fontSize: 40,
  bg: "grey",
  fg: "pink"
};
var display = new ROT.Display(displayConfig);
const gameCanvas = display.getContainer();
display.draw(25, 4, ["V", "T"], null, null);

export const Game = () => {
  useEffect(() => {
    const divTag = document.querySelector("#game-wrapper");
    console.log(divTag);
    if (gameCanvas !== null) divTag?.appendChild(gameCanvas);
  }, []);
  return (
    <>
      <div id="game-wrapper"></div>
      <button
        onClick={() => {
          display.draw(Math.round(Math.random()*25),Math.round(Math.random()*6), "T", 'red', null)
        }}>
        Spawn Tuvok
      </button>
    </>
  );
};
