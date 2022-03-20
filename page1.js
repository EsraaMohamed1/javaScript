var slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
  showSlides(slideIndex += n);
}


function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
      slideIndex = 1
    }
  if (n < 1) {
      slideIndex = slides.length
    }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}








function gotocontact(){
    location.href='page3.html';
}

var textt=document.getElementById("spann2");
var counter=0;
function increasecounter(){
counter++;
textt.innerText=counter;
}

var imgarr=document.getElementsByClassName("imgs");
function addclothes(){
   
    for(var i=0;i<imgarr.length;i++){
        imgarr[i].src='clothes/'+[i+1]+'.jpeg';
    }
   

}
function addmackup(){
    
    for(var i=0;i<imgarr.length;i++){
        imgarr[i].src='mackup/'+[i+1]+'.jpeg';
    }
   
}
function addshoes(){
    for(var i=0;i<imgarr.length;i++){
        imgarr[i].src='shoes/'+[i+1]+'.jpeg';
    }


}
function addphones(){
    for(var i=0;i<imgarr.length;i++){
        imgarr[i].src='phones/'+[i+1]+'.jpeg';
    }
   
}