import * as ROT from "rot-js";
import { DisplayOptions } from "rot-js/lib/display/types";

const displayConfig: Partial<DisplayOptions> = {
    width: 31,
    height: 11,
    fontSize: 40,
    bg: "grey",
    fg: "pink"
  };
  
export const display = new ROT.Display(displayConfig);
export const gameCanvas = display.getContainer();