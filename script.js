const container = document.getElementById('container');

var rowInput = document.getElementById("row")
var columnInput = document.getElementById("column");
const defaultSize = "16";
var rows = defaultSize;
var cols = defaultSize;
var colorMode = "black";

function setGrid(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (i = 0; i < (rows * cols); i++) {
    let cell = document.createElement('div');
    cell.classList.add('grid-item');
    cell.addEventListener('mouseover', paint)
    cell.addEventListener('mousedown', paint)

    container.appendChild(cell)
  };
};

setGrid(rows, cols);

//improves dragging action in container div
var mouseDown = false
container.onmousedown = () => (mouseDown = true)
container.onmouseup = () => (mouseDown = false)

function paint(e){
  if(colorMode==="black"){
    if (e.type === 'mouseover' && !mouseDown){
      return
    }
    e.target.style.backgroundColor = "black"
  }
  if(colorMode=="red"){
    e.target.style.backgroundColor = "red"
  }
}

function changeColor(color){
  colorMode = color;
  console.log(color)
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

