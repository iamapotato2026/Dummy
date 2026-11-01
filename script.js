const star = document.getElementById('star');
const alien = document.getElementById('alien');
const score = document.getElementById('score');

function jump(){
    star.classList.add('jump-animation');
    setTimeout(() => {
        star.classList.remove('jump-animation');
    }, 750);
}

document.addEventListener('keypress', () => {
    if (!star.classList.contains('jump-animation')){
    jump();
    }
});

setInterval(() => {
    score.innerText++;
    const starTop = parseInt(window.getComputedStyle(star)
    .getPropertyValue('top'));
    const alienLeft = parseInt(window.getComputedStyle(alien)
    .getPropertyValue('left'));

    if (alienLeft < 0) {
        alien.style.display = 'none';
    } else {
        alien.style.display = '';
    }

    if (alienLeft < 50 && alienLeft > 0 && starTop > 150) {
        alert("YOU GOT A SCORE OF: " + score.innerText + 
        "\n\nPlay again?");
        location.reload();
    }
}, 50);
