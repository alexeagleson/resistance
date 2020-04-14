export interface GameLocation {
  x: number;
  y: number;
}

export interface GameObject {
  name: string;
  char: string[] | string;
  fgcolor: string;
  location: GameLocation;
  blocks: boolean;
  destroyable: boolean;
  item: boolean;
  takesTurn: boolean | undefined;
}
