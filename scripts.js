function randomInteger(min, max) {
  console.log(111);
  return Math.floor(Math.random() * (max - min + 1)) + min;
 
}

let header = document.getElementById("headerID");
window.addEventListener("scroll", function() {
    if (window.scrollY >= 20) {
      header.style.paddingTop = "12px";
    }
    else 
    {
      header.style.paddingTop = "20px";
    }
  });

  console.log("test");


  let allSquares = document.getElementsByClassName("circle");
  

  // Iterate through each element and set the animation duration
  for (let i = 0; i < allSquares.length; i++) {
    let animationLength = randomInteger(3, 20);
    let rotateLength = randomInteger(-10,10);
   

      allSquares[i].style.animationDuration = animationLength + "s";
      allSquares[i].style.transform = "rotate(" + rotateLength + ")";
   }
  
  console.log("1");
  
  let slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {

  
  
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    let i;
    console.log("showslides" + n);
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
      slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
  
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  }