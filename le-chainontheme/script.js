const burgerMenu = document.querySelector('.burger');
const deuxiemeMenu = document.querySelector('.deuxieme.menu');
var isMenuOn = false;

burgerMenu.addEventListener('click', function(deuxiemeMenu) {
  if(isMenuOn){
    document.querySelector('.deuxieme.menu').style.display = "block";
  } else {
    document.querySelector('.deuxieme.menu').style.display = "none";
  }
  isMenuOn = !isMenuOn;
});
<!------------------------->