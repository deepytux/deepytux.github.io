const container = document.getElementById('container');
const balls = [];

function createBall() {
  const ball = document.createElement('div');
  ball.classList.add('ball');
  container.appendChild(ball);

  const size = Math.random() * 50 + 20; // Random ball size between 20 and 70 pixels
  ball.style.width = `${size}px`;
  ball.style.height = `${size}px`;

  const posX = Math.random() * (container.offsetWidth - size);
  const posY = Math.random() * (container.offsetHeight - size);
  ball.style.left = `${posX}px`;
  ball.style.top = `${posY}px`;

  const deltaX = (Math.random() - 0.5) * 2; // Random horizontal velocity
  const deltaY = (Math.random() - 0.5) * 2; // Random vertical velocity

  balls.push({ ball, posX, posY, size, deltaX, deltaY });
}

function update() {
  balls.forEach(ballInfo => {
    const { ball, posX, posY, size, deltaX, deltaY } = ballInfo;

    let newPosX = posX + deltaX;
    let newPosY = posY + deltaY;

    if (newPosX < 0 || newPosX > container.offsetWidth - size) {
      ballInfo.deltaX = -deltaX;
      newPosX += ballInfo.deltaX * 2; // Move the ball away from the wall
    }

    if (newPosY < 0 || newPosY > container.offsetHeight - size) {
      ballInfo.deltaY = -deltaY;
      newPosY += ballInfo.deltaY * 2; // Move the ball away from the wall
    }

    ballInfo.posX = newPosX;
    ballInfo.posY = newPosY;

    ball.style.left = `${newPosX}px`;
    ball.style.top = `${newPosY}px`;
  });

  requestAnimationFrame(update);
}

for (let i = 0; i < 50; i++) {
  createBall();
}

update();
