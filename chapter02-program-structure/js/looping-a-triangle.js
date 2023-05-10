let sectionContainer = document.querySelector('#sectionContainer');
let triangleForm = document.querySelector('#triangleForm');

triangleForm.addEventListener('submit', (e) => {
  e.preventDefault();

  e.target.classList.remove('form--error');

  let triangleSection = document.querySelector('.section--triangle');
  let rowCount = document.querySelector('#rowCount').value;

  if (triangleSection) {
    sectionContainer.removeChild(triangleSection);
  }

  if (!rowCount) {
    e.target.classList.add('form--error');

    return;
  }

  triangleSection = document.createElement('section');

  triangleSection.classList.add('section');
  triangleSection.classList.add('section--triangle');

  sectionContainer.appendChild(triangleSection);

  for (let i = 0; i <= rowCount; i++) {
    const row = document.createElement('div');
    row.classList.add('triangle__row');

    for (let j = 0; j < i; j++) {
      const hashContainer = document.createElement('span');

      hashContainer.classList.add('hash');
      hashContainer.innerHTML = '#';
      row.appendChild(hashContainer);
    }

    triangleSection.appendChild(row);
  }
});

// Original solution

const NUM_OF_CALLS = 7;

for (let hash = '#'; hash.length <= NUM_OF_CALLS; hash += '#') {
  console.log(hash);
}
