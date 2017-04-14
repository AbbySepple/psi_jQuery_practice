/*
  Write the code to make clicking on the 'change-highlight' button give a box on the DOM
  the 'highlight' class to turn the box red.
  Each time the 'change-highlight' button is clicked, it should give the next square
  the 'highlight' class.
  Only 1 box should be highlighted at a time.
  You will need to add to the highlightASquare function,
  you are also welcome to write more than the given functions.
*/
var numberOfSquares = 10;

$(document).ready(onReady);

//Function that runs when html is fully loaded:
function onReady(){
  //click listener to button:
  $('.change-highlight').on('click', highlightASquare)
  //call to put starting squares on DOM
  appendSquaresToDom(numberOfSquares);
}

function highlightASquare(){
  //This variable stores an array of the elements with the 'square' class
  var arrayOfSquares = $('.square');
// arrayOfSquares.addClass('highlight');
// console.log($('.container').children());
if ($('.container').children().hasClass('highlight')) {//if one checking if any are highlighted
  for (var i=0; i<arrayOfSquares.length; i++) {//for running through array
    if ($(arrayOfSquares[i]).hasClass('highlight')){//if two if highlighted
      $(arrayOfSquares[i]).removeClass('highlight'); //remove highlighted
    if (i === arrayOfSquares.length-1) {//end if two start if three if last is highlighted
      $(arrayOfSquares[0]).addClass('highlight'); //highlight first one
    } else {
      $(arrayOfSquares[i += 1]).addClass('highlight');//all above is in if one is highlighted
    }return;
  } //end if four
}//end forloop
}
  else {$(arrayOfSquares[0]).addClass('highlight');}
}//end if one
//end highlightASquare function


//You don't need to change this function:
function appendSquaresToDom(number){
  var squaresToAppend = "";
 //concatenate string of squares
  for(var i = 0; i < number; i++){
    squaresToAppend += "<div class='square'></div>";
  }
  //append string of html
  $(".container").append(squaresToAppend);
}
