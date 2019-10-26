const countdown = document.querySelector(".countdown");
const launchDate = new Date("November 15, 2019").getTime();
const comingSoon = document.querySelector(".comingsoon");
const interval = setInterval(() => {
  const now = new Date().getTime();
  const distance = launchDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdown.innerHTML = `
  <div>${days}<span>Days</span></div>
  <div>${hours}<span>Hours</span></div>
  <div>${mins}<span>Min</span></div>
  <div>${seconds}<span>Secs</span></div>`;

  if (distance < 0) {
    clearInterval(interval);
    countdown.style.color = "#fff";
    countdown.style.fontSize = "2rem";
    countdown.style.fontWeight = "700";
    countdown.innerHTML = "Launched!";
    comingSoon.innerHTML = "";
  }
}, 1000);
