// Original Solution
let obj = { here: { is: 'an' }, object: 2 };

console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, { here: 1, object: 2 }));
console.log(deepEqual(obj, { here: { is: 'an' }, object: 2 }));

function deepEqual(value1, value2) {
  if (typeof value1 != typeof value2) {
    return false;
  }

  if (typeof value1 != 'object') {
    if (value1 == value2) {
      return true;
    }

    return false;
  }

  if (value1 != null && value2 != null) {
    const value1Keys = Object.keys(value1);
    const value2Keys = Object.keys(value2);

    if (value1Keys.length != value2Keys.length) {
      return false;
    }

    let counter = 0;

    for (let i = 0; i < value1Keys.length; i++) {
      if (deepEqual(value1[value1Keys[i]], value2[value2Keys[i]]) == true) {
        counter++;
      }
    }

    if (counter == value1Keys.length) {
      return true;
    }

    return false;
  } else {
    return false;
  }
}
