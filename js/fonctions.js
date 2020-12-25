let imageBestMovie = document.getElementsByClassName("section__rightHero");

imageBestMovie[0].style.backgroundImage = "url('imageTest.jpg')"; 


let btnLeft = document.getElementsByClassName("arrow--left")[0];

btnLeft.addEventListener("click", function(event){
    event.preventDefault();
    console.log("ok");
} );
