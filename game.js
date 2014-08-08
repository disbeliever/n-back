function init() {
  var ctx = document.getElementById("nback").getContext("2d");

  var bgReady = false;
  var bgImage = new Image();
  bgImage.onload = function () {
    bgReady = true;

    for (i=0; i < 3; i++) {
      for (j=0; j < 3; j++) {
        ctx.drawImage(bgImage, 0, 0, 64, 64, i*64, j*64, 64, 64);
      }
    }

  };
  bgImage.src = "res/square.png";

  //ctx.fillStyle = "rgb(0, 0, 0)";
  //ctx.font = "24px Helvetica";
  //ctx.textAlign = "left";
  //ctx.textBaseline = "top";
  //ctx.fillText("test", 32, 32);

};

