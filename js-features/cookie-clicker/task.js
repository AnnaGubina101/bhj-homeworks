const click = document.getElementById("clicker__counter");
const cookieSize = document.getElementById("cookie");

function changeCookie() {
    click.textContent++;
    if(click.textContent % 2 === 0){
        cookieSize.width = 200;
    } else {
        cookieSize.width = 150;
    }
}
cookieSize.onclick = changeCookie;

