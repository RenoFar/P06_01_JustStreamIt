const urlRequest = [
    ['http://localhost:8000/api/v1/titles/?sort_by=-imdb_score',
    'http://localhost:8000/api/v1/titles/?sort_by=-imdb_score&page=2'],
    ['http://localhost:8000/api/v1/titles/?sort_by=-imdb_score&genre=Action',
    'http://localhost:8000/api/v1/titles/?sort_by=-imdb_score&genre=Action&page=2'],
    ['http://localhost:8000/api/v1/titles/?sort_by=-imdb_score&genre=Animation',
    'http://localhost:8000/api/v1/titles/?sort_by=-imdb_score&genre=Animation&page=2'],
    ['http://localhost:8000/api/v1/titles/?sort_by=-imdb_score&genre=History',
    'http://localhost:8000/api/v1/titles/?sort_by=-imdb_score&genre=History&page=2']
];

let resultApi = [];

function fillModal(){
    console.log("fillModal ");
};

function requestApi(urlRequest, urlNum, elemQty){
    return new Promise(resolve => {
        fetch(urlRequest)
        .then(response => response.json())
        // .then(function(response) {return response.json()})
        .then(jsonResponse => {
            console.log("jsonResponse.results "  + jsonResponse.results);
            for (let i=0; i<elemQty; i++){
                resultApi.push(jsonResponse.results[i]);
                console.log("resultApi " + urlNum + " " + resultApi[urlNum]);
            }
            resolve();
        });
    })
};

async function main(){
    for(let i=0; i<urlRequest.length; i++){ 
        await requestApi(urlRequest[i][0], i, 5);
        await requestApi(urlRequest[i][1], i, 2);
        console.log("requestApi " + i + " done");
    }
    console.log("resultApi.length " + resultApi.length);
    fillModal();

};

main();












// const showTilesRight = (cat) => {
//     /* click on the right arrow */
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
//     /* click on the left arrow */
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

// const urlRequest = [
//     ['http://localhost:8000/api/v1/titles/?sort_by=-imdb_score',
//     'http://localhost:8000/api/v1/titles/?sort_by=-imdb_score&page=2'],
//     ['http://localhost:8000/api/v1/titles/?sort_by=-imdb_score&genre=Action',
//     'http://localhost:8000/api/v1/titles/?sort_by=-imdb_score&genre=Action&page=2'],
//     ['http://localhost:8000/api/v1/titles/?sort_by=-imdb_score&genre=Animation',
//     'http://localhost:8000/api/v1/titles/?sort_by=-imdb_score&genre=Animation&page=2'],
//     ['http://localhost:8000/api/v1/titles/?sort_by=-imdb_score&genre=History',
//     'http://localhost:8000/api/v1/titles/?sort_by=-imdb_score&genre=History&page=2']
// ];

// const categoryList = [
//     "#bestRating .imageModal",
//     "#categoryOne .imageModal",
//     "#categoryTwo .imageModal",
//     "#categoryThree .imageModal",
//     "#bestMovie .section__rightHero",
// ];

// let resultApi = [];

// function fillModal() {
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
//             modalDetails[0].style.backgroundImage = `url(${resultApi[b].image_url})`;
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

//     // fill the best movie section
//     let imageCategory = document.querySelectorAll("#bestMovie .section__rightHero");
//     imageCategory[0].style.backgroundImage = `url(${resultApi[0].image_url})`;
//     document.getElementById("titleHero").innerHTML = resultApi[0].title;
//     document.getElementById("textHero").innerHTML = "imdb score: " + resultApi[0].imdb_score;
// };

// function requestApi(urlRequest, elementQty) {
//         fetch(urlRequest)
//             .then(response => response.json()
//             // .then(function(response) { return response.json()})
//                 .then(function(jsonResponse) {
//                     // let image = document.querySelectorAll(".imageModal");
//                     for(let i=0; i<elementQty; i++){ 
//                         return new Promise(resolve, { 
//                             resultApi.push(jsonResponse.results[i]);
//                             return resolve(i);
//                         })
//                         // image[i].style.backgroundImage = `url(${resultApi[i].image_url})`;
//                     }

//                 })
//             )
// };

// function loopApiRequest() {
//     for (let i=0; i<urlRequest.length; i++){
//         requestApi(urlRequest[i][0], 5);
//         requestApi(urlRequest[i][1], 2);
//     }
// };

// function main() {
//     loopApiRequest();
//     // .then(console.log("resultApi.length " + resultApi.length));
//     fillModal();
// };

// main();