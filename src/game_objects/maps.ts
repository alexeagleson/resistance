// export const dogThing = 2;
import * as ROT from "rot-js";
export const voyager = {} as any;

const map = new ROT.Map.Arena(30, 10);
const createMyOwnMap = (x: number, y: number, isAWall: number) => {
    // SHOW(ROT.Util.format("Value %s generated at [%s,%s]", value, x, y)); this is a fancy console log
    voyager [`${x},${y}`] = isAWall;



}

map.create(createMyOwnMap);