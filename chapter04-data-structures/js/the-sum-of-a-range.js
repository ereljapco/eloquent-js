function range(start, end, step) {
  let arr = [];

  if (!step) {
    step = 1;
  }

  if (start < end) {
    for (let i = start; i <= end; i += step) {
      arr.push(i);
    }
  } else {
    for (let i = start; i >= end; i += step) {
      arr.push(i);
    }
  }

  return arr;
}

function sum(arr) {
  let sum = 0;

  for (let num of arr) {
    sum += num;
  }

  return sum;
}

console.log(`Output for sum(range(1, 10)): ${sum(range(1, 10))}`);
console.log(`Output for sum(range(1, 10, 2)): ${sum(range(1, 10, 2))}`);
console.log(`Output for sum(range(5, 2, -1)): ${sum(range(5, 2, -1))}`);
