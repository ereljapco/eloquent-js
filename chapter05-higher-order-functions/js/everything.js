// Original solution

console.log(every([1, 3, 5], (n) => n < 10));
console.log(every([2, 4, 16], (n) => n < 10));
console.log(every([], (n) => n < 10));

// Using a loop

function every(array, test) {
  for (let element of array) {
    if (!test(element)) {
      return false;
    }
  }

  return true;
}
