import * as ROT from "rot-js";
import { DisplayOptions } from "rot-js/lib/display/types";
import { MAP_HEIGHT, MAP_WIDTH } from "./constants";

const displayConfig: Partial<DisplayOptions> = {
    width: MAP_WIDTH + 1,
    height: MAP_HEIGHT + 1,
    fontSize: 40,
    bg: "#333",
    fg: "#ccc"
  };

 
export const display = new ROT.Display(displayConfig);
export const gameCanvas = display.getContainer();