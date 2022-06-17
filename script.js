const container = document.getElementById('container');

var rowInput = document.getElementById("row")
var columnInput = document.getElementById("column");
const defaultSize = "16";
var rows = defaultSize;
var cols = defaultSize;

// console.log(rows)

rows = rowInput.value;
// console.log(rowInput.value)

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


rowInput.onchange = (e) => console.log(e.target.value)

function resetGrid(e){
  clearGrid()
  setGrid(e)
}

function clearGrid(){
  container.innerHTML = '';
}