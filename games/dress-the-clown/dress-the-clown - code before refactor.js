  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //
console.log("Dress The Clown!")


//this tells JS that on 'keydown'(or pressing a certain key), a function CheckKey will be called.
document.onkeydown = checkKey;

//Now we're defining what the function does and specifying which keys(and their associated keycode) will do which things. 'E' is a parameter.
function checkKey(e) {

  //up arrow
  if (e.keyCode == '38') {
  changeVertical (-1)
  }

  //down arrow
  else if (e.keyCode == '40') {
    changeVertical (1)
  }

  //left arrow. introduces changeHorizontal function, which is defined later.
  else if (e.keyCode == '37') {
  changeHorizontal (-1)
  }

  //right arrow
  else if (e.keyCode == '39') {
    changeHorizontal (1)
  }
}

//These variables are placeholders for counting image indexes.
//this code needs to be placed outside the Change functions so they can work.
var vHeadIndex = 0
var vBodyIndex = 0
var vShoesIndex = 0

var vMainIndex = 0

//added an ID tag to each of the 3 body parts html images.
//this code points JS to where to locate the images - it's saying to get the specific IDs in the HTML file.
var vHead = document.getElementById("head")
var vBody = document.getElementById("body")
var vShoes = document.getElementById("shoes")


//this fuction refers to the changeHorizontal bit of code above, and introduces the 'shift' parameter. shift is a counter and checks whether the left or right arrow key is pressed.
//left arrow key decreases the value of vHeadIndex by 1, right arrow key adds 1
function changeHorizontal(shift) {

  //----- CODE FOR HEAD.png
  //this IF statement tells the code to only change the head if the vMainIndex is at 0, or in the HEAD position.

  if (vMainIndex == 0){
    vHeadIndex += shift
    
    //this If statement sets the boundaries for vHeadIndex, because there is no number less than 0, and there are no more head images past head5.png.
    if (vHeadIndex < 0)
      vHeadIndex = 5

    if (vHeadIndex > 5)
      vHeadIndex = 0  

    //Uses concatenation to tell JS where to locate the image files.
    vHead.src ="images/head" + vHeadIndex + ".png"
    }
 


//----- CODE FOR BODY.png
//changes the body if the vMainIndex is at 1, or in the Body position.
if (vMainIndex == 1) {
  vBodyIndex += shift
  
  //this If statement sets the boundaries for vBodyIndex
  if (vBodyIndex < 0)
      vBodyIndex = 4

  if (vBodyIndex >4)
      vBodyIndex =0  

  //Uses concatenation to tell JS where to locate the image files.
  vBody.src ="images/body" + vBodyIndex + ".png"
  }


//----- CODE FOR SHOES.png
//Code will only change the shoes if the vMainIndex is at 2, or in the Shoes position.
if (vMainIndex == 2){
  vShoesIndex += shift
  
  //this If statement sets the boundaries for vShoesIndex
  if (vShoes < 0)
      vShoesIndex =5

  if (vShoesIndex >5)
      vShoesIndex =0  

  //Uses concatenation to tell JS where to locate the image files.
  vShoes.src ="images/shoes" + vShoesIndex + ".png"
  }
}
//take note of how all above code is wrapped around curly braces to get them all to work.



//Now there's a new function to keep track of whether the up or down key is pressed.
//down arrow increases value by 1, up arrow decreases by 1

function changeVertical(shift) {
vMainIndex += shift 


//Again, setting boundaries so the Main Index value does not decrease less than 0, or more than 2
if (vMainIndex < 0)
      vMainIndex =2

  if (vMainIndex > 2)
  vMainIndex = 0  

  console.log (vMainIndex)
}




