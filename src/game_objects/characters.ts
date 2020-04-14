import { GameObject } from "./items";
import { GameMap } from "./maps";
import {
  findEmptyTile,
  convertStringCoordsToNumArray,
  convertStringCoordsToLocation
} from "./utility";

export const tuvix: GameObject = {
  name: "Tuvix",
  char: ["V", "T"],
  fgcolor: "yellow",
  location: { x: 0, y: 0 },
  blocks: true,
  destroyable: true,
  item: false,
  takesTurn: true
};

const janeway: GameObject = {
  name: "Janeway",
  char: "J",
  fgcolor: "red",
  location: { x: 0, y: 0 },
  blocks: true,
  destroyable: true,
  item: false,
  takesTurn: true
};

const plantFriend: GameObject = {
  name: "Plant",
  char: "p",
  fgcolor: "green",
  location: { x: 0, y: 0 },
  blocks: true,
  destroyable: true,
  item: false,
  takesTurn: false
};

const wateringCan: GameObject = {
  name: "Watering Can",
  char: "w",
  fgcolor: "brown",
  location: { x: 0, y: 0 },
  blocks: true,
  destroyable: true,
  item: false,
  takesTurn: false
};

const harryKim: GameObject = {
    name: "Harry Kim",
    char: "H",
    fgcolor: "white",
    location: { x: 0, y: 0 },
    blocks: true,
    destroyable: true,
    item: false,
    takesTurn: false
  };

export const placeGameObjectOnMap = (
  ob: GameObject,
  copyOfMap: GameMap
): void => {
  const locationOfOb = convertStringCoordsToLocation(findEmptyTile(copyOfMap));
  ob.location = locationOfOb;
};

export const allGameObjects = [tuvix, janeway, harryKim, plantFriend, wateringCan];
