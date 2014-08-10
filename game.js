const showTime = 500;
const N = 2;

function init() {
  var ctx = document.getElementById("nback").getContext("2d");

  var correct = 0;
  var wrong = 0;
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

    i_vals = Array();
    j_vals = Array();
    function drawAndClear()
    {
      rand_i = Math.floor((Math.random() * 3));
      rand_j = Math.floor((Math.random() * 3));
      i_vals.push(rand_i);
      j_vals.push(rand_j);
      if (i_vals.length > N + 1)
      {
        i_vals.shift();
        j_vals.shift();
      }
      ctx.drawImage(bgImage, 64, 0, 64, 64, rand_i*64, rand_j*64, 64, 64);
      setTimeout(function() { ctx.drawImage(bgImage, 0, 0, 64, 64, rand_i*64, rand_j*64, 64, 64) }, showTime);
      //console.log(i_vals);
    }

    addEventListener("keydown", function (e) {
      //keysDown[e.keyCode] = true;
      if (e.keyCode == 32 && i_vals.length > N)
      {
        //console.log(i_vals);
        //console.log(j_vals);
        if (i_vals[0] == rand_i && j_vals[0] == rand_j)
        {
          correct++;
          document.getElementById("correct").innerHTML = "Правильно: " + correct;
          //console.log("correct");
        }
        else
        {
          wrong++;
          document.getElementById("wrong").innerHTML = "Неправильно: " + wrong;
          //console.log("wrong");
        }
      }
    }, false);

    setInterval(drawAndClear, showTime * 3);
  };

  //ctx.fillStyle = "rgb(0, 0, 0)";
  //ctx.font = "24px Helvetica";
  //ctx.textAlign = "left";
  //ctx.textBaseline = "top";
  //ctx.fillText("Правильно: " + correct, 5, 200);
  //ctx.fillText("Неправильно: " + wrong, 5, 225);
};
