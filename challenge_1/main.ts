import { filterHouse, House, HouseWithID } from "./interface";
import houses from "./houses.json";

/**
 * takes the houses of the user as a string or json and returns the house with id
 * @param houses
 * @param filterHouse
 * @returns
 */
const findHouses = (
  houses: string | House[],
  filterHouse?: filterHouse
): HouseWithID => {
  let housesWithID: Array<HouseWithID> = [];
  if (typeof houses === "string") {
    const parsedHouses: Array<House> = JSON.parse(houses);
    parsedHouses.forEach((house, id) => {
      housesWithID.push({ ...house, id });
    });
  } else {
    houses.forEach((house, id) => {
      housesWithID.push({ ...house, id });
    });
  }
  if (filterHouse) {
    return housesWithID.filter((houseWithID) => filterHouse(houseWithID))[0];
  } else {
    return housesWithID[0];
  }
};

console.log(
  findHouses(JSON.stringify(houses), ({ name }) => name === "Atreides")
);
console.log(findHouses(houses, ({ name }) => name === "Harkonnen"));
