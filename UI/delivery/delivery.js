/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    if (screen.width < 860) {
        document.getElementById("mySidenav").style.width = "250px";
    } else {
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
    }

}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    if (screen.width < 860) {
        document.getElementById("mySidenav").style.width = "0";

    } else {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
    }

}

window.onload = typeWriter;
var i = 0;
var txt = 'Hurray!! Your meal is on the way...'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}