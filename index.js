const hamNavbtn = document.querySelector(".hamburger-mobile");
const hamburgerNav = document.querySelector(".hamburger__nav--wrapper");
const links = document.querySelectorAll(".hamburger__item--link");
const detailsBtn = document.querySelectorAll(".details__btn");
const priceBtn = document.querySelectorAll(".price__btn");
const frontSide = document.querySelectorAll(".front");
const backSide = document.querySelectorAll(".back");

hamburgerNav.style.zIndex = "-1";

const disappear = () => {
  setTimeout(() => {
    hamburgerNav.style.zIndex = "-1";
  }, 500);
  hamburgerNav.style.gridTemplateRows = "0fr";
  hamNavbtn.classList = "icofont-navigation-menu";
  hamNavbtn.classList.add("nav__link", "hamburger-mobile");
};
const appear = () => {
  hamburgerNav.style.zIndex = "1000";
  hamburgerNav.style.gridTemplateRows = "1fr";
  hamNavbtn.classList = "icofont-ui-close";
  hamNavbtn.classList.add("nav__link", "close-mobile");
};

const toggler = () => {
  if (hamburgerNav.style.gridTemplateRows === "1fr") {
    disappear();
    console.log("disappeared");
  } else {
    appear();
    console.log("appeared");
  }
};

hamNavbtn.addEventListener("click", function () {
  toggler();
});

links.forEach((link) => {
  link.addEventListener("click", function () {
    setTimeout(() => {
      disappear();
    }, 700);
  });
});

//FLIPS ALL BACKSIDES 180DEG
backSide.forEach((back) => {
  back.style.transform = "rotateY(180deg)";
});

// CHECKS IF ELEMENTS ARE SIBLINGS
const areSiblings = (elm1, elm2) =>
  elm1 != elm2 && elm1.parentNode == elm2.parentNode;

//FLIPS THE CARDS TO DETAILS SIDE
function flipToDetails() {
  for (let i = 0; i < detailsBtn.length; i++) {
    const btn = detailsBtn[i];
    btn.addEventListener("click", function () {
      for (let i = 0; i < frontSide.length; i++) {
        const front = frontSide[i];
        for (let i = 0; i < backSide.length; i++) {
          const back = backSide[i];
          if (front.contains(btn) && areSiblings(front, back)) {
            front.style.transform = "rotateY(-180deg)";
            back.style.transform = "rotateY(0deg)";
          }
        }
      }
    });
  }
}
flipToDetails();

//FLIPS THE CARDS TO PRICE SIDE
function flipToPrice() {
  for (let i = 0; i < priceBtn.length; i++) {
    const btn = priceBtn[i];
    btn.addEventListener("click", function () {
      for (let i = 0; i < backSide.length; i++) {
        const back = backSide[i];
        for (let i = 0; i < frontSide.length; i++) {
          const front = frontSide[i];
          if (back.contains(btn) && areSiblings(front, back)) {
            front.style.transform = "rotateY(0deg)";
            back.style.transform = "rotateY(180deg)";
          }
        }
      }
    });
  }
}

flipToPrice();
