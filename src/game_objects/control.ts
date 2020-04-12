import * as ROT from "rot-js";
import { GameMap } from "./maps";
import { findEmptyTile, convertStringCoordsToNumArray } from "./utility";
import { TUVIX_ICON } from "./constants";
// export const dogThung = 7;

let x = 0;
let y = 0;

export const drawTuvix =  (displayFromGameFile:ROT.Display):void => {
  displayFromGameFile.draw(x, y, TUVIX_ICON, null, null);
};

export const createController = (
  displayFromGameFile: ROT.Display,
  mapFromGameFile: GameMap
) => {
  const playStartingPosition = convertStringCoordsToNumArray(
    findEmptyTile(mapFromGameFile)
  );
  x = playStartingPosition[0];
  y = playStartingPosition[1];


  const input = document.createElement("input");

  input.addEventListener("keydown", function (e) {
    const code = e.keyCode;
    const ch = String.fromCharCode(code);
    let vk = "?"; /* find the corresponding constant */
    for (const name in ROT.KEYS) {
      if ((ROT.KEYS as any)[name] == code && name.indexOf("VK_") == 0) {
        vk = name;
      }
    }
    displayFromGameFile.draw(x, y, ".", null, null);
    if (vk === "VK_UP") {
      if (mapFromGameFile[`${x},${y - 1}`] !== 1) {
        y--;
      }
    }
    if (vk === "VK_DOWN") {
      if (mapFromGameFile[`${x},${y + 1}`] !== 1) {
        y++;
      }
    }
    if (vk === "VK_RIGHT") {
      if (mapFromGameFile[`${x + 1},${y}`] !== 1) {
        x++;
      }
    }
    if (vk === "VK_LEFT") {
      if (mapFromGameFile[`${x - 1},${y}`] !== 1) {
        x--;
      }
    }

    displayFromGameFile.draw(x, y, TUVIX_ICON, null, null);
  });
  return input;
};
