import { GameMap } from "./maps";
import { MAP_WIDTH, MAP_HEIGHT } from "./constants";
import { GameLocation } from "./items";
import { allGameObjects } from "./characters";
import { digThang} from "./sandbox_practice"

console.log (digThang);

export const findEmptyTile = (map: GameMap): string => {
  const startX = Math.floor(Math.random() * MAP_WIDTH);
  const startY = Math.floor(Math.random() * MAP_HEIGHT);
  if (isAWall(map, startX, startY) === true) {
    return findEmptyTile(map);
  }
  return `${startX},${startY}`;
};

export const isAWall = (map: GameMap, x: number, y: number): boolean => {
  if (map[`${x},${y}`] === 1) {
    return true;
  }
  return false;
};

export const isBlockedByObject = (x: number, y: number): boolean => {
  if (
    allGameObjects.find((objectInFront) => {
      return (
        objectInFront.blocks === true &&
        objectInFront.location.x === x &&
        objectInFront.location.y === y
      );
    })
  ) {
    return true;
  }
  return false;
};

export const convertStringCoordsToNumArray = (stringXY: string): number[] => {
  const stringCoords = stringXY.split(",");
  return [Number(stringCoords[0]), Number(stringCoords[1])];
};

export const convertStringCoordsToLocation = (
  stringXY: string
): GameLocation => {
  const stringCoords = stringXY.split(",");
  return { x: Number(stringCoords[0]), y: Number(stringCoords[1]) };
};


