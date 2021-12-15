  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //
console.log("Inflate The Unicorn!")
//Added an ID tag to each of the 3 html images.
//Then, linked each ID tag to a unique variable
var uni0 = document.getElementById("uni0")
var uni1 = document.getElementById("uni1")
var uni2 = document.getElementById("uni2")

//create variables to store image indexes.
//this code needs to be placed before the Change functions so they can work.
var inflateLvl0 = 0;
var inflateLvl1 = 0;
var inflateLvl2 = 0;

uni0.onclick = clicked
uni1.onclick = clicked
uni2.onclick = clicked


//specify which unicorn was clicked
//increase inflate level
//change image src to new picture


function clicked(event) {
  var unicorn = event.target

//specify each individual unicorn to inflate

  if (unicorn.id == "uni0"){
    inflateLvl0++
    
      if (inflateLvl0 == 4)
          inflateLvl0 = 0
    unicorn.src = "./images/unicorn-" + inflateLvl0 + ".png"
  }



  if (unicorn.id == "uni1"){
    inflateLvl0++
    
      if (inflateLvl0 == 4)
          inflateLvl0 = 0
    unicorn.src = "./images/unicorn-" + inflateLvl0 + ".png"
  }



  if (unicorn.id == "uni2"){
    inflateLvl0++
    
      if (inflateLvl0 == 4)
          inflateLvl0 = 0
    unicorn.src = "./images/unicorn-" + inflateLvl0 + ".png"
  }
}




















/*  Francis original code:

document.getElementById("unicorn1").addEventListener('click', function imageChange () {
  if (document.getElementById("unicorn1").src=="./images/unicorn-0.png")
 {
   document.getElementById("unicorn1").src="./images/unicorn-1.png"
 } else if (document.getElementById("unicorn1").src="./images/unicorn-1.png")
 {
 document.getElementById("unicorn1").src=="./images/unicorn-2.png"
 } else if (document.getElementById("unicorn1").src="./images/unicorn-2.png")
 {
 document.getElementById("unicorn1").src=="./images/unicorn-3.png"
 } else {
 alert ("Unicorn says thank yooooou")
 }
 });


document.getElementById("unicorn2").addEventListener('click', function inflate (){
  console.log ("click2");
});


document.getElementById("unicorn3").addEventListener('click', function inflate (){
  console.log ("click3");
});

*/



