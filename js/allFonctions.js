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
let dataUrl = [];

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
            modalDetails[0].src = resultApi[b-1].image_url;
            modalDetails[1].style.font = "bold" ;
            modalDetails[1].innerHTML = resultApi[b-1].title;
            modalDetails[2].innerHTML = "Genre: " + resultApi[b-1].genres;
            modalDetails[3].innerHTML = "Date de sortie: " + resultApi[b-1].date_published;
            modalDetails[4].innerHTML = "Rated: " + resultApi[b-1].Rated;
            modalDetails[5].innerHTML = "IMDb score: " + resultApi[b-1].imdb_score;
            modalDetails[6].innerHTML = "Réalisateur: " + resultApi[b-1].directors;
            modalDetails[7].innerHTML = "Acteurs: " + resultApi[b-1].actors;
            modalDetails[8].innerHTML ="Durée: " + resultApi[b-1].duration;
            modalDetails[9].innerHTML ="Pays: " + resultApi[b-1].countries;
            modalDetails[10].innerHTML ="Box office: " /*+ resultApi[b-1].votes*/;
            modalDetails[11].innerHTML ="Résumé: " + resultApi[b-1].description;
        }
    }
};

function fillImage(){
    // fill the best movie section
    document.getElementById("titleHero").innerHTML = resultApi[0].title;
    document.getElementById("textHero").innerHTML = "Résumé: " + resultApi[0].long_description;

    //fill all the categories
    let imageCategory = document.querySelectorAll(".imageModal");
    imageCategory[0].style.backgroundImage = `url(${resultApi[0].image_url})`;
    for (let i=0; i<imageCategory.length-1; i++){
        imageCategory[i+1].style.backgroundImage = `url(${resultApi[i].image_url})`;
    }
};

function requestUrl(urlRequest){
    return new Promise(resolve => {
        fetch(urlRequest)
        .then(response => response.json())
        .then(jsonResponse => {
            resultApi.push(jsonResponse);
            resolve();
        });
    })
};

function requestApi(urlRequest, elemQty){
    return new Promise(resolve => {
        fetch(urlRequest)
        .then(response => response.json())
        .then(jsonResponse => {
            for (let i=0; i<elemQty; i++){
                dataUrl.push(jsonResponse.results[i].url);
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
    for(let i=0; i<dataUrl.length; i++){ 
        await requestUrl(dataUrl[i]);
    }
    fillImage();
    createModal();

};

main();
