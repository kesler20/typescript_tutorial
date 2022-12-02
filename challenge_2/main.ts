// let myForEach be a generic
// this generic will take an array of items of type T
// and a callback which takes an item of type T
// and returns a void

function myForEach<T>(items: T[], forEachFunc: (v: T) => void): void {
  // apply the reduce method on the generic array of items of type T
  // take an accumulator a and a value v
  // call the forEachFunc with that value (a callback which will be called for each value in the array)
  // return undefined
  // start with undefined as your starting point
  items.reduce((a, v) => {
    forEachFunc(v);
    return undefined;
  }, undefined);
}

function myMap<T, K>(items: T[], mapFunc: (v: T) => K): K[] {
  return items.reduce((a, v) => [...a, mapFunc(v)], [] as K[]);
}

myForEach(["a", "b", "c"], (v) => console.log(v));

console.log(myMap(["0","1","2"],(str) => parseInt(str)))