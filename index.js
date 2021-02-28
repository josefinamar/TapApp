window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sound");
  const pads = document.querySelectorAll(".pads div");
  const visual = document.querySelector(".visual");
  const colors = [
    "#1bd5ed",
    "#4a9cff",
    "#961bee",
    "#d71ed1",
    "#ff2c92",
    "#f6bb28"
  ];

  //Hacer funcionar el sonido
  pads.forEach((pad, index) => {
    pad.addEventListener("click", function() {
      sounds[index].currentTime = 0;
      sounds[index].play();
    });
  });
});
