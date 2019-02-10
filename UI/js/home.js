/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  var slideIndex = 0;

  // When the user scrolls down 80px from the top of the document, change navbar color
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementsByClassName("topnav")[0].style.backgroundColor = "#4285F4";
  } else {
    document.getElementsByClassName("topnav")[0].style.backgroundColor = "transparent";
  }
}



showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
      slideIndex = 1
    } 
  slides[slideIndex-1].style.display = "block"; 
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}


var testimonialIndex = 1;
showTestimonials(testimonialIndex);

function plusTestimonial(n) {
  showTestimonials(testimonialIndex += n);
}

function currentTestimonial(n) {
  showTestimonials(testimonialIndex = n);
}

function showTestimonials(n) {
  var i;
  var testimonials = document.getElementsByClassName("testimonials");
  var dots = document.getElementsByClassName("dot");
  if (n > testimonials.length) {testimonialIndex = 1} 
    if (n < 1) {testimonialIndex = testimonials.length}
    for (i = 0; i < testimonials.length; i++) {
      testimonials[i].style.display = "none"; 
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    testimonials[testimonialIndex-1].style.display = "block"; 
  dots[testimonialIndex-1].className += " active";
}


function toggleLike(x) {
  x.classList.toggle("fa-thumbs-down");
  console.log(x.classList);
  
}
