var femaleName = prompt("What is your name ? : ");
var maleName = prompt("What is your crush's name ? : ");

/* love Calculator*/
var lovePercentage = Math.random();
lovePercentage = lovePercentage * 100;
lovePercentage = Math.floor(lovePercentage) + 1;

alert(maleName + "💕" + femaleName + " = " + lovePercentage + "%");