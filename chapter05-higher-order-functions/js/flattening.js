// Original solution

let arrays = [[1, 2, 3], [4, 5], [6]];

let flattenedArrays = arrays.reduce(
  (accumulator, currentValue) => accumulator.concat(currentValue),
  []
);

console.log(flattenedArrays);
