// count down
class fCount {
    constructor(options) {
      this.el = options.el;
      this.value = options.value;
      this.interval = null;
    }
  
    update(newValue, duration = 1000) {
      const start = this.value;
      const end = newValue;
      const range = end - start;
      const stepTime = Math.abs(Math.floor(duration / range));
      let current = start;
  
      this.el.textContent = current;
  
      clearInterval(this.interval);
  
      this.interval = setInterval(() => {
        current += 1;
        this.el.textContent = current;
  
        if (current === end) {
          clearInterval(this.interval);
        }
      }, stepTime);
    }
  }
  
  const createCount = (el, value) => {
    const counter = new fCount({
      el: el,
      value: 0,
    });
    counter.update(value);
  }
  
  const subCount = document.querySelector(".number");
  createCount(subCount, 1500);
  
  const subCount2 = document.querySelector(".number-2");
  createCount(subCount2, 320);
  
  const subCount3 = document.querySelector(".number-3");
  createCount(subCount3, 1000);
  
  const subCount4 = document.querySelector(".number-4");
  createCount(subCount4, 587);
  
  

// navbar
const mobileNav = document.querySelector('nav')
const navLink = document.querySelector('nav ul')
const openMenu = function () {
  if (mobileNav.style.height === "fit-content") {
    mobileNav.style.height = "";
  } else {
    mobileNav.style.height = "fit-content";
  }

  if (navLink.style.top === "0px") {
    navLink.style.top = "";
  } else {
    navLink.style.top = "0px";
  }
};

const menuBtn = document.querySelector('.menu-btn').addEventListener('click',openMenu)


// accordian

const firstAccord = document.querySelector('.first-accord')
const farrow = document.querySelector(".farrow");
const firstText = document.querySelector(".first-text ");
const secAccord = document.querySelector('.sec-accord')
const secText = document.querySelector(".sec-text ");
const sarrow = document.querySelector(".sarrow");
const thirdAccord = document.querySelector(".third-accord");
const thirdText=document.querySelector('.third-text')
const tarrow=document.querySelector('.tarrow')



const firstAccordian = function () {
  if (firstText.style.display === "block") {
    firstText.style.display = "";
    firstAccord.style.backgroundColor = "";
    firstAccord.classList.add("hidden");
    farrow.style.transform = "";
  } else {
    firstText.style.display = "block";
    firstAccord.style.backgroundColor = "#ffa62b";
    firstAccord.classList.remove("hidden");
    farrow.style.transform = "rotate(180deg)";
    secText.style.display = "";
    secAccord.style.backgroundColor = "";
    sarrow.style.transform = "";
     thirdText.style.display = "";
     tarrow.style.transform = "";
     thirdAccord.style.backgroundColor = "";
  }
};


const secondAccordian = function () {
  if (secText.style.display === "block") {
    secText.style.display = "";
    secAccord.style.backgroundColor = "";
    secAccord.classList.add("hidden");
    sarrow.style.transform = "";
  } else {
    secText.style.display = "block";
    secAccord.style.backgroundColor = "#ffa62b";
    secAccord.classList.remove("hidden");
    sarrow.style.transform = "rotate(180deg)";
    firstText.style.display = "";
    firstAccord.style.backgroundColor = "";
    farrow.style.transform = "";
     thirdText.style.display = "";
     tarrow.style.transform = "";
     thirdAccord.style.backgroundColor = "";
  }
};
 


const thirdAccordian = function () {
  if (thirdText.style.display === "block") {
    thirdText.style.display = "";
    tarrow.style.transform = "";
    thirdAccord.style.backgroundColor = "";
    thirdAccord.classList.add("hidden");
  } else {
    thirdText.style.display = "block";
    thirdAccord.style.backgroundColor = "#ffa62b";
    thirdAccord.classList.remove("hidden");
    tarrow.style.transform = "rotate(180deg)";
    firstText.style.display = "";
    firstAccord.style.backgroundColor = "";
    farrow.style.transform = "";
    secText.style.display = "";
    secAccord.style.backgroundColor = "";
    sarrow.style.transform = "";
  }
};


firstAccord.addEventListener('click',firstAccordian )


secAccord.addEventListener('click', secondAccordian)

thirdAccord.addEventListener('click',thirdAccordian)