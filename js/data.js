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
      "Siempre busco recolectar la mayor cantidad de información para realizar un proceso de solución a diferentes problemas de manera eficiente.",
    img: `${skillsImgUrl}/resolucion.svg`,
  },
  {
    name: "Trabajo en equipo",
    description:
      "Conocedor y experimentado en metodologias agiles como SCRUM para el trabajo en equipo, tratando de ayudar y aprender de mis compañeros.",
    img: `${skillsImgUrl}/trabajoequipo.svg`,
  },
  {
    name: "Soft skills",
    description:
      "Constantemente desarrollando y mejorando mis habilidades interpersonales para un trabajo mas optimo.",
    img: `${skillsImgUrl}/soft.svg`,
  },
  {
    name: "Proactividad",
    description:
      "Instruyendome todo el tiempo, tanto de manera autodidacta como univiersitaria con mucho hambre de aprendizaje.",
    img: `${skillsImgUrl}/Proactividad.svg`,
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
    name: "Flexibilidad y Adaptacion",
    description:
      "Flexibilidad y capacidad para adaptarme a diferentes entornos y tiempos sin dificultad.",
    img: `${servicesImgIrl}/flex.svg`,
  },
  {
    name: "Modern desing",
    description:
      "Aplicando buenas practicas para construir diseños modernos con las ultimas tecnologias.",
    img: `${servicesImgIrl}/modern.svg`,
  },
  {
    name: "colaboración",
    description:
      "Siempre predispuesto a colaborar con mis compañeros de equipo para sortear las dificultades que se vayan presentando en cada proyecto.",
    img: `${servicesImgIrl}/colab.svg`,
  },
  {
    name: "pensamiento critico",
    description:
      "Capacidad de analizar y evaluar la consistencias de diversos razonamientos para llegar a una solución acertada de los problemas.",
    img: `${servicesImgIrl}/critic.svg`,
  },
];

// CONTACT FORM.
export const regexs = {
  name: /^[a-zA-ZÀ-ÿ]{2,100} ?[a-zA-ZÀ-ÿ]{0,100}$/,
  message: /^.{5,200}$/m,
  email:
    /^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
};
