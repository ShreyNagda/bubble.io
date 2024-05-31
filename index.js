document.querySelector("#submit-btn").addEventListener("click", function () {
  var timeVal = document.querySelector(`input[name="time"]:checked`).value;
  window.location = `/game.html?${timeVal}`;
});
