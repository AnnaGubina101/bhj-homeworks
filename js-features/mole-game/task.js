let dead = document.getElementById("dead");
let lost = document.getElementById("lost");
let hole = document.querySelectorAll('.hole')
let score = 0;
let misses = 0;

function getHole(index) {
  return document.getElementById(`hole${index}`);
}

function catchMole(e) {
  if (e.target.classList.contains('hole_has-mole')) {
      dead.textContent = ++score;
  } else {
      lost.textContent = ++misses;
  }

  if (score === 10) {
    endGame('Победа! Вы победили кротов!');
} else if (misses === 5) {
    endGame('Игра окончена! Вы проиграли.');
}
}

function endGame(message) {
  alert(message);
  score = 0;
  misses = 0;
  dead.textContent = score;
  lost.textContent = misses;
}

hole.forEach((holes, index) => {
  holes.addEventListener('click', catchMole);
});