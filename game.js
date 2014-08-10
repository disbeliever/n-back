const showTime = 500;

function init() {
  var ctx = document.getElementById("nback").getContext("2d");

  var bgReady = false;
  var bgImage = new Image();
  bgImage.src = "res/square.png";

  bgImage.onload = function () {
    bgReady = true;

    for (i=0; i < 3; i++) {
      for (j=0; j < 3; j++) {
        ctx.drawImage(bgImage, 0, 0, 64, 64, i*64, j*64, 64, 64);
      }
    }

    function drawAndClear()
    {
      rand_i = Math.floor((Math.random() * 3));
      rand_j = Math.floor((Math.random() * 3));
      ctx.drawImage(bgImage, 64, 0, 64, 64, rand_i*64, rand_j*64, 64, 64);
      setTimeout(function() { ctx.drawImage(bgImage, 0, 0, 64, 64, rand_i*64, rand_j*64, 64, 64) }, showTime);
    }

    setInterval(drawAndClear, showTime * 2);
  };

  //ctx.fillStyle = "rgb(0, 0, 0)";
  //ctx.font = "24px Helvetica";
  //ctx.textAlign = "left";
  //ctx.textBaseline = "top";
  //ctx.fillText(showTime, 32, 32);
};
