/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    if (screen.width < 860){
      document.getElementById("mySidenav").style.width = "250px";
    } else {
      document.getElementById("mySidenav").style.width = "250px";
      document.getElementById("main").style.marginLeft = "250px";
    }
  
  }
  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
  function closeNav() {
    if (screen.width < 860){
      document.getElementById("mySidenav").style.width = "0";
  
    } else {
      document.getElementById("mySidenav").style.width = "0";
      document.getElementById("main").style.marginLeft = "0";
    }
  
  }

  function animateValue(id, start, end, duration) {
    // assumes integer values for start and end
    
    var obj = document.getElementById(id);
    var range = end - start;
    // no timer shorter than 50ms (not really visible any way)
    var minTimer = 50;
    // calc step time to show all interediate values
    var stepTime = Math.abs(Math.floor(duration / range));
    
    // never go below minTimer
    stepTime = Math.max(stepTime, minTimer);
    
    // get current time and calculate desired end time
    var startTime = new Date().getTime();
    var endTime = startTime + duration;
    var timer;
  
    function run() {
        var now = new Date().getTime();
        var remaining = Math.max((endTime - now) / duration, 0);
        var value = Math.round(end - (remaining * range));
        obj.innerHTML = value;
        if (value == end) {
            clearInterval(timer);
        }
    }
    
    timer = setInterval(run, stepTime);
    run();
}

animateValue("customers", 0, 5, 1000);
animateValue("menus", 0, 4, 1000);
animateValue("orders", 0, 12, 1000);
// animateValue("money", 0, 150000, 1000);


