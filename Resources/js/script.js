function hidText()
{
    var nS=document.getElementById('nav-button').getAttribute("aria-expanded");
    var hT=document.getElementById('headerText');
    var hTh1=document.getElementById('headerText_h1');
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
    if(nS=='false')
      if(vh<500)
      {
        hTh1.style.marginLeft="10%";
      }
      else
      hT.style.top="40vh";
    else
      if(vh<500)
      {
        hTh1.style.marginLeft="30%";
      }
      else
        hT.style.top="70vh";
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