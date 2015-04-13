var inputRange = document.getElementsByClassName('range')[0],
    maxValue = 100, // the higher the smoother when dragging
    speed = 5,
    currValue, rafID;

// set min/max value
inputRange.min = 0;
inputRange.max = maxValue;

// listen for unlock
function unlockStartHandler() {
    // clear raf if trying again
    window.cancelAnimationFrame(rafID);
    
    // set to desired value
    currValue = +this.value;
}

function unlockEndHandler() {
    
    // store current value
    currValue = +this.value;
    
    // determine if we have reached success or not
    if(currValue >= maxValue) {
        successHandler();
    }
    else {
        rafID = window.requestAnimationFrame(animateHandler);
    }
}

// handle range animation
function animateHandler() {

    // calculate gradient transition
    var transX = currValue - maxValue;
    
    // update input range
    inputRange.value = currValue;

    //Change slide thumb color on mouse up
    if (currValue < 20) {
        inputRange.classList.remove('ltpurple');
    }
    if (currValue < 40) {
        inputRange.classList.remove('purple');
    }
    if (currValue < 60) {
        inputRange.classList.remove('pink');
    }
    
    // determine if we need to continue
    if(currValue > -1) {
      window.requestAnimationFrame(animateHandler);   
    }
    
    // decrement value
    currValue = currValue - speed;
}

// handle successful unlock
function successHandler() {
  alert('Succsessfully Activated Awesome!');
};

// bind events
inputRange.addEventListener('mousedown', unlockStartHandler, false);
inputRange.addEventListener('mousestart', unlockStartHandler, false);
inputRange.addEventListener('mouseup', unlockEndHandler, false);
inputRange.addEventListener('touchend', unlockEndHandler, false);

// move gradient
inputRange.addEventListener('input', function() {
    //Change slide thumb color on way up
    if (this.value > 20) {
        inputRange.classList.add('ltpurple');
    }
    if (this.value > 40) {
        inputRange.classList.add('purple');
    }
    if (this.value > 60) {
        inputRange.classList.add('pink');
    }

    //Change slide thumb color on way down
    if (this.value < 20) {
        inputRange.classList.remove('ltpurple');
    }
    if (this.value < 40) {
        inputRange.classList.remove('purple');
    }
    if (this.value < 60) {
        inputRange.classList.remove('pink');
    }
});

var secret = "38384040373937396665"; //uuddlrlrba
var input = "";
var timer;
var mode = false;

$(document).keyup(function(e) {
    //alert(e.which);
    input += e.which;    

    
    check_input();
});

function check_input() {
    if(input == secret) {
        //the secret code
        alert('Konami code entered.');
    }
}

$(document).ready(function() {
    setInterval(function() { $('#info').html('Keystroke: ' + input); }, 100);
});

$(function(){
  $(".typed").typed({
    strings: [
      "Welcome to my website!"
    ],
    typeSpeed: 0,
    contentType: 'html',
    loop: true,
    showCursor: false,
    backDelay: 2500,
    typeSpeed: -20,
    backSpeed: -50,
   
    preStringTyped: function(curString) {
      var colors = [
        "#2980b9", "#8e44ad", "#e67e22", "#2c3e50", "#16a085", "#c0392b", "#d35400", "#1abc9c", "#2ecc71"
      ];
      var newColor;
			var rand = colors[Math.floor(Math.random() * (colors.length - 1))];
      
      newColor = rand;
      /*
      if (background == newColor) {
      	neueFarbe
      }
      
      */
      
      $("body").css("backgroundColor", newColor);
    }
  });
});

