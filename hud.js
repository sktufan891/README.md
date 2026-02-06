const c=document.getElementById("hud");
const ctx=c.getContext("2d");

function resize(){
  c.width=innerWidth;
  c.height=innerHeight;
}
resize();
window.onresize=resize;

function draw(){
  ctx.clearRect(0,0,c.width,c.height);
  ctx.strokeStyle="#00e5ff";
  ctx.lineWidth=2;
  ctx.beginPath();
  ctx.arc(c.width/2,c.height/2,120,0,Math.PI*2);
  ctx.stroke();
  requestAnimationFrame(draw);
}
draw();
