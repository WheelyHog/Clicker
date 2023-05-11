function clickObject() {
  const object = document.getElementById('#object');
  const score = document.getElementById('#score');
  let countScore = 0;

  function incrScore() {
    countScore++;
    score.textContent = countScore;
  }

  object.addEventListener('click', incrScore);
}
