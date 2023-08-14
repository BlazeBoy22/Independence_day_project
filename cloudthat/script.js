 var c= document.getElementById('flag');
 var $ = c.getContext('2d');

 var w=c.width=window.innerWidth;
 var h=c.height=window.innerHeight;

 var flagflow=function(a,b,t){
    $.lineWidth=0.5;
    $.fillStyle='white';
    $.fillRect(0,0,w,h);
 

for(var i=-60;i<60;i+=1)
{
    $.strokeStyle='rgba(255,153,51,0.8)';
    $.beginPath();
    $.moveTo(0,h/2);
    for(var j=0;j<w;j+=10)
    {
        $.lineTo(10*Math.sin(i/10)+j+0.008*j*j,
        Math.floor(h/2+j/2*Math.sin(j/50-t/50-i/118)+(i*0.9)*Math.cos(j/25-(i+t)/65)));
    };
$.stroke();
}

//white color
for(var i=-60;i<60;i+=1)
{
    $.strokeStyle='rgba(255,255,255,0.5)';
    $.beginPath();
    $.moveTo(0,h/2);
    for(var j=0;j<w;j+=10)
    {
      $.lineTo(10*Math.cos(i/10)+j+0.008*j*j,Math.floor(h/2+j/2*Math.sin(j/50-t/50-i/118)+(i*0.9)*Math.sin(j/25-(i+t)/65)));
    }
    $.stroke();
}
//greencolor
for(var i=-60;i<60;i+=1)
{
    $.strokeStyle='rgba(19,136,8,0.5)';
    $.beginPath();
    $.moveTo(0,h/2);
    for(var j=0;j<w;j+=10)
    {
      $.lineTo(10*Math.cos(i/10)+j+0.008*j*j,Math.floor(h/2+j/2*Math.sin(j/50-t/50-i/118)+(i*0.9)*Math.sin(j/25-(i+t)/65)));
    }
    $.stroke();
}
 }

 var t=0;

 window.addEventListener('resize',function(){
    c.width=w=window.innerWidth;
    c.height=h=window.innerHeight;
    $.fillStyle='hsla(277,95%,55%,1)';
 },false);

//  var run=function(){
//     window.requestAnimationFrame();
//     t+=1;
//  }
 var run = function () {
    flagflow(0, 0, t); // Call the flagflow function with appropriate parameters
    t += 1;
    window.requestAnimationFrame(run);
};

 run();