var slideIndex = 0;
showObjects();

function showObjects() {
  
  var x = document.getElementsByClassName("myslides");  

  for (var i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }

    slideIndex++;
    
    if (slideIndex >= x.length) {
      slideIndex = 0;
    } 
    x[slideIndex].style.display = "block"; 
    setTimeout(showObjects, 2000); 
}

