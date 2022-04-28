
const canvas = document.getElementById('can1')
const ctx = canvas.getContext('2d');
const width = canvas.width = innerWidth;
const height = canvas.height = innerHeight;
let mouseX = 0
let mouseY = 0
let ovinir_pos = {
    kall1: {
        x: width/2,
        y: height/2,
        size: 100
        },
    kall2: {
        x: 100,
        y: 100,
        size: 100
        },
    kall3: {
        x: 200,
        y: 200,
        size: 100
    }
}
let position = [];
let ovinirL = Object.keys(ovinir_pos).length;
//console.log(Object.keys(ovinir_pos).length);
function mouseMove(e){
    mouseX = e.clientX;
    mouseY = e.clientY;
}
document.addEventListener('mousemove', mouseMove)
function ovinir(){
    for(let i = 1; i < ovinirL+1; i++){
        let kall = "kall"+i.toString();
        
        ctx.beginPath();
        ctx.fillStyle = 'red';
        ctx.fillRect(ovinir_pos[kall].x,ovinir_pos[kall].y,ovinir_pos[kall].size,ovinir_pos[kall].size);
    }
}
function animate(){
    


    // Teikni partur
    ctx.beginPath();
    ctx.clearRect(0,0,width,height)
    ovinir();
    collition();
    ctx.rect(mouseX-50,mouseY-50,100,100);
    ctx.stroke();
    requestAnimationFrame(animate)
}

function collition(naer){
    for(let i = 1; i < 2; i++){
        //console.log(ovinir_pos["kall"+i.toString()]["x"+i.toString()],"Yess") Var að debuga mikið þar sem að ég gleymdi () fyrir aftan toString
        position.push(ovinir_pos["kall"+i.toString()]["x"+i.toString()]) // X stadsetning
        position.push(ovinir_pos["kall"+i.toString()]["y"+i.toString()]) // Y stadstenign
    }
    //onsole.log(position);
    if(mouseX+50 >= width/2/**ovina pos */ && mouseX-50 <= width/2 +100/**ovina pos */ 
    && mouseY+50 >= height/2/**ovina pos */ && mouseY-50 <= height/2 +100/**ovina pos */){
        console.log("Hallo")
    }
}

// Þetta var partur af toString() debuginu
let lol = [
//let pos = [];
//let i2= 1;
//pos.push(ovinir_pos.kall1.x1);
//pos.push(ovinir_pos["kall1"]["x1"]);
//pos.push(ovinir_pos["kall"+i.toString()]["x"+i.toString()]);
//console.log(ovinir_pos["kall"+i2.toString()]["x"+i2.toString()]);
//console.log(pos);
]
animate();

