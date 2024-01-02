var canvas = document.getElementById('canvas');

canvas.width = window.innerWidth;                      
canvas.height = window.innerHeight;
let w = canvas.width ;
let h = canvas.height ;
var c = canvas.getContext('2d');
c.fillStyle = 'rgba(0, 0, 250, 0.45)';

function Rectangle(x,y, width, height){
    this.x = x           ;
    this.y = y           ;
    this.width = width   ;
    this.height = height ;

    this.draw = function(){
        c.fillStyle = 'rgba(245, 0, 0, 0.4)'; 
        c.fillRect(this.x, this.y, this.width, this.height) ;
    }
}
function drawfloors(floors){ 
    canvas.height = (floors/6)*canvas.height ;
    h = canvas.height ;

    let floor_arr = [] ;
     // this function takes number of floors and draws it on the canvas
    let d = h/floors ;
    for(let i = 1; i <= floors; i++){
        let rectangle = new Rectangle(10, 10 + d*(i-1), 40, 30) ;
        floor_arr.push(rectangle) ;
    }

    for(let i = 0; i < floors; i++){
        floor_arr[i].draw() ;
        console.log(floor_arr[i]) ;
    }
}


drawfloors(30) ;



 





































// how will i do it 
// 