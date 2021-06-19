// Drum buttons
let drumButtons = document.querySelectorAll( ".drum" );

// Audios'list
let audios = [ "tom-1", "tom-2", "tom-3", "tom-4", "snare", "crash", "kick-bass" ];

// Add click eventListener to all the drum buttons
for ( let i = 0; i < drumButtons.length; i++) 
    drumButtons[i].addEventListener( "click", 
    function () 
    {
        let audioSource = "sounds/" + audios[i] + ".mp3"; 
        let audio = new Audio( audioSource );
        audio.play();
    } );