const container = document.getElementById('container');

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (i = 0; i < (rows * cols); i++) {
    let cell = document.createElement('div');
    cell.classList.add('grid-item');
    cell.addEventListener('mouseover', changeColor)
    cell.addEventListener('mousedown', changeColor)

    container.appendChild(cell)
  };
};

makeRows(16, 16);

var mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

function changeColor(e){
  if (e.type === 'mouseover' && !mouseDown) return

  e.target.style.backgroundColor = "black"
}
