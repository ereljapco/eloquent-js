// Original solution

let arr = [1, 2, 3];

console.log(`arr: [${arr}]`);
console.log(`Output for arrayToList(arr):`);
console.log(arrayToList(arr));
console.log(`Output for listToArray(arrayToList(arr)):`);
console.log(listToArray(arrayToList(arr)));

function arrayToList(arr) {
  let list = null;

  for (let i = arr.length - 1; i >= 0; i--) {
    list = prepend(arr[i], list);
  }

  return list;
}

function listToArray(list, arr) {
  if (!arr) {
    arr = [];
  }

  arr.push(list.value);

  if (list.rest) {
    listToArray(list.rest, arr);
  }

  return arr;
}

function prepend(element, list) {
  return {
    value: element,
    rest: list,
  };
}
