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

//This array is a placeholder for counting image indexes.
//var vIndexes = (HEAD, BODY, SHOES)

var vIndexes = [0, 0, 0]

var vMainIndex = 0

//added an ID tag to each of the 3 body parts html images.
//this code points JS to where to locate the images - it's saying to get the specific IDs in the HTML file.
var vHead = document.getElementById("head")
var vBody = document.getElementById("body")
var vShoes = document.getElementById("shoes")

var vImages = [head, body, shoes]
var vStrings = ["head", "body", "shoes"]

//enter notes
function changeHorizontal(shift) {

  //-

  var vIndex = vIndexes [vMainIndex]
  var vImage = vImages [vMainIndex]
  var vStr = vStrings [vMainIndex]
 
    vIndex += shift
    
    //this If statement sets the boundaries for the image files, so they don't go less than 0 or more than the highest number.
    if (vIndex < 0)
        vIndex =5
    if (vIndex > 5)
        vIndex = 0  

    vIndexes[vMainIndex] = vIndex

    //Uses concatenation to tell JS where to locate the image files.
    vImage.src ="images/" + vStr + vIndex + ".png"
}
  


//Now there's a new function to keep track of whether the up or down key is pressed.
//down arrow increases value by 1, up arrow decreases by 1

function changeVertical(shift) {
vMainIndex += shift 


//Again, setting boundaries so the Main Index value does not decrease less than 0, or more than 2
if (vMainIndex < 0)
      vMainIndex =2

  if (vMainIndex > 2)
  vMainIndex = 0  

}

