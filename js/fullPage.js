new fullpage("#fullpage", {
  anchors: ["inicio", "Presentacion", "Proyectos", "Contacto"],
  scrollingSpeed: 600,
  autoScrolling: true,
  easing: "easeInOutCubic",
  css3: true,
  easingcss3: "ease-out",
  loopBottom: false,

  navigation: true,
  navigationPosition: "left",

  anchors: ["inicio", "Presentacion", "Proyectos", "Contacto"],
  navigationTooltips: ["inicio", "Presentacion", "Proyectos", "Contacto"],
  showActiveTooltip: false,

  onLeave: function (origin, destination) {
    let body = document.body;
    let circle1 = document.querySelector(".circle-big1");
    let outlineCircle1 = document.querySelector(".outlineCircle1");
    let circle2 = document.querySelector(".circle-big2");
    let outlineCircle2 = document.querySelector(".outlineCircle2");

    const width = window.innerWidth;
    const height = window.innerHeight;

    if (destination.anchor == "inicio") {
      //body
      body.style.background = "#fff";
      // circle 1
      circle1.style.background = "#fdec96";
      circle1.style.top = "-45vw";
      circle1.style.right = "-30vw";
      circle1.style.width = "80vw";
      circle1.style.height = "80vw";
      // outline circle 1
      outlineCircle1.style.border = "1px solid #292929";
      outlineCircle1.style.top = "-55vw";
      outlineCircle1.style.right = "0vw";
      outlineCircle1.style.width = "80vw";
      outlineCircle1.style.height = "80vw";
      // circle 2
      circle2.style.background = "#292929";
      circle2.style.top = "35vw";
      circle2.style.left = "-25vw";
      circle2.style.width = "50vw";
      circle2.style.height = "50vw";
      // outline circle 2
      outlineCircle2.style.border = "1px solid #292929";
      outlineCircle2.style.top = "32vw";
      outlineCircle2.style.left = "-5vw";
      outlineCircle2.style.width = "50vw";
      outlineCircle2.style.height = "50vw";

      // responside fullpage

      if (width <= 1600) {
        circle1.style.top = "-40vw";
        circle1.style.right = "-25vw";
        outlineCircle1.style.top = "-50vw";
        outlineCircle1.style.right = "0vw";
        circle2.style.top = "35vw";
        circle2.style.left = "-10vw";
        circle2.style.width = "60vw";
        circle2.style.height = "60vw";
        outlineCircle2.style.top = "32vw";
        outlineCircle2.style.left = "0vw";
        outlineCircle2.style.width = "60vw";
        outlineCircle2.style.height = "60vw";
      }
      if (width <= 1300) {
        circle1.style.top = "-45vw";
        circle2.style.top = "40vw";
        circle2.style.left = "-15vw";
        outlineCircle2.style.top = "40vw";
        outlineCircle2.style.left = "0vw";
        outlineCircle2.style.width = "60vw";
        outlineCircle2.style.height = "60vw";
      }
      if (width <= 1100 && height >= 900) {
        circle1.style.top = "-40vw";
        circle1.style.right = "-30vw";
        circle1.style.width = "100vw";
        circle1.style.height = "100vw";
        // outline circle 1
        outlineCircle1.style.top = "-50vw";
        outlineCircle1.style.right = "-10vw";
        outlineCircle1.style.width = "100vw";
        outlineCircle1.style.height = "100vw";
        // circle 2
        circle2.style.top = "105vw";
        circle2.style.left = "-25vw";
        circle2.style.width = "80vw";
        circle2.style.height = "80vw";
        // outline circle 2
        outlineCircle2.style.top = "105vw";
        outlineCircle2.style.left = "-5vw";
        outlineCircle2.style.width = "80vw";
        outlineCircle2.style.height = "80vw";
      }
      if (width <= 500) {
        circle1.style.top = "-30vw";
        circle1.style.right = "-50vw";
        circle1.style.width = "120vw";
        circle1.style.height = "120vw";
        // outline circle 1
        outlineCircle1.style.top = "-50vw";
        outlineCircle1.style.right = "-30vw";
        outlineCircle1.style.width = "120vw";
        outlineCircle1.style.height = "120vw";
        // circle 2
        circle2.style.top = "75%";
        circle2.style.left = "-25vw";
        circle2.style.width = "100vw";
        circle2.style.height = "100vw";
        // outline circle 2
        outlineCircle2.style.top = "75%";
        outlineCircle2.style.left = "-5vw";
        outlineCircle2.style.width = "100vw";
        outlineCircle2.style.height = "100vw";
      }
    } else if (destination.anchor == "Presentacion") {
      //body
      body.style.background = "#fff";
      // circle 1
      circle1.style.background = "#fdec96";
      circle1.style.top = "-80vw";
      circle1.style.right = "-10vw";
      circle1.style.width = "120vw";
      circle1.style.height = "100vw";

      // outline circle 1
      outlineCircle1.style.border = "1px solid #292929";
      outlineCircle1.style.top = "-100vw";
      outlineCircle1.style.right = "0vw";
      outlineCircle1.style.width = "80vw";
      outlineCircle1.style.height = "80vw";

      // circle 2
      circle2.style.background = "#292929";
      circle2.style.top = "37vw";
      circle2.style.left = "25vw";
      circle2.style.width = "50vw";
      circle2.style.height = "50vw";

      // outline circle 2
      outlineCircle2.style.border = "1px solid #292929";
      outlineCircle2.style.top = "37vw";
      outlineCircle2.style.left = "10vw";
      outlineCircle2.style.width = "80vw";
      outlineCircle2.style.height = "90vw";

      // responside fullpage

      if (width <= 1700) {
        circle2.style.top = "45vw";
        circle2.style.left = "25vw";
        circle2.style.width = "50vw";
        circle2.style.height = "50vw";

        outlineCircle2.style.top = "45vw";
        outlineCircle2.style.left = "10vw";
        outlineCircle2.style.width = "80vw";
        outlineCircle2.style.height = "90vw";
      }
      if (width <= 1400) {
        circle2.style.top = "55vw";
        circle2.style.left = "20vw";
        circle2.style.width = "60vw";
        circle2.style.height = "60vw";

        outlineCircle2.style.top = "55vw";
        outlineCircle2.style.left = "5vw";
        outlineCircle2.style.width = "90vw";
        outlineCircle2.style.height = "100vw";
      }
      if (width <= 1000) {
        circle1.style.top = "-80vw";
        circle1.style.right = "-20vw";
        circle1.style.width = "140vw";
        circle1.style.height = "120vw";

        // outline circle 1
        outlineCircle1.style.border = "1px solid #292929";
        outlineCircle1.style.top = "-100vw";
        outlineCircle1.style.right = "0vw";
        outlineCircle1.style.width = "80vw";
        outlineCircle1.style.height = "80vw";

        // circle 2
        circle2.style.background = "#292929";
        circle2.style.top = "85%";
        circle2.style.left = "10vw";
        circle2.style.width = "80vw";
        circle2.style.height = "80vw";

        // outline circle 2
        outlineCircle2.style.border = "1px solid #292929";
        outlineCircle2.style.top = "85%";
        outlineCircle2.style.left = "0vw";
        outlineCircle2.style.width = "100vw";
        outlineCircle2.style.height = "100vw";
      }
      if (width <= 500) {
        circle2.style.top = "80%";
        circle2.style.left = "0vw";
        circle2.style.width = "100vw";
        circle2.style.height = "100vw";

        // outline circle 2
        outlineCircle2.style.border = "1px solid #292929";
        outlineCircle2.style.top = "80%";
        outlineCircle2.style.left = "-10vw";
        outlineCircle2.style.width = "120vw";
        outlineCircle2.style.height = "120vw";
      }
    } else if (destination.anchor == "Proyectos") {
      //body
      body.style.background = "#5700FF";
      // circle 1
      circle1.style.background = "#fff";
      circle1.style.top = "-110vw";
      circle1.style.right = "-10vw";
      circle1.style.width = "120vw";
      circle1.style.height = "100vw";

      // outline circle 1
      outlineCircle1.style.border = "1px solid #292929";
      outlineCircle1.style.top = "-100vw";
      outlineCircle1.style.right = "0vw";
      outlineCircle1.style.width = "80vw";
      outlineCircle1.style.height = "80vw";

      // circle 2
      circle2.style.background = "#fff";
      circle2.style.top = "-43vw";
      circle2.style.left = "25vw";
      circle2.style.width = "50vw";
      circle2.style.height = "52vw";

      // outline circle 2
      outlineCircle2.style.border = "1px solid #fff";
      outlineCircle2.style.top = "-35vw";
      outlineCircle2.style.left = "5vw";
      outlineCircle2.style.width = "90vw";
      outlineCircle2.style.height = "90vw";
      if (width <= 500) {
        outlineCircle1.style.border = "1px solid #fff";
        outlineCircle1.style.top = "-55vw";
        outlineCircle1.style.right = "-5vw";
        outlineCircle1.style.width = "110vw";
        outlineCircle1.style.height = "110vw";
        // circle 2
        circle2.style.background = "#fff";
        circle2.style.top = "-60vw";
        circle2.style.left = "5vw";
        circle2.style.width = "90vw";
        circle2.style.height = "92vw";

        // outline circle 2
        outlineCircle2.style.border = "1px solid #fff";
        outlineCircle2.style.top = "165vw";
        outlineCircle2.style.left = "-5vw";
        outlineCircle2.style.width = "110vw";
        outlineCircle2.style.height = "110vw";
      }
    } else if (destination.anchor == "Contacto") {
      //body
      body.style.background = "#fff";
      // circle 1
      circle1.style.top = "-110vw";

      // outline circle 1
      outlineCircle1.style.border = "1px solid #292929";
      outlineCircle1.style.top = "-5vw";
      outlineCircle1.style.right = "17.5vw";
      outlineCircle1.style.width = "65vw";
      outlineCircle1.style.height = "65vw";

      // circle 2
      circle2.style.background = "#292929";
      circle2.style.top = "35vw";
      circle2.style.left = "25vw";
      circle2.style.width = "50vw";
      circle2.style.height = "52vw";

      // outline circle 2
      outlineCircle2.style.border = "1px solid #292929";
      outlineCircle2.style.top = "27vw";
      outlineCircle2.style.left = "30vw";
      outlineCircle2.style.width = "40vmax";
      outlineCircle2.style.height = "42vw";
      if (width <= 500) {
        outlineCircle1.style.top = "-41vw";
        outlineCircle1.style.right = "-14.5vw";
        outlineCircle1.style.width = "130vw";
        outlineCircle1.style.height = "130vw";

        circle2.style.top = "75%";
        circle2.style.left = "-10%";
        circle2.style.width = "120vw";
        circle2.style.height = "122vw";

        outlineCircle2.style.top = "130vw";
        outlineCircle2.style.left = "-15vw";
        outlineCircle2.style.width = "130vw";
        outlineCircle2.style.height = "130vw";
      }
    }
  },
});
