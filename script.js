const container = document.getElementById('container');

var rowInput = document.getElementById("row")
var columnInput = document.getElementById("column");
const defaultSize = "16";
var rows = defaultSize;
var cols = defaultSize;

function setGrid(rows, cols) {
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

setGrid(rows, cols);

//improves dragging action in container div
var mouseDown = false
container.onmousedown = () => (mouseDown = true)
container.onmouseup = () => (mouseDown = false)

function changeColor(e){
  if (e.type === 'mouseover' && !mouseDown){
    return
  }
  e.target.style.backgroundColor = "black"
}

rowInput.onchange = () => {
  rows = rowInput.value;
  resetGrid()
}
columnInput.onchange = () => {
  cols = rowInput.value;
  resetGrid()
}

function resetGrid(){
  clearGrid()
  setGrid(rows,cols)
}

function clearGrid(){
  container.innerHTML = '';
}