export interface House {
  name: string;
  planets: Array<string> | string;
}

export interface HouseWithID extends House {
  id: number;
}

export type filterHouse = (house: House) => boolean;
