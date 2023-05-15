// Original solution
const SIZE = 8;
let board = '';

for (let i = 1; i <= SIZE; i++) {
  for (let j = 1; j <= SIZE; j++) {
    if (i % 2 === 0) {
      if (j % 2 === 0) {
        board += ' ';
      } else {
        board += '#';
      }
    } else {
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

// Dynamic visualization
const sectionContainer = document.querySelector('#sectionContainer');
const gridForm = document.querySelector('#gridForm');

gridForm.addEventListener('submit', (e) => {
  e.preventDefault();

  let gridSection = document.querySelector('.section--grid');
  const gridSize = document.querySelector('#gridSize').value;

  e.target.classList.remove('form--error');

  if (!gridSize) {
    e.target.classList.add('form--error');

    return;
  }

  if (gridSection) {
    sectionContainer.removeChild(gridSection);
  }

  gridSection = document.createElement('section');

  gridSection.classList.add('section');
  gridSection.classList.add('section--grid');

  sectionContainer.appendChild(gridSection);

  for (let i = 1; i <= gridSize; i++) {
    let gridRow = document.createElement('div');

    gridRow.classList.add('grid__row');

    for (let j = 1; j <= gridSize; j++) {
      let gridUnit = document.createElement('span');

      gridUnit.classList.add('grid-unit');

      if (j % 2 === 0) {
        gridUnit.innerHTML = ' ';
      } else {
        gridUnit.innerHTML = '#';
      }

      gridRow.appendChild(gridUnit);

      if (i % 2 === 0) {
        if (j % 2 === 0) {
          gridUnit.innerHTML = ' ';
        } else {
          gridUnit.innerHTML = '#';
        }

        gridRow.appendChild(gridUnit);
      } else {
        if (j % 2 === 0) {
          gridUnit.innerHTML = '#';
        } else {
          gridUnit.innerHTML = '&nbsp;';
        }

        gridRow.appendChild(gridUnit);
      }
    }

    gridSection.appendChild(gridRow);
  }
});
