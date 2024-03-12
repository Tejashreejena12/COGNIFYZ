function clickMe(source){
  document.getElementById('full').src = source;
  document.getElementById('modal').style.display = 'block';
}

function shut(){
  document.getElementById('modal').style.display = 'none';
}

let slideIndex = 0;
showSlides();

function showSlides(){
  let i;
  let slides = document.getElementsByClassName("myslides");
  for(i = 0; i < slides.length; i++){
    slides[i].style.display = "none";
  }
  slideIndex++;
  if(slideIndex > slides.length){
    slideIndex = 1;
  }
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides,2000);
} 