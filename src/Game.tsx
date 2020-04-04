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

let y = 4;
let x = 8;
const display = new ROT.Display(displayConfig);
const gameCanvas = display.getContainer();
display.draw(x, y, ["V", "T"], null, null);

const input = document.createElement("input");

input.addEventListener("keydown", function(e) {
  const code = e.keyCode;
  const ch = String.fromCharCode(code);
  let vk = "?"; /* find the corresponding constant */
  for (const name in ROT.KEYS) {
    if ((ROT.KEYS as any)[name] == code && name.indexOf("VK_") == 0) {
      vk = name;
    }
  }
  display.draw(x, y, " ", null, null);
  if (vk === "VK_UP") y--;
  if (vk === "VK_DOWN") y++;
  if (vk === "VK_RIGHT") x++;
  if (vk === "VK_LEFT") x--;

  display.draw(x, y, ["V", "T"], null, null);
});

input.style.width = "1px";

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
