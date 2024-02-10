const button = document.getElementById("noButton");

const animateMove = (element, prop, pixels) =>
  anime({
    targets: element,
    [prop]: `${pixels}px`,
    easing: "easeOutCirc"
  });

["mouseover", "click"].forEach(function (el) {
  button.addEventListener(el, function (event) {
    const boxWidth = 450;
    const boxHeight = 650;

    const top = getRandomNumber(boxHeight - this.offsetHeight);
    
    // Randomly choose left or right movement
    const direction = getRandomNumber(2) === 0 ? -1 : 1;
    const left = getRandomNumber(boxWidth - this.offsetWidth) * direction;

    animateMove(this, "left", left).play();
    animateMove(this, "top", top).play();
  });
});

["click"].forEach(function (smol) {
  button.addEventListener(smol, function (event) {
    // Add click event logic here if needed
  });
});

const getRandomNumber = (num) => {
  return Math.floor(Math.random() * num);
};
