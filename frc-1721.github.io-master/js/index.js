/*
  index.js
  Copyright (C) Concord Robotics 2016
  Written by Brennan Macaig
  Some code pulled from other sources with permission
*/

// This is magic
// Please don't mess with it.
// Scrolling and navbar fixes.
$(window).scroll(function () {
    winHeight = $(window).height();
    if ($(window).scrollTop() > winHeight) {
        document.getElementById("navthing").className = "navbar navbar-default navbar-fixed-top";
        document.getElementById("downer").className = "invisible";
        document.getElementById("upper").className = "show";
        $('.navbar').css('position', 'fixed');
    } else {
        document.getElementById("navthing").className = "navbar navbar-inverse navbar-fixed-bottom";
        document.getElementById("navthing").style.position = "absolute";
        document.getElementById("downer").className = "show";
        document.getElementById("upper").className = "invisible";
    }
});


//Smooth scrolling between anchors.
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

// Initialize all bootstrap tooltips.
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});


// // jQuery for page scrolling feature - requires jQuery Easing plugin
// $(function() {
//     $('a.page-scroll').bind('click', function(event) {
//         var $anchor = $(this);
//         $('html, body').stop().animate({
//             scrollTop: $($anchor.attr('href')).offset().top
//         }, 1500, 'easeInOutExpo');
//         event.preventDefault();
//     });
// });
