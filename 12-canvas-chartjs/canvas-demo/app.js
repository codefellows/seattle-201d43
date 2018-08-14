var canvas = document.getElementsByTagName('canvas')[0];
if (canvas.getContext) {
  var ctx = canvas.getContext('2d');
  // from console...
  ctx.beginPath();
  ctx.arc(150, 75, 75, 0, Math.PI);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(150, 75, 75, 0, Math.PI, true);
  ctx.fill();
}
