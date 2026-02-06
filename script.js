const heartButton = document.querySelector("#heartButton");
const heartCloud = document.querySelector("#heartCloud");

const heartColors = ["#ff3d8d", "#ff87c5", "#ff5aa6", "#ffd1e6", "#ff9bd4"];

function createHeart() {
  const heart = document.createElement("span");
  heart.classList.add("heart");
  heart.textContent = "❤";
  heart.style.left = `${Math.random() * 90 + 5}%`;
  heart.style.color = heartColors[Math.floor(Math.random() * heartColors.length)];
  heart.style.animationDuration = `${2 + Math.random() * 1.6}s`;

  heartCloud.appendChild(heart);

  heart.addEventListener("animationend", () => {
    heart.remove();
  });
}

function createSparkle() {
  const sparkle = document.createElement("span");
  sparkle.classList.add("sparkle");
  sparkle.style.left = `${Math.random() * 90 + 5}%`;
  sparkle.style.top = `${Math.random() * 60 + 10}%`;
  sparkle.style.animationDuration = `${1.6 + Math.random() * 1.4}s`;

  heartCloud.appendChild(sparkle);

  sparkle.addEventListener("animationend", () => {
    sparkle.remove();
  });
}

function launchHearts() {
  for (let i = 0; i < 14; i += 1) {
    setTimeout(createHeart, i * 110);
  }
  for (let i = 0; i < 10; i += 1) {
    setTimeout(createSparkle, i * 140);
  }
}

heartButton.addEventListener("click", launchHearts);
