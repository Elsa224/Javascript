/**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to 
 * write any Karel program you want.
 * http://stanford.edu/~cpiech/karel/ide.html
 * 
 * Web Dev Course Section 9 : Intro to JS6/ES6
 * 
 * Wrote by Elsa Z. the April 6th, 2021
 **/
 
/** function main()
{
   putBeeper();
   putBeepAndGo();
}

function putBeepAndGo()
{
   thirdPart();
   thirdPart();
   firstPart();
   firstPart();
}

function thirdPart()
{
   firstPart();
   firstPart();
   secondPart();
   turnRight();
}

function secondPart()
{
   turnLeft();
   move();
   turnLeft();
   move();
   putBeeper();
   firstPart();
   move();
   turnRight();
   move();
   putBeeper();
   
}

function firstPart()
{
   move();
   move();
   putBeeper();
} **/

/** Correction by Angela Yu**/
function main()
{
   beepersRight();
   goUpTurnLeft();
   beepersLeft();
   goUpTurnRight();
   beepersRight();
   goUpTurnLeft();
   beepersLeft();
   goUpTurnRight();
   beepersRight();
}
 
function goUpTurnRight() {
   turnRight();
   move();
   turnRight();
}
 
function goUpTurnLeft() {
   turnLeft();
   move();
   turnLeft();
}
 
function beepersRight() {
   putBeeper();
   move();
   move();
   putBeeper();
   move();
   move();
   putBeeper();  
}
 
function beepersLeft() {
   move();
   putBeeper();
   move();
   move();
   putBeeper();
   move();
}