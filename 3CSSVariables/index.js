var myImg = document.getElementById('myImg');
var selectedColor = document.getElementById('selectedColor').value;
var borderWidth = document.getElementById('borderWidth').value;
var imgBlur = `${document.getElementById('imgBlur').value}px`;
myImg.style.border = `${borderWidth}px solid ${selectedColor}`;

function changeBorderColor() {
  selectedColor = document.getElementById('selectedColor').value;
  myImg.style.border = `${borderWidth}px solid ${selectedColor}`;
}
function changeBorderSpacing() {
  borderWidth = document.getElementById('borderWidth').value;
  myImg.style.border = `${borderWidth}px solid ${selectedColor}`;
}
function changeImgBlur() {
  imgBlur = `${document.getElementById('imgBlur').value}px`;
  myImg.style.filter = `blur(${imgBlur})`;
}
