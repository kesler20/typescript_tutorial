// function over loading

// optional parameters can be set when
const foo = (arg?: any) => {
  console.log(arg, "this has the question mark since it could be null");
};

interface Coordinate {
  x: number;
  y: number;
}

// the optional arg2 is passed so that users can enter only one argument
const parseCoordinate = (arg1: unknown, arg2?: unknown): Coordinate => {
  let coord: Coordinate = {
    x: 0,
    y: 0,
  };
  // cast to coord object the right type depending on the user input
  if (typeof arg1 === "object") {
    // this syntax is used to spread arg1 as a Coordinate type
    // this is because if arg1 is an object it should implement the Coordinate interface
    coord = {
      ...(arg1 as Coordinate),
    };
  } else if (typeof arg1 === "string") {
    // if arg 1 is a string this cna be a casted to the string type
    // and converted from a type of any to being one of the two instance
    // either "x" or "y"
    (arg1 as string).split(",").forEach((str) => {
      const [key, value] = str.split(":");
      coord[key as "x" | "y"] = parseInt(value, 10);
    });
  } else {
    // if two arguments (numbers) are passed this can be our coordinate
    coord = {
      x: arg1 as number,
      y: arg2 as number,
    };
  }
  return coord;
};

// this will allow you to use the same function in different ways
console.log(parseCoordinate(10, 20));
console.log(parseCoordinate({ x: 10, y: 20 }));
