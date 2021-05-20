import {
  particleConfig,
  swiperConfig,
  technologies,
  skills,
  projects,
  myServices,
} from "./data.js";
import { regexs } from "./data.js";
import {
  createDivWithImg,
  getSkillCardOf,
  getProjectCardOf,
  getServiceCardOf,
} from "./helpers.js";

// PARTICLE JS.
particlesJS("circleFigure", particleConfig);

// MENU.
const menuButton = document.querySelector(".roundButton--menu");
const nav = document.querySelector(".nav");
const menuLinks = Array.from(document.querySelectorAll(".menu__link"));
let lastScrollTop = 0;

menuButton.addEventListener("click", () => {
  menuButton.firstElementChild.classList.toggle("fa-times");
  nav.classList.toggle("menu--active");
});

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menuButton.firstElementChild.classList.remove("fa-times");
    nav.classList.remove("menu--active");
  });
});

window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop || window.pageYOffset;
  scrollTop > lastScrollTop
    ? (menuButton.style.top = "-80px")
    : (menuButton.style.top = "20px");
  lastScrollTop = scrollTop;
});

// CIRCLE.
const circle = document.querySelector(".circle-figure");
const circleTitle = document.querySelector(".circle-title");

window.addEventListener("scroll", () => {
  const value = window.scrollY;
  circle.style.clipPath = `circle( ${value}px at 50% 60% )`;
  circleTitle.style.left = `${100 - value / 3}%`;
});

// UPLOAD BUTTON.
const uploadBtn = document.querySelector(".roundButton--bottom");

window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop || window.pageYOffset;

  scrollTop > 300
    ? uploadBtn.classList.add("show-button")
    : uploadBtn.classList.remove("show-button");
});

// PROJECTS CARDS.
const myProjectsCards = document.querySelector(".my-projects__cards");

projects.forEach((project, index) => {
  myProjectsCards.append(getProjectCardOf(project, index + 1));
});

// SKILLS SLIDER.
const swiperWrapper = document.querySelector(".swiper-wrapper");

for (const item of technologies) {
  swiperWrapper.append(createDivWithImg(item, "swiper-slide", "swiper-img"));
}

const swiper = new Swiper(".swiper-container", swiperConfig);

// SKILLS CARDS.
const skillsCardsGrid = document.querySelector(".skills-cards__grid");

for (const skill of skills) {
  skillsCardsGrid.append(getSkillCardOf(skill));
}

// SERVICES CARDS.
const myServicesGrid = document.querySelector(".my-services__grid");
myServices.forEach((item) => myServicesGrid.append(getServiceCardOf(item)));

// CONTACT FORM.
const contactForm = document.querySelector(".contact-form");
const inputs = Array.from(document.querySelectorAll(".contact-form__input"));
const okMessage = document.querySelector(".contact-form__ok");
emailjs.init("user_SbcwWmfWAMhoxmNb7ksA6");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  isValidForm() ? sendForm() : showAllErrors();
});

const isValidForm = () => {
  let validFields = 0;
  inputs.forEach((input) => {
    if (isValidInput(input)) validFields += 1;
  });
  return validFields === inputs.length;
};

const sendForm = () => {
  hideAllErrors();
  sendEmail();
  contactForm.reset();
};

const hideAllErrors = () => {
  inputs.forEach((input) => showError(false, input));
  okMessage.style.display = "block";
  setTimeout(() => (okMessage.style.display = "none"), 4000);
};

const sendEmail = () => {
  const emailData = {
    from_name: inputs[0].value,
    to_name: inputs[1].value,
    message: inputs[2].value,
  };

  emailjs.send("service_1i7pycp", "template_hdpd28c", emailData);
};

const showAllErrors = () => {
  okMessage.style.display = "none";

  inputs.forEach((input) => {
    !isValidInput(input) ? showError(true, input) : showError(false, input);
  });
};

const isValidInput = ({ id, value }) => regexs[`${id}`].test(value.trim());

const showError = (showError, input) => {
  const element = inputs.find(
    (item) => item.id === input.id
  ).nextElementSibling;

  if (showError) {
    element.style.display = "block";
    input.style.border = "2px solid red";
  } else {
    element.style.display = "none";
    input.style.border = "1px solid white";
  }
};
