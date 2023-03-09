// function untuk slideshow 
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var imgArray = document.getElementsByClassName("testi-img");

    if (n > imgArray.length) slideIndex = 1;
    else if (n < 1) slideIndex = 3;

    for (let i = 0; i < imgArray.length; i++) {
        imgArray[i].style.display = "none";
    }
    
    imgArray[slideIndex-1].style.display = "flex";
}

// function autoslide
setInterval(() => {
        plusDivs(1);
    }, 2500);