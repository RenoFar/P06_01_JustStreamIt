const showTilesRight = (cat) => {
    /* click on the right arrow */
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
    /* click on the left arrow */
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

function createModal(){
    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the buttons that opens the modal
    var btn = document.getElementsByClassName("imageModal");

    // Get the details section of the modal
    var modalDetails = document.getElementsByClassName("modal__content--details");

    // When the user clicks on <span> (x), close the modal
    var span = document.getElementsByClassName("close")[0];
    span.onclick = function(){
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event){
        if (event.target == modal){
        modal.style.display = "none";
        }
    }
  
    // fill all the modal   
    for (let b=1; b<btn.length; b++){
        btn[b].onclick = function(){
            modal.style.display = "flex";
            modalDetails[0].classList.add("section");
            modalDetails[0].style.backgroundImage = `url(${resultApi[b-1].image_url})`;
            // modalDetails[1]
            // modalDetails[2]
            // modalDetails[3]
            // modalDetails[4]
            // modalDetails[5]
            // modalDetails[6]
            // modalDetails[7]
            // modalDetails[8]
            // modalDetails[9]
            // modalDetails[10]
            // modalDetails[11]
        }
    }
};

function fillImage(){
    // fill the best movie section
    document.getElementById("titleHero").innerHTML = resultApi[0].title;
    document.getElementById("textHero").innerHTML = "imdb score: " + resultApi[0].imdb_score;

    //fill all the categories
    let imageCategory = document.querySelectorAll(".imageModal");
    imageCategory[0].style.backgroundImage = `url(${resultApi[0].image_url})`;
    for (let i=0; i<imageCategory.length-1; i++){
        imageCategory[i+1].style.backgroundImage = `url(${resultApi[i].image_url})`;
    }
};

function requestApi(urlRequest, elemQty){
    return new Promise(resolve => {
        fetch(urlRequest)
        .then(response => response.json())
        .then(jsonResponse => {
            for (let i=0; i<elemQty; i++){
                resultApi.push(jsonResponse.results[i]);
            }
            resolve();
        });
    })
};

async function main(){
    for(let i=0; i<urlRequest.length; i++){ 
        await requestApi(urlRequest[i][0], 5);
        await requestApi(urlRequest[i][1], 2);
    }
    fillImage();
    createModal();

};

main();
