let dead = document.getElementById("dead");
let lost = document.getElementById("lost");
let hole = document.getElementById('hole');

function click () {
  hole.forEach(holes => {
    if( holes.includes(document.getElementsByClassName('hole_has-mole'))) {
        return dead.textContent++;
    } else {
        return lost.textContent++;
    }
  });
}

hole.onclick = click;

if(lost.textContent === 5) {
    alert('Вы проиграли!');
} else if (dead.textContent === 10) {
    alert('Вы победили!');
}