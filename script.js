let circle = document.querySelector(".circle");
let button = document.querySelector("#btn");
window.addEventListener("mousemove", function (details) {
  let xValue = details.clientX;
  let yValue = details.clientY;
  this.setTimeout(function () {
    circle.style.top = `${yValue}px`;
    circle.style.left = `${xValue}px`;
  }, 50); // 50 indicates .05 second
});

btn.addEventListener("click", function () {
  timeline.reverse();
});

var timeline = gsap.timeline();

timeline

  .from(".wrapper", {
    duration: 4,
    scale: 0.7, // 70% bada  to starting me hi hoga
    ease: "Expo.easeInOut",
    opacity: 0,
  })

  .from(
    ".whitestrip",
    {
      duration: 2,
      width: 0,
      ease: "Expo.easeInOut",
    },
    "-=2.5"
  )

  .from(
    ".blackcard",
    {
      duration: 1.5,
      x: 50,
      opacity: 0,
      ease: "Expo.easeInOut",
    },
    "-=1"
  )

  .from(
    ".linelem .line",
    {
      duration: 2.5,
      width: 0,
      opacity: 0,
      ease: "Expo.easeInOut",
    },
    "-=1"
  )
  .from(
    ".blackcard p",
    {
      duration: 1.2,
      y: 30,
      opacity: 0,
      ease: "Expo.easeInOut",
    },
    "-=2"
  )
  .from(
    "#sideelem",
    {
      opacity: 0,
      duration: 2,
      x: 30,
      ease: "Expo.easeInOut",
    },
    "-=2"
  );
