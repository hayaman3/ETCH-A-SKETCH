const container = document.getElementById('container');

var rowInput = document.getElementById("row")
var columnInput = document.getElementById("column");
const defaultSize = "16";
var rows = defaultSize;
var cols = defaultSize;
var colorMode = "shader";

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
var mouseDown = false;
container.onmousedown = () => (mouseDown = true)
container.onmouseup = () => (mouseDown = false)

function paint(e){
  if (e.type === 'mouseover' && !mouseDown){
    return
  }
  if(colorMode=="shader"){
    e.target.style.backgroundColor = "black";
    var opacity = Number(e.target.style.opacity);
    if(opacity<1){
      opacity = opacity+.1;
      e.target.style.opacity = opacity;
    }
  }
  if(colorMode=="rainbow"){
    randomColor = 'hsl(' + (Math.random() * 360) + ', 60%, 70%)'
    e.target.style.opacity = ".6";
    e.target.style.backgroundColor = randomColor;
  }
}

function changeColor(mode){
  colorMode = mode;
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