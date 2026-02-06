const heartButton = document.querySelector("#heartButton");
const heartCloud = document.querySelector("#heartCloud");

const heartColors = ["#ff6fa7", "#ff93b6", "#ff4d88", "#ffb3c8", "#ff86a0"];

function createHeart() {
  const heart = document.createElement("span");
  heart.classList.add("heart");
  heart.textContent = "❤";
  heart.style.left = `${Math.random() * 90 + 5}%`;
  heart.style.color = heartColors[Math.floor(Math.random() * heartColors.length)];
  heart.style.animationDuration = `${2 + Math.random() * 1.5}s`;

  heartCloud.appendChild(heart);

  heart.addEventListener("animationend", () => {
    heart.remove();
  });
}

function launchHearts() {
  for (let i = 0; i < 12; i += 1) {
    setTimeout(createHeart, i * 120);
  }
}

heartButton.addEventListener("click", launchHearts);
