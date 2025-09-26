// HERE IN THESE SECTION WE IMPLEMENTED //


gsap.registerPlugin(Draggable);

Draggable.create("#element1,#element2", {
      type: "x,y",
      inertia: true,
      bounds: document.getElementById("outerborder"),
      onPress: function() { 
          navigator.vibrate(20);//ONLY WORK ON SUPPORTIVE BROWSER//
          gsap.to(this.target, { scale: 1.3, }); },
      onRelease: function() { gsap.to(this.target, { scale: 1 });},
      onDrag: function(){
           checkcollision();
       } 
  });


// HERE IN THESE PART OF THE CODE RUN PROGRAM OF COLLISIONCHECK //
// KEY NOTE THRSE PART OF THE CODE WILL RUN WHEN EVER checkcollision(); CALLED //


function checkcollision(){
    
let element1 = document.getElementById("element1");    
let element2 = document.getElementById("element2");

let dataelement1 = element1.getBoundingClientRect();
let dataelement2 = element2.getBoundingClientRect();


let element1X = dataelement1.left+dataelement1.width/2;
let element2X = dataelement2.left+dataelement2.width/2;

let element1Y = dataelement1.top+dataelement1.height/2;
let element2Y = dataelement2.top+dataelement2.height/2;


let dx = element2X - element1X;
let dy = element2Y - element1Y;

let distance = Math.sqrt(dx*dx+dy*dy);

console.log(`THE DISTANCE BETWEEN Element1 And Element2  =`,distance);
    
document.getElementById("viewdistance").innerText = `THE DISTANCE IS = ${distance}`;    
    
 if (distance < 110.00) {
  element1.style.backgroundColor = "green";
  document.getElementById("COLLISIONDETECTED").style.display="block";   
} else {
  element1.style.backgroundColor = "blue";
  COLLISIONDETECTED.style.display="none";  
}
}