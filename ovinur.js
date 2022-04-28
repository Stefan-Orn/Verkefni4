const ctx_ovinur = document.querySelector('canvas').getContext('2d');

ctx_ovinur.beginPath();
ctx_ovinur.arc(100,100,20,0,Math.PI*2);
ctx_ovinur.stroke();