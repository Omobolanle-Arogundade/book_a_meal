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

var text = 'We are processing your order, click Next to confirm delivery.';

var chars = text.split('');
var container = document.getElementById("demo");

var i = 0;
setInterval(function () {
    if (i < chars.length) {
        container.innerHTML += chars[i++];
    } else {
        i = 0;
        container.innerHTML = "";
    }
}, 80);