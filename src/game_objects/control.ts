import * as ROT from "rot-js";
import { GameMap } from "./maps";
import {
  findEmptyTile,
  convertStringCoordsToNumArray,
  isAWall,
  isBlockedByObject,
} from "./utility";
import { TUVIX_ICON } from "./constants";
import { tuvix } from "./characters";

// export const drawTuvix = (displayFromGameFile: ROT.Display): void => {
//   displayFromGameFile.draw(x, y, TUVIX_ICON, null, null);
// };

export const createController = (
  displayFromGameFile: ROT.Display,
  map: GameMap
) => {
  window.addEventListener("keydown", (e) => {
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

    const up = {x: tuvix.location.x, y: tuvix.location.y -1 }
    const down = {x: tuvix.location.x, y: tuvix.location.y +1}
    const right = {x: tuvix.location.x +1, y: tuvix.location.y}
    const left = {x: tuvix.location.x -1, y: tuvix.location.y}

    if (vk === "VK_UP") {
      if (!isAWall(map, up.x, up.y) && !isBlockedByObject(up.x, up.y)) {
        tuvix.location.y--;
      }
    }
    if (vk === "VK_DOWN") {
      if (!isAWall(map, down.x, down.y) && !isBlockedByObject(down.x, down.y)) {
        tuvix.location.y++;
      }
    }
    if (vk === "VK_RIGHT") {
      if (!isAWall(map, right.x, right.y) && !isBlockedByObject(right.x, right.y)) {
        tuvix.location.x++;
      }
    }
    if (vk === "VK_LEFT") {
      if (!isAWall(map, left.x, left.y) && !isBlockedByObject(left.x, left.y)) {
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
