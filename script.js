/** @format */

const taillex = screen.width;
const tailley = screen.height;
function separation() {
  gsap.to(".carre1", {
    y: 0,
    x: 0,
    scale: 0.5,
    background: "red",
  });
  gsap.to(".carre2", {
    y: 0,
    x: taillex,
    scale: 0.5,
    background: "blue",
  });
  gsap.to(".carre3", {
    y: tailley,
    x: 0,
    scale: 0.5,
    background: "yellow",
  });
  gsap.to(".carre4", {
    y: tailley,
    x: taillex,
    scale: 0.5,
    background: "green",
  });
  grille();
}

function grille() {
  gsap.to(".carre1", {
    scale: 1,
    width: taillex,
    height: tailley,
    duration: 5,
  });
  gsap.to(".carre2", {
    scale: 1,
    width: taillex,
    height: tailley,
    duration: 5,
  });
  gsap.to(".carre3", {
    scale: 1,
    width: taillex,
    height: tailley,
    duration: 5,
  });
  gsap.to(".carre4", {
    scale: 1,
    width: taillex,
    height: tailley,
    duration: 5,
  });
}

const animationgd = gsap.to(".carre1, .carre2, .carre3, .carre4", {
  rotation: 360,
  x: taillex / 2,
  y: tailley / 2,
  duration: 5,
});

animationgd.then(() => {
  separation();
});
