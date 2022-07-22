window.requestAnimFrame = (function(callback) {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
        function(callback) {
          window.setTimeout(callback, 1000 / 60);
      };
     })();

var number = 5,
    radius = 10,
    x = 150,
    y = 300;
    function draw(parameteres, ctx)
    {
   for (var i = 0; i < number; i++) {
	ctx.beginPath();
   ctx.arc(x, y, radius,0,360*Math.PI/180);
   ctx.shadowBlur=5;
   ctx.shadowColor="gray";
	ctx.fillStyle="#00E6E6";
	ctx.fill();

	ctx.beginPath();
	ctx.arc(x,y,(30*i),225*Math.PI/180,315*Math.PI/180);
   ctx.shadowBlur=parameteres.blur;
	ctx.strokeStyle=parameteres.color[i];
	ctx.lineWidth=2*radius;
	ctx.stroke();

    ctx.shadowBlur=0;
    ctx.fillStyle="#0099CC";
    ctx.beginPath();
    ctx.fillRect(x+298,y-50, 5,100);
    ctx.fill();

    ctx.shadowBlur=5;
    ctx.beginPath();
    ctx.arc(x+300, (y-50), radius,0, 2*Math.PI);
    ctx.fillStyle="#0099CC";
    ctx.fill();

    ctx.shadowBlur=parameteres.blur;
    ctx.beginPath();
    ctx.arc(x+300,y-50,(30*i),-45*Math.PI/180,45*Math.PI/180);
    ctx.strokeStyle=parameteres.color2[i];
    ctx.lineWidth=1*radius;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(x+300,y-50,(30*i),135*Math.PI/180,225*Math.PI/180);
    ctx.strokeStyle=parameteres.color2[i];
    ctx.lineWidth=1*radius;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(x+650, (y-50), radius,0, 2*Math.PI);
    ctx.fillStyle="#00CCFF";
    ctx.fill();

    ctx.shadowBlur=parameteres.blur;
    ctx.strokeStyle="#00CCFF";
    ctx.lineWidth=5;
    for (var b = 0; b < 4; b++){
    ctx.beginPath();
    ctx.arc(x+650,y-50,(30*i)+(parameteres.rad[i]+i),(-25+(90*b))*Math.PI/180,(25+(90*b))*Math.PI/180);
    ctx.stroke(); 
    }
	}
    }

    var bool = 0;
    var speed = 1;
    var n = 1;
    function animate(parameteres, canvas, ctx) {
    parameteres.blur = Math.random()*10+10;
    var n = bool % 10;

    if (n == 0 && n != 50) {
    parameteres.color[bool/10] = "#00E6E6"; 
    parameteres.color2[bool/10] = "#0099CC";
    bool = bool + speed;
    }
    else if (bool == 56) {
    for (var k = 1; k < 5; k++) {
    parameteres.color[k] = "black";
    parameteres.color2[k] = "black";
    }
    bool = 0;
    }
    else
    bool = bool + speed;

    for (var a = 0; a < 5; a++)
    {
    if (parameteres.rad[0] < 30)
    parameteres.rad[a]+=speed/2;
    else
    parameteres.rad[a] = 0;
}
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    draw(parameteres, ctx);

    requestAnimFrame(function (){
    animate(parameteres, canvas, ctx);
    });
}
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    var parameteres = {
    blur: Math.random()*10+10,
    color: ["black","black","black","black","black"],
    color2: ["black","black","black","black","black"],
    rad: [0,0,0,0,0]
    };

    draw(parameteres, ctx);
    animate(parameteres, canvas, ctx);