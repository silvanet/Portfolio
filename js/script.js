//I forgot who I got this from, but I'll find it and give him credit. Did a lot of research and tried to pick from what I liked best
//to learn

$(window).on('resize', function() {
  'use strict';
  var element	= document.querySelector('#banner'),
      elHeight = 0,
      elTop = 0,
      dHeight	= 0,
      wHeight	= 0,
      wScrollCurrent = 0,
      wScrollBefore	= 0,
      wScrollDiff	= 0; 
      window.addEventListener('scroll', function () {
        // Hide the displayed menu. I want to scroll, so not interested in the display menu options.
        $('.navbar-collapse').collapse('hide');
        $('.navbar-toggle').addClass('collapsed').blur();
        if($(window).width() <= 768) {
          elHeight = element.offsetHeight;
          dHeight = document.body.offsetHeight;
          wHeight = window.innerHeight;
          wScrollCurrent = window.pageYOffset;
          wScrollDiff = wScrollBefore - wScrollCurrent;
          elTop = parseInt(window.getComputedStyle(element).getPropertyValue('top')) + wScrollDiff;

          // scroll to top; element sticks to top
          if(wScrollCurrent <= 0) {
              element.style.top = '0px';
          } 
          // scroll up; element slides in
            else if(wScrollDiff > 0) {
              element.style.top = (elTop > 0? 0 : elTop) + 'px'; 
          } 
          // scroll down
            else if(wScrollDiff < 0) {
              // scroll to bottom; element slides in
              if(wScrollCurrent + wHeight >= dHeight - elHeight) {  
                element.style.top = ( ( elTop = wScrollCurrent + wHeight - dHeight ) < 0 ? elTop : 0 ) + 'px';
              } 
              // scroll down; element slides out
                else { element.style.top = ( Math.abs( elTop ) > elHeight ? -elHeight : elTop ) + 'px'; }
            }
          wScrollBefore = wScrollCurrent;
        } 
        //
          else element.style.top = '0px';
      });
}).resize();

// Floating label headings for contact form
$(function() {$("body")
 .on("input propertychange", ".form-item",function(e) {
  $(this).toggleClass("form-item-filled",!! $(e.target).val());})
 .on("focus", ".form-item",function() {
  $(this).addClass("form-item-focused");})
 .on("blur", ".form-item",function() {
  $(this).removeClass("form-item-focused");});
});

// Highlight top nav as scroll
$('body').scrollspy({target: '.navbar-fixed-top'})

// Close Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
  $(".navbar-collapse").collapse('hide');});

// jQuery for page scrolling - requires jQuery Easing plugin
$(function() {$('body').on('click', 'a.scrollable', function(event) {
  var $anchor = $(this);
  $('html, body').stop().animate({scrollTop: $($anchor.attr('href')).offset().top},1500,'easeInOutExpo');
  event.preventDefault();
  });
});
