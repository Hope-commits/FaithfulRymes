function generatePoem(event) {
  event.preventDefault();

  new Typewrite("#poem", {
    strings: "Behold I come, the darkness lightens",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
