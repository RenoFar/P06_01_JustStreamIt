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

const categoryList = [
    "#bestRating .imageModal",
    "#categoryOne .imageModal",
    "#categoryTwo .imageModal",
    "#categoryThree .imageModal",
    "#bestMovie .section__rightHero",
];

let resultApi = [
    [],
    [],
    [],
    [],
];

function fillImageCat(categorylist, category) {
    console.log("fillImageCat start");
    let imageCategory = document.querySelectorAll(categorylist);
    console.log("imageCategory.lenght " + imageCategory.length);
    let imageNumber = 6;
    if (categorylist == "#bestMovie .section__rightHero") {
        imageCategory[0].style.backgroundImage = `url(${resultApi[0][0].image_url})`;
    }
    console.log("category " + category);
    while (imageNumber>=0){
        imageCategory[imageNumber].style.backgroundImage = `url(${resultApi[category][imageNumber].image_url})`;
        console.log("resultApi[category][imageNumber].image_url : " + resultApi[category][imageNumber].image_url)
        imageNumber--;
    };
    console.log("fillImageCategory end");
};

function loopFillImageCat() {
    console.log("loopFillImageCat start");
    console.log("categoryList.length: " + categoryList.length)
    for (let category=0; category<categoryList.length; category++){
        fillImageCat(categoryList[category], category);
    }
};

function requestApi(urlRequest, index, elementQty) {
        console.log("requestApi start");
        console.log("requestApi - index & elmtQty :" + index + " & " + elementQty);
        fetch(urlRequest)
            .then(response => response.json())
            // .then(function(response) { return response.json()})
            .then(function(jsonResponse) {
                console.log("jsonResponse " + jsonResponse);
                for (let element=0; element<elementQty; element++){
                    console.log("element: " + element);
                    resultApi[index].push(jsonResponse.results[element]);
                    }
            })
        console.log("requestApiCategory end");
};

function loopApiRequest() {
    console.log("loopApiRequest start");
    console.log("urlRequest.length: " + urlRequest.length)
    for (let i=0; i<urlRequest.length; i++){
        requestApi(urlRequest[i][0], i, 5);
        requestApi(urlRequest[i][1], i, 2);
    }
};

function main() {
    loopApiRequest();
    // while (true) {
    // if (resultApi[0].length == 7 && resultApi[1].length == 7 &&
    //     resultApi[2].length == 7 && resultApi[3].length == 7){
    //         break
    //     }
    // }
    setTimeout(() => loopFillImageCat(), 900);
    // loopFillImageCat();
};

main();


// const loopApiRequest = () => {
//     return new Promise(resolve => {
//         console.log("loopApiRequest start");
//         console.log("urlRequest.length: " + urlRequest.length)
//         for (let i=0; i<urlRequest.length; i++){
//             requestApiCategory(urlRequest[i][0], i, 5)
//                 .then(() => {
//                     requestApiCategory(urlRequest[i][1], i, 2)
//                 })
//                 .then(() => {
//                     console.log("i++ " + i);
//                     if (i==urlRequest.length-1){
//                         resolve;
//                         console.log("loopApiRequest resolve ok");
//                     }
//                 });
//         }
//         console.log("loopApiRequest end");
//     })
// };

// const requestApiCategory = (urlRequest, index, elementQty) => {
//     return new Promise(resolve => {
//         console.log("requestApiCategory start");
//         console.log("requestApiCategory - index & elmtQty :" + index + " & " + elementQty);
//         fetch(urlRequest)
//             .then(response => response.json())
//             .then(jsonResponse => {
//                 for (let i=0; i<elementQty; i++){
//                     resultApi[index].push(jsonResponse.results[i]);
//                     console.log("index & i: " + index + " " + i);
//                     console.log("resultApi[index].push(jsonResponse.results[i]) : " 
//                     + resultApi[index]);
//                     if (i==elementQty-2){
//                         resolve;
//                         console.log("requestApiCategory resolve ok");
//                     }
//                 };            
//             })
//         console.log("requestApiCategory end");
//     });
// };

// const fillImageCategory = (category) => {
//         console.log("fillImageCategory start");
//         let imageCategory = document.querySelectorAll(category);
//         console.log("imageCategory.lenght " + imageCategory.length);
//         let imageNumber = 6;
//         if (category == "#bestMovie .section__rightHero") {
//             imageNumber = 0;
//         }
//         console.log("imageNumber " + imageNumber);
//         while (imageNumber>=0){
//             imageCategory[imageNumber].style.backgroundImage = `url(${resultApi[0][imageNumber].image_url})`;
//             console.log("resultApi[0][imageNumber].image_url : " + resultApi[0][imageNumber].image_url)
//             imageNumber--;
//         };
//         console.log("fillImageCategory end");
// };

// const main = () => {    
    // loopApiRequest()
//         .then(() => {
//             fillImageCategory("#bestMovie .section__rightHero")
//             fillImageCategory("#bestRating .tiles__tile")
//         });
// };

// if (document.readyState === "complete" || document.readyState === "interactive") {
    // call on next available tick
    // main();
// }


// let resultApiBestMovies = [];
// let resultApiFirstCat = [];
// let resultApiSecondCat = [];
// let resultApiThirdCat = [];

// fetch("http://localhost:8000/api/v1/titles/?sort_by=-imdb_score")
// .then(function(response){
//     return response.json();
// })
// .then(function(response){
//     for (let i=0; i<5; i++){
//         resultApiBestMovies.push(response.results[i]);
//     }
//     return;
// })
// .then(function(){
//     fetch("http://localhost:8000/api/v1/titles/?sort_by=-imdb_score&page=2")
//     .then(function(response){
//         return response.json();
//     })
//     .then(function(response){
//         for (let i=0; i<2; i++){
//             resultApiBestMovies.push(response.results[i]);
//         }
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