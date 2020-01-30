 var canvas=document.getElementById("canvas");
 var ctx=canvas.getContext("2d");
 var level=5;
 ctx.lineWidth=2;
	 ctx.strokeStyle="skyblue";
 ctx.beginPath()
 ctx.moveTo(80,canvas.height)
 ctx.lineTo(canvas.width/2,canvas.height-(canvas.width-160)/2*Math.sqrt(3))
 ctx.lineTo(canvas.width-80,canvas.height)
 ctx.closePath()
 ctx.stroke()
	 ctx.lineWidth=1;
	 ctx.strokeStyle="blue";
 ctx.beginPath()
 ctx.moveTo(80,canvas.height)
 ctx.lineTo(canvas.width/2,canvas.height-(canvas.width-160)/2*Math.sqrt(3))
 ctx.lineTo(canvas.width-80,canvas.height)
 ctx.closePath()
 ctx.stroke()
 draw(canvas.width/2,canvas.height,435/2)
 function draw(x,y,len){
	 if(len>=435/(2*Math.pow(2,level))){
	 ctx.strokeStyle="skyblue";
	 ctx.lineWidth=2;
	 ctx.beginPath()
	 ctx.moveTo(x,y);
	 ctx.lineTo(x-len*0.5,y-len*Math.sqrt(3)/2)
	 ctx.lineTo(x+len*0.5,y-len*Math.sqrt(3)/2)
	 ctx.closePath()
	 ctx.stroke()
	 ctx.strokeStyle="blue";
	 ctx.lineWidth=1;
	 ctx.beginPath()
	 ctx.moveTo(x,y);
	 ctx.lineTo(x-len*0.5,y-len*Math.sqrt(3)/2)
	 ctx.lineTo(x+len*0.5,y-len*Math.sqrt(3)/2)
	 ctx.closePath()
	 ctx.stroke()
	 draw(x-len/2,y,len/2)
	 draw(x+len/2,y,len/2)
	 draw(x,y-len*Math.sqrt(3)/2,len/2)
	 }
 }
 function clear(){
	 ctx.clearRect(0,0,canvas.width,canvas.height)
 }
 function changeLevel(){
	 clear()
	 level=document.getElementById("level").value;
	 draw(canvas.width/2,canvas.height,435/2);
 ctx.lineWidth=2;
	 ctx.strokeStyle="skyblue";
 ctx.beginPath()
 ctx.moveTo(80,canvas.height)
 ctx.lineTo(canvas.width/2,canvas.height-(canvas.width-160)/2*Math.sqrt(3))
 ctx.lineTo(canvas.width-80,canvas.height)
 ctx.closePath()
 ctx.stroke()
	 ctx.lineWidth=1;
	 ctx.strokeStyle="blue";
 ctx.beginPath()
 ctx.moveTo(80,canvas.height)
 ctx.lineTo(canvas.width/2,canvas.height-(canvas.width-160)/2*Math.sqrt(3))
 ctx.lineTo(canvas.width-80,canvas.height)
 ctx.closePath()
 ctx.stroke()
 }