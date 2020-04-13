// export const dogThing = 2;
import * as ROT from "rot-js";
import { MAP_HEIGHT, MAP_WIDTH } from "./constants";
export interface GameMap {
  [key: string]: number;
}

export const voyager = {} as GameMap;

const options = { roomDugPercentage: 0.5 };
const map = new ROT.Map.Uniform(MAP_WIDTH, MAP_HEIGHT, options);
const createMyOwnMap = (x: number, y: number, isAWall: number) => {
  // SHOW(ROT.Util.format("Value %s generated at [%s,%s]", value, x, y)); this is a fancy console log
  voyager[`${x},${y}`] = isAWall;
};

map.create(createMyOwnMap);
