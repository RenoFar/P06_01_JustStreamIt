const showTilesRight = (cat) => {
    let selectCat = cat + ' .tiles__tile'
    let tiles = document.querySelectorAll(selectCat);
    for(i = 0; i < tiles.length; i++){
        if(i < 3){
            tiles[i].classList.add("slideDown");
            // tiles[i].style.display = "none";
        }
        if(i > 3){
            tiles[i].classList.remove("slideDown");
            // tiles[i].style.display = "flex";
        }
    }
}

const showTilesLeft = (cat) => {
    let selectCat = cat + ' .tiles__tile'
    let tiles = document.querySelectorAll(selectCat);
    for(i = 0; i < tiles.length; i++){
        if(i < 3){
            tiles[i].classList.remove("slideDown");
            // tiles[i].style.display = "flex";
        }
        if(i > 3){
            tiles[i].classList.add("slideDown");
            // tiles[i].style.display = "none";
        }
    }
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("Play");
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }