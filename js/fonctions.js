// const showTilesRight = (cat) => {
//     let selectCat = cat + ' .tiles__tile'
//     let tiles = document.querySelectorAll(selectCat);
//     for(i = 0; i < tiles.length; i++){
//         if(i < 3){
//             tiles[i].classList.add("slideDown");
//             // tiles[i].style.display = "none";
//         }
//         if(i > 3){
//             tiles[i].classList.remove("slideDown");
//             // tiles[i].style.display = "flex";
//         }
//     }
// }

// const showTilesLeft = (cat) => {
//     let selectCat = cat + ' .tiles__tile'
//     let tiles = document.querySelectorAll(selectCat);
//     for(i = 0; i < tiles.length; i++){
//         if(i < 3){
//             tiles[i].classList.remove("slideDown");
//             // tiles[i].style.display = "flex";
//         }
//         if(i > 3){
//             tiles[i].classList.add("slideDown");
//             // tiles[i].style.display = "none";
//         }
//     }
// }

//     // Get the modal
//     var modal = document.getElementById("myModal");

//     // Get the buttons that opens the modal
//     var btn = document.getElementsByClassName("imageModal");

//     // Get the details section of the modal
//     var modalDetails = document.getElementsByClassName("modal__content--details");

//     // When the user clicks on <span> (x), close the modal
//     var span = document.getElementsByClassName("close")[0];
//     span.onclick = function() {
//         modal.style.display = "none";
//     }

//     // When the user clicks anywhere outside of the modal, close it
//     window.onclick = function(event) {
//         if (event.target == modal) {
//         modal.style.display = "none";
//         }
//     }
  
//     // fill all the modal   
//     for (let b=0; b<btn.length; b++){
//         btn[b].onclick = function() {
//             modal.style.display = "flex";
//             // modalDetails[0].style.backgroundImage = `url(${resultApi[b].image_url})`;
//             // modalDetails[1]
//             // modalDetails[2]
//             // modalDetails[3]
//             // modalDetails[4]
//             // modalDetails[5]
//             // modalDetails[6]
//             // modalDetails[7]
//             // modalDetails[8]
//             // modalDetails[9]
//             // modalDetails[10]
//             // modalDetails[11]
//         }
//     }
