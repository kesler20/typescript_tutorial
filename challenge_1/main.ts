import { House, HouseWithID } from "./interface";
import houses from "./houses.json";

const findHouses = (
  houses: string | House[],
  filterHouse: (house: House) => boolean
): HouseWithID => {
  let housesWithID: Array<HouseWithID> = [];
  if (typeof houses === "string") {
    const parsedHouses: Array<House> = JSON.parse(houses);
    parsedHouses.forEach((house, id) => {
      const { name, planets } = house;
      housesWithID.push({ name, planets, id });
    });
  } else {
    houses.forEach((house, id) => {
      const { name, planets } = house;
      housesWithID.push({ name, planets, id });
    });
  }
  return housesWithID.filter((houseWithID) => filterHouse(houseWithID))[0];
};

console.log(
  findHouses(JSON.stringify(houses), ({ name }) => name === "Atreides")
);
console.log(
  findHouses(houses, ({ name }) => name === "Harkonnen")
);
