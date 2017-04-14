/*
  Write code to make the number on the DOM countdown each second.
  Only one number should be displayed on the DOM at a time.

  HINT: look into javascript's setInterval() function.


  BONUS 1: Add a button for the user to reset the timer.
  BONUS 2: Make something cool happen using a jQuery animation when the timer gets to zero.
*/

//the final countdown!
var sec = 10;
var timer = setInterval(function() {
   $('.count').text(sec--);
   if (sec === -1) {
      $('.count').fadeOut('slow');
      clearInterval(timer);
   }
}, 1000);
//end final cuntdown
