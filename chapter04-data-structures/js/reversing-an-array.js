// Original solution

let arr = ['apple', 'banana', 'cherry', 'date', 'eggplant'];

console.log(`Output for reverseArray([${arr}]): ${reverseArray(arr)}`);
console.log(`Output for reverseArrayInPlace([${arr}]): ${reverseArray(arr)}`);

function reverseArray(arr) {
  let newArr = [];

  for (let element of arr) {
    newArr.unshift(element);
  }

  return newArr;
}

function reverseArrayInPlace(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr.splice(i, 0, arr.pop());
  }

  return arr;
}
