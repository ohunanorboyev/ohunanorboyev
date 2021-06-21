let gap = document.querySelector('#gap');
let jump = false;
let points = 0;



gap.addEventListener("animationiteration", (e) => {
    let top = Math.floor(Math.random() * 400) + 100;
    gap.style.top = -top + "px";
    points = points + 1;
    document.querySelector('#score').innerHTML = points;
})

let fall = setInterval(() => {
    let ball = document.querySelector('#ball');
    let top = parseInt(window.getComputedStyle(ball).getPropertyValue("top"))

    let ballheight = ball.getBoundingClientRect().height;
    if (top >= 541 - ballheight) {
        alert("Game Over")
        clearInterval(fall)
        window.location.reload()
    }
    let gapbound = document.querySelector('#gap').getBoundingClientRect();
    let ballbound = document.querySelector('#ball').getBoundingClientRect();

    if (ballbound.left >= gapbound.left && !(ballbound.top > gapbound.top
         && ballbound.bottom < gapbound.bottom)) {
        alert('Game Over');
        window.location.reload()
    }

    if (!jump) ball.style.top = top + 10 + "px";


}, 50)

window.addEventListener("keydown", (e) => {
    if (e.key == "ArrowUp") {
        jump = true
        let ball = document.querySelector('#ball');
        let top = parseInt(window.getComputedStyle(ball).getPropertyValue("top"));
        ball.style.top = top - 40 + "px"

        setTimeout(() => {
            jump = false;
        }, 150)
    }
})