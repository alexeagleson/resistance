import * as ROT from "rot-js";
import { GameMap } from "./maps";
import { findEmptyTile, convertStringCoordsToNumArray } from "./utility";
import { TUVIX_ICON } from "./constants";
import { tuvix } from "./characters";

// export const drawTuvix = (displayFromGameFile: ROT.Display): void => {
//   displayFromGameFile.draw(x, y, TUVIX_ICON, null, null);
// };

export const createController = (
  displayFromGameFile: ROT.Display,
  mapFromGameFile: GameMap
) => {
  window.addEventListener("keydown", e => {
    const code = e.keyCode;
    // const ch = String.fromCharCode(code);
    let vk = "?"; /* find the corresponding constant */
    for (const name in ROT.KEYS) {
      if ((ROT.KEYS as any)[name] === code && name.indexOf("VK_") === 0) {
        vk = name;
      }
    }
    displayFromGameFile.draw(
      tuvix.location.x,
      tuvix.location.y,
      ".",
      null,
      null
    );
    if (vk === "VK_UP") {
      if (
        mapFromGameFile[`${tuvix.location.x},${tuvix.location.y - 1}`] !== 1
      ) {
        tuvix.location.y--;
      }
    }
    if (vk === "VK_DOWN") {
      if (
        mapFromGameFile[`${tuvix.location.x},${tuvix.location.y + 1}`] !== 1
      ) {
        tuvix.location.y++;
      }
    }
    if (vk === "VK_RIGHT") {
      if (
        mapFromGameFile[`${tuvix.location.x + 1},${tuvix.location.y}`] !== 1
      ) {
        tuvix.location.x++;
      }
    }
    if (vk === "VK_LEFT") {
      if (
        mapFromGameFile[`${tuvix.location.x - 1},${tuvix.location.y}`] !== 1
      ) {
        tuvix.location.x--;
      }
    }

    displayFromGameFile.draw(
      tuvix.location.x,
      tuvix.location.y,
      tuvix.char,
      tuvix.fgcolor,
      null
    );
  });
};
