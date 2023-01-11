// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("navMenuButton");

// Get the <span> element that closes the modal
var closeButton = document.getElementsByClassName("close")[0];

var menuButtons = document.getElementsByClassName("menuButton");

for(var i =0; i<menuButtons.length;i++){
    menuButtons[i].addEventListener("click",close,false);
}
function wooshDown(){
  let wooshDown = new Audio("sound/wooshDown.mp3")
  wooshDown.play();
}
function wooshUp(){
  let wooshUp = new Audio("sound/wooshUp.mp3");
  wooshUp.play();
}
function close(){
    modal.style.display = "none";
}
// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
closeButton.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

