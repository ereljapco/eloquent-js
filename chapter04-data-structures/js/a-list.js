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
    if (!list) {
      list = {
        value: arr[i],
        rest: null,
      };
    }

    list = {
      value: arr[i],
      rest: list,
    };
  }

  return list;
}

function listToArray(list, arr) {
  if (!list.rest) {
    return;
  }

  if (!arr) {
    arr = [];
  }

  arr.push(list.value);
  listToArray(list.rest, arr);

  return arr;
}
