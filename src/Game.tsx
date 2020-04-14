import React, { useEffect, useRef } from "react";
import { display, gameCanvas, drawMap } from "./game_objects/canvas";
import { createController, drawTuvix } from "./game_objects/control";
import { voyager } from "./game_objects/maps";
import {
  convertStringCoordsToNumArray,
  findEmptyTile
} from "./game_objects/utility";

createController(display, voyager);

// [UPDATE] No longer required
// input.style.width = "1px";

// [UPDATE] Created drawMap function
drawMap(voyager);
drawTuvix(display);

const randomPosition = convertStringCoordsToNumArray(findEmptyTile(voyager));
const x = randomPosition[0];
const y = randomPosition[1];

display.draw(x, y, "J", "red", null);

export const Game = () => {
  const gameWrapper = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (gameWrapper.current && gameCanvas) {
      gameWrapper.current.appendChild(gameCanvas);
    }
  }, []);
  
  return (
    <>
      <div ref={gameWrapper}></div>
      {/* <button
        onClick={() => {
          display.draw(
            Math.round(Math.random() * 25),
            Math.round(Math.random() * 6),
            "T",
            "red",
            null
          );
        }} */}
      {/* >
        Spawn Tuvok
      </button> 
      THIS SPAWNS SO MANY RED TUVOKS*/}
    </>
  );
};
