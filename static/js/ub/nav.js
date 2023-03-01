var menuIcon = document.querySelector(".hamburger");
var menuBtn = document.getElementById("menuBtn");
var navbar = document.querySelector(".navbar");
var links = document.querySelector(".pages");
var linkBtns = document.querySelectorAll("#pageHover");
var centeredStuff = document.querySelector(".center");

document.body.classList.add('notransition'); //disable on load
document.body.classList.remove('notransition'); //enable after

menuIcon.style.top = ((navbar.clientHeight - linkBtns[0].clientHeight*3)/2 -13).toString() + "px";

menuIcon.onclick = function(){
  if(menuBtn.innerText != "close"){
    menuBtn.innerText = "close";
  } else {
    menuBtn.innerText = "menu";
  }
  for(var i=0;i<linkBtns.length;i++){
    linkBtns[i].classList.toggle('show');
  }
}