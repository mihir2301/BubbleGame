var r;
var score=0;
var st="";
function makebubble(){
var clutter="";
for(var i=1;i<=133;i++)
{
   var rn= Math.floor(Math.random()*10);
    clutter +=` <div class="bubble">${rn}</div>`;
}

document.querySelector("#pb").innerHTML=clutter;
}
function timers(){
    var time=60;
     var tt=setInterval(function(){
        if(time>0){
        time--;
        document.querySelector("#timer").innerHTML=time;
    }
    else{
        clearInterval(tt);
       
  
    document.querySelector("#pb").innerHTML=`<h1>GAME OVER</h1>`;
    }
    },1000);
    
}
function hitval(){
     r=Math.floor(Math.random()*10);
    document.querySelector("#hitval").innerHTML=r;
}
function increasescore(){
    score +=10;
    document.querySelector("#scoreval").innerHTML=score;
}
document.querySelector("#pb").addEventListener("click",function(dets){
    var clickno=Number(dets.target.textContent);
    if(clickno===r)
    {
     increasescore();   
     makebubble();
     hitval();
    }
    else{
        makebubble();
        hitval();
    }
} )  
     hitval();
     makebubble();
     timers();



