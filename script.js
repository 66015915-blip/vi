
const colors = ['#00db92ff', '#724ae0ff', '#ab5ed8ff', '#5d94e7ff', '#ff31e4ff', '#b6bbffff'];

function createBalloon() {
    const balloon = document.createElement('div');
    balloon.classList.add('balloon');
    balloon.style.left = Math.random() * 100 + 'vw';
    balloon.style.background = colors[Math.floor(Math.random() * colors.length)];
    balloon.style.animationDuration = (Math.random() * 3 + 3) + 's';
    document.querySelector('.balloons').appendChild(balloon);
    setTimeout(() => {
        balloon.remove();
    }, 6000);
}

setInterval(createBalloon, 300);
