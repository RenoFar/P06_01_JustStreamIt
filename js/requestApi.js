const urlRequest = [
    ['http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=&genre_contains=&sort_by=-imdb_score&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=&genre_contains=&sort_by=-imdb_score&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=',
    'http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=&genre_contains=&sort_by=-imdb_score&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=&genre_contains=&sort_by=-imdb_score&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=&page=2'],
    ['http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=Action&genre_contains=&sort_by=-imdb_score&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=',
    'http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=Action&genre_contains=&sort_by=-imdb_score&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=&page=2'],
    ['http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=Animation&genre_contains=&sort_by=-imdb_score&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=',
    'http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=Animation&genre_contains=&sort_by=-imdb_score&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=&page=2'],
    ['http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=History&genre_contains=&sort_by=-imdb_score&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=',
    'http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=History&genre_contains=&sort_by=-imdb_score&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=&page=2']
];

let resultApi = [
    [],
    [],
    [],
    [],
];

const loopApiRequest = () => {
    return new Promise(resolve => {
        let i = 0;
        while (i<urlRequest.length){
            requestApiCategory(urlRequest[i][0], i, 5)
            .then(requestApiCategory(urlRequest[i][1], i, 2));
            i++;
            if (i === (urlRequest.lengt -1)){
                resolve();
            }
        }
    }
)};

const requestApiCategory = (urlRequest, index, elementQty) => {
    return new Promise(resolve => {
        fetch(urlRequest)
        .then(response => response.json())
        .then(response => {
            for (let i=0; i<elementQty; i++){
                resultApi[index].push(response.results[i]);
                console.log("index & i: " + index + " " + i);
            };            
        })
        resolve();
    })
};

const fillImageCategory = (category) => {
    return new Promise(resolve => {
        let imageCategory = document.querySelectorAll(category);
        let imageNumber = 6;
        if (category == "#bestMovie div.section__rightHero") {
            imageNumber = 0;
        }
        console.log("imageNumber " + imageNumber);
        while (imageNumber>=0){
            imageCategory[imageNumber].style.backgroundImage = `url(${resultApi[0][imageNumber].image_url})`; /* ${resultApi[0][imageNumber].image_url} */
            imageNumber--;
        };
        resolve();
    })
};

const main=() => {
    loopApiRequest()
    .then(fillImageCategory("#bestMovie div.section__rightHero")
    )
};

main();

// let resultApiBestMovies = [];
// let resultApiFirstCat = [];
// let resultApiSecondCat = [];
// let resultApiThirdCat = [];

// fetch("http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=&genre_contains=&sort_by=-imdb_score&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=&genre_contains=&sort_by=-imdb_score&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=")
// .then(function(response){
//     return response.json();
// })
// .then(function(response){
//     for (let i=0; i<5; i++){
//         resultApiBestMovies.push(response.results[i]);
//     }
//     console.log("resultApiBestMovies" + resultApiBestMovies);
//     return;
// })
// .then(function(){
//     fetch("http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=&genre_contains=&sort_by=-imdb_score&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=&genre_contains=&sort_by=-imdb_score&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=&page=2")
//     .then(function(response){
//         return response.json();
//     })
//     .then(function(response){
//         for (let i=0; i<2; i++){
//             resultApiBestMovies.push(response.results[i]);
//         }
//         console.log("resultApiBestMovies" + resultApiBestMovies);
//         fillImage();
//         return;
//     })
// });

// const fillImage = () => {
//     let imageBestMovie = document.getElementsByClassName("section__rightHero");
//     imageBestMovie[0].style.backgroundImage = `url(${resultApiBestMovies[0].image_url})`; 
//     let imageBestRating = document.querySelectorAll("#bestRating div.imageModal");
//     console.log("imageBestRating" + imageBestRating);
//     let i = 0;
//     while (i<7){
//         imageBestRating[i].style.backgroundImage = `url(${resultApiBestMovies[i].image_url})`; 
//         i++;
//     };
// };