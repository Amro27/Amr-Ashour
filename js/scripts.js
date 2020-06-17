/*!
    * Start Bootstrap - Resume v6.0.0 (https://startbootstrap.com/template-overviews/resume)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-resume/blob/master/LICENSE)
    */
    (function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#sideNav",
    });
})(jQuery); // End of use strict


// Music Play/Stop
var myAudio = document.getElementById("myAudio");
var isPlaying = false;

function togglePlay() {
  if (isPlaying) {
    myAudio.pause()
    myAudio.currentTime = 0
  } else {
    myAudio.play();
  }
};
myAudio.onplaying = function() {
  isPlaying = true;
};
myAudio.onpause = function() {
  isPlaying = false;
};

// Controls
var x = document.getElementById("myAudio");
function enableControls() { 
    if (x.controls) {
        x.controls = false
      } else {
        x.controls = true
      }
} 

// Images
function slideSlider(){
  $("#slider-scroller").css({"left":"0%","transition":"all 0s linear"});
  $("#slider-scroller").css({"left": String(parseInt($("#slider-scroller").css("left")) - 500) + "px","transition":"all 5s linear"});
  setTimeout(function(){moveSliderItem()}, 5750);
}

function moveSliderItem(){
  $("#slider-scroller div").first().detach().appendTo($("#slider-scroller"));
  slideSlider();
}

slideSlider();
