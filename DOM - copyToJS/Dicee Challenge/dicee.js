/**
 * Dicee Challenge
 */

// Random number between 1 and 6
let randomNumber1 = Math.floor( Math.random() * 6 ) + 1; // random numbers between [0-6]
let randomNumber2 = Math.floor( Math.random() * 6 ) + 1; // random numbers between [0-6]

//Images sources
let randomImageSource1 = "images/dice" + randomNumber1 + ".png";
let randomImageSource2 = "images/dice" + randomNumber2 + ".png";

//Change the <img> to a Random Dice
document.querySelectorAll( "img" )[0].setAttribute( "src", randomImageSource1 );
document.querySelectorAll( "img" )[1].setAttribute( "src", randomImageSource2 );

// Change the Title to Display a Winner
if ( randomNumber1 === randomNumber2 ) 
    document.querySelector( "h1" ).innerHTML = "Draw !";  
else if ( randomNumber1 < randomNumber2 )
    document.querySelector( "h1" ).innerHTML = "Player 2 wins !! &#x1f6a9"; //&#x1f6a9 hex code for the flag
else
    document.querySelector( "h1" ).innerHTML = "&#x1f6a9 Player 1 wins !!";  