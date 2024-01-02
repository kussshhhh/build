var canvas = document.getElementById('canvas');
  
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// var nika = document.getElementById("body") ;
// nika.width = window.innerWidth;
// nika.height = window.innerHeight;

var c = canvas.getContext('2d');
c.fillStyle = 'rgba(0, 0, 250, 0.45)';

function nika(){

    window.location.href = "levels.html" // Redirect to the specified URL
  
  
}
function Circle(x, y ,dx, dy, radius){
this.x = x ;
this.y = y ; 
this.dx = dx ;
this.dy = dy ;
this.radius = radius ;
this.draw = function(){
    c.beginPath() ;
    c.arc(this.x, this.y, this.radius, 0, Math.PI*2, false) ;
    c.strokeStyle = 'blue' ;
    c.stroke() ;
}
this.update = function(){

    if(this.x + radius > canvas.width || this.x < radius){ this.dx = -this.dx ;}
    if(this.y + radius > canvas.height || this.y < radius){ this.dy = -this.dy ;}
    this.x += this.dx ;
    this.y += this.dy ;
    c.clearRect(0, 0, canvas.width, canvas.height); 
    this.draw() ;
    
}

this.cord = function(k, l){
    if(Math.abs(Math.abs(k)- this.radius) <= this.x + this.radius && Math.abs(Math.abs(l)- this.radius) <= this.y+this.radius){
        return true ; 
    }
    else{ 
        return false ;
    }
}
this.xcord = function(){return this.x ;}
this.ycord = function(){ return this.y ;}
}
var circle = new Circle(200, 200, 2,2,34) ;


let x = 340; let y = 200 ;
let dx = 10 ;
let dy = 14  ;
let radius = 30 ;
function animate(){
    requestAnimationFrame(animate) ;
    circle.update()  ;
    c.fillStyle = "blue";
    c.font = "100px Arial" ;
    c.textAlign = "center"
    c.fillText("click on the ball to start the game", innerWidth/2, 100) ;
}

window.addEventListener('click', function(event) {
if(circle.cord(event.clientX, event.clientY)){
    nika() ;
}
else{
    console.log("Clicked at coordinates:", event.clientX, event.clientY);
    console.log(circle.xcord() + " " + circle.ycord()) ;
}
});

animate() ;

