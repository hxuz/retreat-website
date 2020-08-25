/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav-bar").style.top = "0";
    // document.getElementById("nav-bar").style.backgroundColor = "hsla(0, 0%, 20%, 0.85)";
  } else {
    document.getElementById("nav-bar").style.top = "-144px";
  }
  prevScrollpos = currentScrollPos;
}