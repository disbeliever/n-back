const showTime = 500;
const N = 2;
var ctx;
var bgImage;
var started = false;
var set_to;
var set_int;

function startGame()
{
  var correct = 0;
  var wrong = 0;
  if (started)
  {
    stopGame();
    return;
  }
  else 
  {
    started = true;
    document.getElementById("startButton").innerHTML = "Stop";
  }

  function stopGame()
  {
    started = false;
    document.getElementById("startButton").innerHTML = "Start";
    removeEventListener("keydown");
    clearInterval(set_int);
    clearTimeout(set_to);
  }


  i_vals = Array();
  j_vals = Array();
  key_pressed = false;
  function drawAndClear()
  {
    key_pressed = false;
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
    set_to = setTimeout(function() {
      if (!key_pressed && i_vals.length > N && i_vals[0] == rand_i && j_vals[0] == rand_j)
      {
        key_pressed = true;
        wrong++;
        document.getElementById("wrong").innerHTML = wrong;
      }
      ctx.drawImage(bgImage, 0, 0, 64, 64, rand_i*64, rand_j*64, 64, 64) }, showTime);
    //console.log(i_vals);
  }

  addEventListener("keydown", function (e) {
    //keysDown[e.keyCode] = true;
    if (e.keyCode == 32 && i_vals.length > N && !key_pressed)
    {
      key_pressed = true;
      if (i_vals[0] == rand_i && j_vals[0] == rand_j)
      {
        correct++;
        if (correct == 10)
        {
          stopGame();
        }
        document.getElementById("correct").innerHTML = correct;
        //console.log("correct");
      }
      else
      {
        wrong++;
        document.getElementById("wrong").innerHTML = wrong;
        //console.log("wrong");
      }
    }
  }, false);

  set_int = setInterval(drawAndClear, showTime * 3);
}

function init()
{
  ctx = document.getElementById("nback").getContext("2d");

  var bgReady = false;
  bgImage = new Image();
  bgImage.src = "res/square.png";

  bgImage.onload = function () {
    bgReady = true;

    for (i=0; i < 3; i++) {
      for (j=0; j < 3; j++) {
        ctx.drawImage(bgImage, 0, 0, 64, 64, i*64, j*64, 64, 64);
      }
    }


  };

  //ctx.fillStyle = "rgb(0, 0, 0)";
  //ctx.font = "24px Helvetica";
  //ctx.textAlign = "left";
  //ctx.textBaseline = "top";
  //ctx.fillText("Правильно: " + correct, 5, 200);
  //ctx.fillText("Неправильно: " + wrong, 5, 225);
};
