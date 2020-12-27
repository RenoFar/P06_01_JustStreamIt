const showTilesRight = (cat) => {
    console.log("showTilesRight");
    let tiles = document.querySelectorAll(cat + ' div.tiles-tile');
    for(i = 0; i < tiles.length; i++){
        if(i < 3){
            tiles[i].style.display = "none";
        }
        if(i > 4){
            tiles[i].style.display = "flex";
        }
    }
}

const showTilesLeft = (cat) => {
    console.log("showTilesLeft");
    let tiles = document.querySelectorAll(cat + ' div.tiles-tile');
    for(i = 0; i < tiles.length; i++){
        if(i < 3){
            tiles[i].style.display = "flex";
        }
        if(i > 4){
            tiles[i].style.display = "none";
        }
    }
}

// for (i=0; i<4; i++) {
//     document.getElementsByClassName("arrow--left")[i]
//     .addEventListener("click", function(event){
//         event.preventDefault();
//         showTilesLeft(i);
//     });
//     document.getElementsByClassName("arrow--right")[i]
//     .addEventListener("click", function(event){
//         event.preventDefault();
//         showTilesRight(i);
//     });
// }

// const showTilesLeft = (i) => {
//     let tilesLeft = document
//     .getElementsByClassName("section--category")[i]
//     .getElementsByClassName("imageModal")[6];
//     tilesLeft.style.width = "0%";
// };

// const showTilesRight = (i) => {
//     let tilesRight = document
//     .getElementsByClassName("section--category")[i]
//     .getElementsByClassName("imageModal")[6];
//     tilesRight.style.width = "100%";


// let btnLeft = document.getElementsByClassName("arrow--left");

// let btnright = document.getElementsByClassName("arrow--right");

    // const showTilesright = () => {
//     btnright.addEventListener("click", function(event){
//         event.preventDefault();
//         console.log("ok");
//     } );
// }