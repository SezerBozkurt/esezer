const heartButton = document.querySelector("#heartButton");
const heartCloud = document.querySelector("#heartCloud");
const keyButton = document.querySelector("#keyButton");
const lock = document.querySelector("#lock");
const vows = document.querySelector("#vows");

const heartColors = ["#ff2d75", "#ff7ab8", "#ff5aa6", "#ffd1e6", "#ff9bd4"];
let keyReady = false;

function createHeart(origin = heartCloud) {
  const heart = document.createElement("span");
  heart.classList.add("heart");
  heart.textContent = "❤";
  heart.style.left = `${Math.random() * 90 + 5}%`;
  heart.style.color = heartColors[Math.floor(Math.random() * heartColors.length)];
  heart.style.animationDuration = `${2 + Math.random() * 1.6}s`;

  origin.appendChild(heart);

  heart.addEventListener("animationend", () => {
    heart.remove();
  });
}

function createSparkle(origin = heartCloud, x = null, y = null) {
  const sparkle = document.createElement("span");
  sparkle.classList.add("sparkle");
  sparkle.style.left = x ? `${x}px` : `${Math.random() * 90 + 5}%`;
  sparkle.style.top = y ? `${y}px` : `${Math.random() * 60 + 10}%`;
  sparkle.style.animationDuration = `${1.6 + Math.random() * 1.4}s`;

  origin.appendChild(sparkle);

  sparkle.addEventListener("animationend", () => {
    sparkle.remove();
  });
}

function launchHearts() {
  for (let i = 0; i < 14; i += 1) {
    setTimeout(() => createHeart(), i * 110);
  }
  for (let i = 0; i < 10; i += 1) {
    setTimeout(() => createSparkle(), i * 140);
  }
}

function armKey() {
  keyReady = !keyReady;
  keyButton.classList.toggle("active", keyReady);
  keyButton.setAttribute("aria-pressed", String(keyReady));
  keyButton.textContent = keyReady ? "🗝️ Anahtar Hazır" : "🗝️ Anahtarı Al";
}

function unlockHeart() {
  if (!keyReady || lock.classList.contains("unlocked")) {
    return;
  }
  lock.classList.add("unlocked");
  vows.classList.add("revealed");
  vows.setAttribute("aria-hidden", "false");
  keyReady = false;
  keyButton.classList.remove("active");
  keyButton.setAttribute("aria-pressed", "false");
  keyButton.textContent = "🗝️ Anahtarı Al";
  launchHearts();
}

function spawnClickSparkle(event) {
  const sparkle = document.createElement("span");
  sparkle.classList.add("sparkle");
  sparkle.style.left = `${event.clientX}px`;
  sparkle.style.top = `${event.clientY}px`;
  sparkle.style.animationDuration = "1.2s";
  document.body.appendChild(sparkle);
  sparkle.addEventListener("animationend", () => sparkle.remove());
}

heartButton.addEventListener("click", launchHearts);
keyButton.addEventListener("click", armKey);
lock.addEventListener("click", unlockHeart);

document.body.addEventListener("click", (event) => {
  if (
    event.target === heartButton ||
    event.target === keyButton ||
    lock.contains(event.target)
  ) {
    return;
  }
  spawnClickSparkle(event);
});
