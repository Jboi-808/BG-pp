let selectedBlock = 'grass';

function selectBlock(type) {
  selectedBlock = type;
}

const grid = document.getElementById('grid');

for (let i = 0; i < 400; i++) {
  const cell = document.createElement('div');
  cell.classList.add('cell');
  cell.addEventListener('click', () => {
    if (selectedBlock === 'delete') {
      cell.className = 'cell';
    } else {
      cell.className = 'cell ' + selectedBlock;
    }
  });
  grid.appendChild(cell);
}
