function hidText()
{
    var hT=document.getElementById('headerText');
    if(hT.style.top=="40vh")
        hT.style.top="70vh";
    else
        hT.style.top="40vh";
}

window.onscroll = function() {mySticky()};

// Get the navbar
var navbar = document.getElementById("navbar");
var logo= document.getElementById("logo");
// Get the offset position of the navbar
var sticky = 800;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function mySticky() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    navbar.classList.add("bg-bluet");
    navbar.classList.remove("bg-transparent");
    logo.style.height="50px";
  } else {
    navbar.classList.remove("sticky");
    navbar.classList.add("bg-transparent");
    navbar.classList.remove("bg-bluet");
    logo.style.height="75px";
  }
}