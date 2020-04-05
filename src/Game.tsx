import React, { useEffect } from "react";
import { display, gameCanvas } from "./game_objects/canvas";
import { createController } from "./game_objects/control";
import { voyager } from "./game_objects/maps";
const input = createController(display);

input.style.width = "1px";
console.log (voyager);


Object.keys(voyager).forEach((coords) => {
  let displayCharacter = ".";
  const numberCoords = coords.split(",");
  console.log (coords);
  if (voyager [coords] === 1) {
    displayCharacter = "$";
  }
    display.draw(Number(numberCoords[0]), Number(numberCoords[1]), displayCharacter, null, null);
});

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
      <button
        onClick={() => {
          display.draw(
            Math.round(Math.random() * 25),
            Math.round(Math.random() * 6),
            "T",
            "red",
            null
          );
        }}
      >
        Spawn Tuvok
      </button>
    </>
  );
};
