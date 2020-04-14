import * as ROT from "rot-js";
import { DisplayOptions } from "rot-js/lib/display/types";
import { MAP_HEIGHT, MAP_WIDTH } from "./constants";
import { GameMap } from "./maps";
import { convertStringCoordsToNumArray } from "./utility";

const displayConfig: Partial<DisplayOptions> = {
  width: MAP_WIDTH + 1,
  height: MAP_HEIGHT + 1,
  fontSize: 40,
  bg: "#333",
  fg: "#ccc"
};

export const display = new ROT.Display(displayConfig);
export const gameCanvas = display.getContainer();

/**
 * Draws all the walls and floors of the game map
 * @param map A copy of the game map
 * @returns Nothing
 */
export const drawMap = (map: GameMap): void => {
  Object.keys(map).forEach(coords => {
    let displayCharacter = ".";
    const numberCoords = convertStringCoordsToNumArray(coords);
    if (map[coords] === 1) {
      displayCharacter = "$";
    }

    display.draw(
      numberCoords[0],
      numberCoords[1],
      displayCharacter,
      null,
      null
    );
  });
};
