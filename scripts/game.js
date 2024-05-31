var hitrn = 0;
var score = 0;

var timeLimit = Number(
  window.location.search.substring(1, window.location.search.length)
);

document.querySelector("#timerval").textContent = timeLimit;
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
    if (currentTimer === 0) {
      clearInterval(timer);
      document.querySelector("#pbtm").style.display = "flex";
      // </div>`;
      document.querySelector("#pbtm").innerHTML = `<div id="gameover">
            <div id="message">Game Over!</div>
            <div id="score">Score: ${score} </div>
            <div id="refresh-btn">
              <p>Restart</p>
              <span class="material-symbols-outlined"> refresh </span>
            </div>
          </div>`;
      document
        .querySelector("#refresh-btn")
        .addEventListener("click", function () {
          window.location.reload();
        });
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
