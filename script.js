let level = 0;

const texts = [
`Halooo ICHAA 💌
maaf yaa surat dari gue
selalu telat terus`,

`Selamat ulang tahun ya ichaaa 🎂
semoga kamu selalu panjang umur
dan disehatkan &&
selalu dikasi kebahagiaan 💖`,

`Jangan banyak ngayal ya 😆
yang penting..
makasih udah jadi temen aku
meski temenan sama aku
kamu banyak sedihnya
bukan senengnya :(
makasih ya ichaaa 🤍`,

`I love you bb! 💕
happy birthday <3 🎉`
];

function nextLevel() {
  const bgm = document.getElementById("bgm");
  const text = document.getElementById("text");
  const levelText = document.getElementById("level");
  const btn = document.getElementById("actionBtn");

  if (level === 0) {
    bgm.volume = 0.6;
    bgm.play();
  }

  if (level < texts.length) {
    levelText.innerText = "Level " + (level + 1);
    text.innerText = texts[level];
    btn.innerText = level === texts.length - 1 ? "FINISH 🎁" : "NEXT ➡️";
    level++;
  } else {
    levelText.innerText = "🎉 GAME CLEAR 🎉";
    text.innerText = "Terima kasih sudah main 💖\nSemoga ICHAA bahagia selalu 🤍";
    btn.style.display = "none";
    startConfetti();
  }
}

function startConfetti() {
  const container = document.getElementById("confetti-container");
  const colors = ["#ff69b4","#ffd1dc","#ffe4e1","#ffb6c1","#ffc0cb"];

  for (let i = 0; i < 120; i++) {
    const c = document.createElement("div");
    c.className = "confetti";
    c.style.left = Math.random() * 100 + "vw";
    c.style.background = colors[Math.floor(Math.random() * colors.length)];
    c.style.animationDuration = Math.random() * 3 + 2 + "s";
    container.appendChild(c);
    setTimeout(() => c.remove(), 5000);
  }
      }
