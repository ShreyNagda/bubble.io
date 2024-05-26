var hitrn = 0;
var score = 0;
var timeLimit = 10;

function incrementScore() {
  score += 10;
  document.querySelector("#scoreval").textContent = score;
}

function makeNewRandomHit() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").textContent = hitrn;
}

function startTimer() {
  currentTimer = timeLimit;
  var timer = setInterval(function () {
    if (currentTimer <= 0) {
      clearInterval(timer);
      //   document.querySelector(
      //     "#pbtm"
      //   ).innerText = `<div style="height: auto;">Game Over</div>`;
      document.querySelector(
        "#pbtm"
      ).innerHTML = `<div><div id="gameover">Game Over!</div><div>Refresh to Restart</div><div>Your Score: ${score}</div></div>`;
    } else {
      currentTimer--;
      document.querySelector("#timerval").textContent = currentTimer;
    }
  }, 1000);
}

function makeBubble() {
  cluster = ``;
  for (var i = 0; i < 120; i++) {
    rn = Math.floor(Math.random() * 10);
    cluster += `<div class="bubble">${rn}</div>`;
  }
  document.querySelector("#pbtm").innerHTML = cluster;
}

document.querySelector("#pbtm").addEventListener("click", function (ev) {
  current_choice = Number(ev.target.textContent);
  if (current_choice === hitrn) {
    incrementScore();
    makeBubble();
    makeNewRandomHit();
  }
});
makeBubble();
startTimer();
makeNewRandomHit();
