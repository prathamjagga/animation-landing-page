var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");

    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slides[i].classList.remove("fade");
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    slides[slideIndex - 1].classList.add("fade");
    dots[slideIndex - 1].className += " active";
}

// Auto Slide
// var autoSlideIndex = 0;
// autoShowSlides();

// function autoShowSlides() {
//     var i;
//     var slides = document.getElementsByClassName("mySlides");
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//         slides[i].classList.remove("fade");
//     }
//     autoSlideIndex++;
//     if (autoSlideIndex > slides.length) { autoSlideIndex = 1; }
//     slides[autoSlideIndex - 1].style.display = "block";
//     slides[autoSlideIndex - 1].classList.add("fade");
//     setTimeout(autoShowSlides, 2000); // Change image every 2 seconds
// }
