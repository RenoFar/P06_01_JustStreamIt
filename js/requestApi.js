// const urlRequest = [
//     'http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=&genre_contains=&sort_by=-imdb_score&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=&genre_contains=&sort_by=-imdb_score&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=',
//     'http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=Action&genre_contains=&sort_by=-imdb_score&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=',
//     'http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=Animation&genre_contains=&sort_by=-imdb_score&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=',
//     'http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=History&genre_contains=&sort_by=-imdb_score&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains='
// ];

// let resultApi = [
//     [],
//     [],
//     [],
//     [],
// ];

// const requestApiCategory = (urlRequest, index, elementQty) => {
//     return new Promise((resolve, reject) =>{
//         resolve(
//             fetch(urlRequest)
//             .then(response => response.json())
//             .then(function(response){
//                 console.log("elementQty " + elementQty)
//                 for (let i=0; i<elementQty; i++){
//                     resultApi[index].push(response.results[i]);
//                     console.log("index & i: " + index + " " + i);
//                     console.log("resultApi[index][i].image_url : " 
//                     + resultApi[index][i].image_url);
//                 }             
//             })
//         );
//     });
// };

// const fillImageCategory = (category) => {
//     let imageCategory = document.querySelectorAll(category);
//     let imageNumber = 6;
//     if (category == "#bestMovie div.section__rightHero") {
//         imageNumber = 0;
//     }
//     console.log("imageNumber " + imageNumber);
//     while (imageNumber>=0){
//         imageCategory[imageNumber].style.backgroundImage = `url(${resultApi[imageNumber].image_url})`; 
//         imageNumber--;
//     };
// };

// const loopApiRequest = (index) => {
//     console.log("index " + index);
//     return new Promise((resolve, reject) =>{
//         resolve(
//             requestApiCategory(urlRequest[index], index, 5)
//             .then(function(response){
//             requestApiCategory(urlRequest[index] + "&page=2", index, 2);
//             })
//         )
//     })
// };

// const main = () => {
//     for (let i=0; i<urlRequest.length; i++){
//         loopApiRequest(i);
//         };
//     fillImageCategory("#bestMovie div.section__rightHero")
// };

// main();

let resultApiBestMovies = [];
let resultApiFirstCat = [];
let resultApiSecondCat = [];
let resultApiThirdCat = [];

fetch("http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=&genre_contains=&sort_by=-imdb_score&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=&genre_contains=&sort_by=-imdb_score&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=")
.then(function(response){
    return response.json();
})
.then(function(response){
    for (let i=0; i<5; i++){
        resultApiBestMovies.push(response.results[i]);
    }
    console.log("resultApiBestMovies" + resultApiBestMovies);
    return;
})
.then(function(){
    fetch("http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=&genre_contains=&sort_by=-imdb_score&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=&genre_contains=&sort_by=-imdb_score&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=&page=2")
    .then(function(response){
        return response.json();
    })
    .then(function(response){
        for (let i=0; i<2; i++){
            resultApiBestMovies.push(response.results[i]);
        }
        console.log("resultApiBestMovies" + resultApiBestMovies);
        fillImage();
        return;
    })
});

const fillImage = () => {
    let imageBestMovie = document.getElementsByClassName("section__rightHero");
    imageBestMovie[0].style.backgroundImage = `url(${resultApiBestMovies[0].image_url})`; 
    let imageBestRating = document.querySelectorAll("#bestRating div.imageModal");
    console.log("imageBestRating" + imageBestRating);
    let i = 0;
    while (i<7){
        imageBestRating[i].style.backgroundImage = `url(${resultApiBestMovies[i].image_url})`; 
        i++;
    };
};