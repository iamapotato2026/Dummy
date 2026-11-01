const star = document.getElementById('star');
const alien = document.getElementById('alien');
const score = document.getElementById('score');
let count = 0;

function jump(){
    if (!star.classList.contains('jump-animation')){
        star.classList.add('jump-animation');
        setTimeout(() => {
            star.classList.remove('jump-animation');
        }, 600);
    }
}

document.addEventListener('keydown', (event) => {
    if (event.code === 'Space' || event.key === ' ') {
        jump();
    }
});

let checkDead = setInterval(() => {
    count++;
    score.innerText = Math.floor(count / 10);

    let starBottom = parseInt(window.getComputedStyle(star).getPropertyValue('bottom'));
    let alienLeft = parseInt(window.getComputedStyle(alien).getPropertyValue('left'));

    if (alienLeft < 180 && alienLeft > 80 && starBottom < 80) {
        alert("YOU GOT A SCORE OF: " + score.innerText + "\n\nPlay again?");
        count = 0;
        location.reload();
    }
}, 50);

