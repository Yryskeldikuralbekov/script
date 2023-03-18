const timerShow = document.querySelector(".timer");
const endTime = document.querySelector(".endTime");
function time() {
  timerShow.value = parseInt(timerShow.value) + 1;
  if (timerShow.value == 60) {
    endTime.innerHTML = "Время вышло";
    setTimeout(() => clearInterval(timer), endTime);
    let positionX1 = 0;
    let positionX2 = 0;
    let positionX3 = 0;
    let positionX4 = 0;
    let positionY = 0;
    let positionYY = 0;
    let positionY1 = 0;
    let positionY2 = 0;
    let positionY3 = 0;
    let positionY4 = 0;

    const block3 = document.querySelector(".block3");

    function moveBlock() {
      if (positionX1 <= 220 && positionY1 <= 220) {
        positionX1 += 18;
        block3.style.left = positionX1 + "px";
        positionY1 -= 9;
        block3.style.top = positionY1 + "px";
        setTimeout(moveBlock, 100);
        positionX2 = positionX1;
        positionY2 = positionY1;
      } else if (positionX2 <= 450 && positionY2 <= 450) {
        positionX2 += 18;
        block3.style.left = positionX2 + "px";
        positionY2 += 9;
        block3.style.top = positionY2 + "px";
        setTimeout(moveBlock, 100);
        positionY = positionX2;
        positionY = positionY2;
      } else if (positionY <= 235) {
        positionY += 18;
        block3.style.top = positionY + "px";
        setTimeout(moveBlock, 100);
        positionX3 = positionX2;
        positionY3 = positionY;
      } else if (250 <= positionX3 && 230 <= positionY3) {
        positionX3 -= 18;
        block3.style.left = positionX3 + "px";
        positionY3 += 8;
        block3.style.top = positionY3 + "px";
        setTimeout(moveBlock, 100);
        positionX4 = positionX3;
        positionY4 = positionY3;
      } else if (10 <= positionX4 && 0 <= positionY4) {
        positionX4 -= 18;
        block3.style.left = positionX4 + "px";
        positionY4 -= 8;
        block3.style.top = positionY4 + "px";
        setTimeout(moveBlock, 100);
        positionYY = positionX4;
        positionYY = positionY4;
      } else if (10 <= positionYY) {
        positionYY -= 18;
        block3.style.top = positionYY + "px";
        setTimeout(moveBlock, 100);
      }
    }

    moveBlock();
  }
}
const timer = setInterval(time, 200);
