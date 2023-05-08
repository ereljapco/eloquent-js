const SIZE = 8;
let board = '';

for (let i = 1; i <= SIZE; i++) {
  if (i % 2 === 0) {
    for (let j = 1; j <= SIZE; j++) {
      if (j % 2 === 0) {
        board += ' ';
      } else {
        board += '#';
      }
    }
  } else {
    for (let j = 1; j <= SIZE; j++) {
      if (j % 2 === 0) {
        board += '#';
      } else {
        board += ' ';
      }
    }
  }

  board += '\n';
}

console.log(board);
