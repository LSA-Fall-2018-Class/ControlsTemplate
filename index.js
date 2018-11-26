'use strict';

// Enter your js code Here

function firstClicked()
{
  console.log("First radio button clicked.");
}

function secondClicked()
{
  console.log("Second radio button clicked.");
}

function thirdClicked()
{
    console.log("Third radio button clicked.");
}

var inputBox1 = document.getElementById("inputBox1");
console.log("5 plus " + inputBox1.value + " equals " + (5+ Number(inputBox1.value)));

// ------ Start Button Code -----------------------------------------------

var doubleButton = document.getElementById("doubleButton");
doubleButton.addEventListener('click', function(e)
{
    // change the message
    document.getElementById("message1").innerHTML = "You clicked Double.";

    inputBox1.value = 2 * inputBox1.value;

});

// -----------

var copyButton = document.getElementById("copyButton");
copyButton.addEventListener('click', function(e)
{
    // change the message
    document.getElementById("message1").innerHTML = "You clicked Copy.";

    document.getElementById("inputBox2Label").innerHTML = inputBox2.value;

});

// -----------

var changePicButton = document.getElementById("changePicButton");
changePicButton.addEventListener('click', function(e)
{
    // change the Picture
    document.getElementById("exampleGraphic").src = "Player567.jpg";
});

// -----------

var answerButton = document.getElementById("answerButton");
answerButton.addEventListener('click', function(e)
{

    var myRadioTestForm = document.getElementById("radioTest");
    var i=0;

    // loop through each mode listed
    for (i=0; i<myRadioTestForm.mode.length; i++)
    {
      if (myRadioTestForm.mode[i].checked == true)
      {
        alert ("Radio button " + i + " is checked.");
      }
    } // end for

});

// ------ End Button Code -----------------------------------------------


var squares = document.querySelectorAll('.square');
squares[3].innerHTML = "X";

board.addEventListener('click', function(e)
{
  // update square to current turn's symbol - legal play
  e.target.innerHTML = e.target.id;
});
