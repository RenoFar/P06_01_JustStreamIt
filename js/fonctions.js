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
