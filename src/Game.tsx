import React, { useEffect } from "react";
import { display, gameCanvas } from "./game_objects/canvas";
import { createController, drawTuvix } from "./game_objects/control";
import { voyager } from "./game_objects/maps";
import { convertStringCoordsToNumArray, findEmptyTile } from "./game_objects/utility";
const input = createController(display, voyager);


input.style.width = "1px";
console.log (voyager);


Object.keys(voyager).forEach((coords) => {
  let displayCharacter = ".";
  const numberCoords = convertStringCoordsToNumArray (coords);
  console.log (coords);
  if (voyager [coords] === 1) {
    displayCharacter = "$";
  }
    display.draw(numberCoords[0], numberCoords[1], displayCharacter, null, null);
});

drawTuvix (display);

const randomPosition = convertStringCoordsToNumArray(
  findEmptyTile(voyager)
);
const x = randomPosition[0];
const y = randomPosition[1];

display.draw(x, y, "J", 'red', null);

export const Game = () => {
  useEffect(() => {
    const divTag = document.querySelector("#game-wrapper");
    console.log(divTag);
    if (gameCanvas !== null) {
      divTag?.appendChild(input);
      divTag?.appendChild(gameCanvas);
      input.focus();
    }
  }, []);
  return (
    <>
      <div id="game-wrapper"></div>
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
