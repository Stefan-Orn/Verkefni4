const canv = document.querySelector("canvas");
const ctx = canv.getContext("2d");

const base_ctx = document.getElementById('base').getContext('2d');


const width = canv.width = innerWidth;
const height = canv.height = innerHeight;
const floor = 45;
let pointX = 60;
let pointY = height;
let mouseX = 0;
let mouseY = 0;
let bida = false;
let release = false;
let originX = 60;
let originY = height-6;
let pointedX,pointedY;


window.onload = startup();  
//drawBase();


function startup() {
    document.getElementById("canvas").onmousemove = mouseMove;
    setInterval("movePoint()",0);
}
function startShot() {
    clearInterval('movePoint');
    setInterval('shoot()',0);
}
function moveShot(){
    if(bida){

    }
    else{

    }
}
function drawShot(){
    ctx.beginPath();
    ctx.arc(originX,originY,5,0,2*Math.PI,true);
    ctx.fill();
    ctx.closePath();
}

function mouseMove(evt) {
    mouseX = evt.clientX;
    mouseY = evt.clientY;
}

//Teiknar miðarann
function movePoint() {
    if(bida){
        pointedX = pointX;
        pointedY = pointY;
        apep = -200+pointY;
        drawShot();

        //drawShot();
        //console.log(pointedX,pointedY);

    }else{
        pointX = mouseX; //Set endapunkt fleygbogans á samastað og músin. Þetta er X
        pointY = mouseY; //Þetta er Y

        ctx.clearRect(0, 0, width, height); //Till þess að hafa alltaf eina línu á skjánum þarf alltaf að eyða fyrri línum þar sem að canvas er alltaf að teikna. Þetta hreinsar gluggan.

        //Hér er ég að teikna fleygbogan
        ctx.setLineDash([5,3]);
        ctx.beginPath();
        ctx.moveTo(60, height-6); //Einn punkturinn er límdur við þessa staðsetningu og stækkar fleygboginn jafnt út frá staðsetningu músarinnar
        ctx.quadraticCurveTo(pointX-60, -200+pointY, pointX, height-6); //Þetta teiknar fleygbogan. X og Y eru notuð til þess að finna endapunkt og X-height er til þess að hafa hann alltaf jafnan en þetta gildi á að tákna miðju hans
        ctx.stroke(); 
        //Hérna teikna ég bolta við endapunkt bogans þar sem músin af því bara. !Ég sleppti því að teikna hann þar sem að ég uppfærði aðeins fleygbogann!
        /*ctx.beginPath(); 
        ctx.moveTo(pointX,pointY);
        ctx.arc(pointX,pointY,4,90,2*Math.PI,true);
        ctx.fill();*/
    }
}

function trigger(){
    //ctx.clearRect(0,0,width,height);
    if(release){
        setInterval('movePoint()',0);
        bida = false;
        release = false;
    }else{
        release = true;
        console.log(bida);
        console.log("lol");
        bida = true;
        console.log(bida);
    }
}

document.addEventListener('mousedown',trigger);


//Ovinasvæði

function drawBase(){
    base_ctx.beginPath();
    base_ctx.rect(100,floor,100,100);
    base_ctx.stroke();
}

/*
let oldX,oldY;
let count = 0;

function draw(e){
    count+=1
    ctx.beginPath();
    ctx.moveTo(60, height);
    ctx.quadraticCurveTo(170, -200, e.pageX, e.pageY);
    ctx.stroke(); 
    window.requestAnimationFrame(draw);
}
draw();
//window.addEventListener('mousemove', draw);
//window.addEventListener('mousedown', draw);
window.requestAnimationFrame(draw);
console.log(width);
console.log(height);

*/
