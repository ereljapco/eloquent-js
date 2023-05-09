function countBs(string) {
  let B_count = 0;

  for (let index = 0; index < string.length; index++) {
    if (string[index] == 'B') {
      B_count++;
    }
  }

  return B_count;
}

function countChar(string, char) {
  let char_count = 0;

  for (let index = 0; index < string.length; index++) {
    if (string[index] == char) {
      char_count++;
    }
  }

  return char_count;
}

console.log(countBs('BaBabbbBaBBB'));
console.log(countChar('BaNaNA', 'a'));
