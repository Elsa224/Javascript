/**
 * Date : June 17, 2021
 * Author : Elsa Z.
 */

// Drum buttons
let drumButtons = document.querySelectorAll( ".drum" );

// Add click eventListener to all the drum buttons
for ( let i = 0; i < drumButtons.length; i++ ) 
    drumButtons[ i ].addEventListener( "click", 
    function () 
    {
        let buttonInnerHTML = this.innerHTML;   // Return the "text" in the button
        makeSound( buttonInnerHTML );
        buttonAnimation( buttonInnerHTML );
    } );

// Event listener on the keyboard
document.addEventListener( "keydown", function ( Event ) 
{
    makeSound( Event.key );
    buttonAnimation( Event.key ); 
} );

// Each key letter to each sound function
function makeSound( key )
{
    switch (key) {
        case "w":
            let tom1 = new Audio( "sounds/tom-1.mp3" );
            tom1.play();
            break;
        
        case "a":
            let tom2 = new Audio( "sounds/tom-2.mp3" );
            tom2.play();
            break;

        case "s":
            let tom3 = new Audio( "sounds/tom-3.mp3" );
            tom3.play();
            break;

        case "d":
            let tom4 = new Audio( "sounds/tom-4.mp3" );
            tom4.play();
            break;

        case "j":
            let snare = new Audio( "sounds/snare.mp3" );
            snare.play();
            break;

        case "k":
            let crash = new Audio( "sounds/crash.mp3" );
            crash.play();
            break;

        case "l":
            let kickBass = new Audio( "sounds/kick-bass.mp3" );
            kickBass.play();
            break;
    
        default:
            break;
    }
}

//Adding animations to each button
function buttonAnimation( currentKey ) 
{
    let activeButton = document.querySelector( "." + currentKey );
    activeButton.classList.add( "pressed" );   //adding the pressed class to activeButton

    //Set a time for the pressed class to be removed    
    setTimeout( function () { activeButton.classList.remove( "pressed" );} , 200 );    //time im milliseconds
                
}