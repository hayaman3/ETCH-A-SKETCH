const container = document.getElementById('container');
const palette = document.getElementById('palette');
const colorWheel = document.getElementById('color-wheel');
var rowInput = document.getElementById("row");
var columnInput = document.getElementById("column");
const defaultSize = "16";
var rows = defaultSize;
var cols = defaultSize;
var colorMode = "pencil";
var colorPicked = "#676767";

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
  if(colorMode=="pencil"){
    var opacity = Number(e.target.style.opacity);
    if(opacity<1){
      e.target.style.backgroundColor = "#000000";
      opacity = opacity+.1;
      e.target.style.opacity = opacity;
    }
    else{
      e.target.style.backgroundColor = "#000000";
    }
  }
  if(colorMode == "eraser"){
    e.target.style.backgroundColor = "white";
    e.target.style.opacity = "";
  }
  if(colorMode=="rainbow"){
    randomColor = 'hsl(' + (Math.random() * 360) + ', 60%, 70%)'
    e.target.style.opacity = ".5";
    e.target.style.backgroundColor = randomColor;
  }
  if(colorMode=="colorPickedMode"){
    e.target.style.opacity = "1";
    e.target.style.backgroundColor = colorPicked;
  }
}


function changeColor(mode){
  if(mode=="rainbow") {
    colorMode = mode;
  }
  else if(mode=="pencil") {
    colorMode = mode;
  }
  else if(mode=="eraser") {
    colorMode = mode;
  }
  else {
    colorMode = "colorPickedMode";
    colorPicked = mode;
    palette.style.color = mode;
  }
}

function paletteIcon() {
  document.getElementById("paletteInput").click(); 
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