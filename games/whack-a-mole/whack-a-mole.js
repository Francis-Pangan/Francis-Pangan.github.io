  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //
/*
problem breakdown:
1) generate random cell
2) mole image appears in random cell
3) click on the mole
4) mole reappears in a a different cell
*/

//1) generate random cell
//get a reference to all cells in HTML and store this in a variable.
var cells = document.getElementsByTagName("TD")

// array randomizer - randomizes based on variable "cell" length
//https://www.w3schools.com/js/js_random.asp
var randomIndex=Math.floor(Math.random() * cells.length);

//since randomIndex is in [square brackets], it's looking at whatever random cell is generated in the radomIndex variable above.
var randomCell = cells[randomIndex]

//2) mole image appears in random cell
//new variable "mole" is being assigned to JS to create an image 
var mole = document.createElement('img');

//telling javascript where to locate the image file.
mole.src = './mole.PNG'

//the mole image dimensions were specified in the CSS. It was given the exact same dimentions as the td, so it fits within the cells.
mole.id='mole'

//still don't understand appendchild functionality!
randomCell.appendChild(mole);

//3) click on the mole
//onclick event listener and linking it to function below
mole.onclick = whackedMole

//4) mole reappears in a a different cell
//the code from above is re-used, to randomise the mole's cell once again.
//since we've already declared the variables above, we just call it and not re-use var/let/const keywords

function whackedMole(){ 
  randomIndex=Math.floor(Math.random() * cells.length)
  randomCell = cells[randomIndex]
  randomCell.appendChild(mole);

//Audio is played everytime the mole is clicked.
//It's important this is nested within the function, because mole.onclick calls the entire whackedMole function.
var audio = new Audio('./whack-audio.wav');
audio.play();
}
