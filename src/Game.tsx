import React, { useEffect, useRef } from "react";
import { display, gameCanvas, drawMap } from "./game_objects/canvas";
import { createController } from "./game_objects/control";
import { voyager } from "./game_objects/maps";
import {
  convertStringCoordsToNumArray,
  findEmptyTile
} from "./game_objects/utility";
import {
  allGameObjects,
  placeGameObjectOnMap
} from "./game_objects/characters";
import { dogThank } from "./game_objects/sandbox";
import { dugThing } from "./game_objects/sandbox_practice2";

createController(display, voyager);

const i = dugThing;
const x = dogThank;

drawMap(voyager);
// drawTuvix(display);

allGameObjects.forEach(thisobject => {
  placeGameObjectOnMap(thisobject, voyager);
  display.draw(thisobject.location.x, thisobject.location.y, thisobject.char, thisobject.fgcolor, null);
});

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
