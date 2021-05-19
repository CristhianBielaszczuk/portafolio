// PARTICLE JS.
export const particleConfig = {
  particles: {
    number: { value: 70, density: { enable: true, value_area: 800 } },
    color: { value: "#ffffff" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 5 },
      image: { src: "img/github.svg", width: 100, height: 100 },
    },
    opacity: {
      value: 1,
      random: true,
      anim: { enable: true, speed: 1, opacity_min: 0, sync: false },
    },
    size: {
      value: 3,
      random: true,
      anim: { enable: false, speed: 4, size_min: 0.3, sync: false },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 0.5,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 600 },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "bubble" },
      onclick: { enable: true, mode: "repulse" },
      resize: true,
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 100, size: 0, duration: 2, opacity: 0, speed: 5 },
      repulse: { distance: 200, duration: 1 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: true,
};

// SKILLS SLIDER.
export const swiperConfig = {
  observer: true,
  freeMode: true,
  loop: true,
  breakpoints: {
    0: { slidesPerView: 1 },
    769: { slidesPerView: 2 },
    1200: { slidesPerView: 3 },
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },
};

const sliderImgUrl = "./assets/img/skills/slider";

export const technologies = [
  {
    name: "PHP",
    img: `${sliderImgUrl}/php.svg`,
  },
    {
      name: "ReactJS",
      img: `${sliderImgUrl}/react-seeklogo.com.svg`,
    },
    {
      name: "SQL",
      img: `${sliderImgUrl}/database.svg`,
    },
  {
    name: "JavaScript",
    img: `${sliderImgUrl}/javascript.svg`,
  },
  {
    name: "GIT",
    img: `${sliderImgUrl}/git.svg`,
  },
  {
    name: "Bootstrap",
    img: `${sliderImgUrl}/bootstrap.svg`,
  },
  {
    name: "CSS 3",
    img: `${sliderImgUrl}/css3.svg`,
  },
  {
    name: "HTML 5",
    img: `${sliderImgUrl}/html5.svg`,
  },
];

// SKILLS CARDS.
const skillsImgUrl = "./assets/img/skills/cards";

export const skills = [
  {
    name: "Resolución de problemas",
    description:
      "Comencé a estudiar programación porque me daba mucha satisfacción resolver problemas informáticos de chico.",
    img: `${skillsImgUrl}/problems.svg`,
  },
  {
    name: "Trabajo en equipo",
    description:
      "Me gusta aportar mi grano de arena en un grupo de trabajo, ayudando a mis compañeros y aprendiendo de ellos al mismo tiempo.",
    img: `${skillsImgUrl}/team.svg`,
  },
  {
    name: "Organización",
    description:
      "Soy una persona ordenada y organizada en todos los aspectos de mi vida. Intento siempre reflejar lo mismo en mi código.",
    img: `${skillsImgUrl}/organization.svg`,
  },
  {
    name: "Gestión del tiempo",
    description:
      "Planifico y organizo lo mejor posible las tareas que debo realizar, para llegar a ser más eficiente y productivo.",
    img: `${skillsImgUrl}/time.svg`,
  },
];

// PROJECTS CARDS.
const githubUrl = "https://github.com/CristhianBielaszczuk";
const projectsImgUrl = "/assets/img/projects/";
export const projects = [
//   {
//     name: "string pelicula",
//     img: `${projectsImgUrl}/linkimg.svg`,
//     technologies: ["tecnologias, usadas"],
//     link: `${githubUrl}/linkl/`,
//   },
];

// SERVICES CARDS.
const servicesImgIrl = "./assets/img/services";

export const myServices = [
  {
    name: "Buenas prácticas",
    description:
      "Intento siempre escribir mi código utilizando las mejores prácticas, para que sea más legible y entendible.",
    img: `${servicesImgIrl}/best-practices.svg`,
  },
  {
    name: "Responsive design",
    description:
      "En todos mis proyectos aplico Responsive Web Design. También utilizo la metodología BEM cuando trabajo con CSS y/o SASS",
    img: `${servicesImgIrl}/responsive-design.svg`,
  },
  {
    name: "Creatividad",
    description:
      "Además resolver problemas de programación, me gusta mucho diseñar la UX/UI de los proyectos, es allí cuando puedo expresar toda mi creatividad.",
    img: `${servicesImgIrl}/creativity.svg`,
  },
  {
    name: "Dinamismo",
    description:
      "Soy una persona que siempre está en constante movimiento, aprendiendo e indagando cosas nuevas.",
    img: `${servicesImgIrl}/dynamism.svg`,
  },
];

// CONTACT FORM.
export const regexs = {
  name: /^[a-zA-ZÀ-ÿ]{2,100} ?[a-zA-ZÀ-ÿ]{0,100}$/,
  message: /^.{5,200}$/m,
  email:
    /^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
};
