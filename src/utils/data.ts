import Theme1 from "../assets/purple.png"
import Theme2 from "../assets/red.png"
import Theme3 from "../assets/blueviolet.png"
import Theme4 from "../assets/blue.png"
import Theme5 from "../assets/goldenrod.png"
import Theme6 from "../assets/magenta.png"
import Theme7 from "../assets/yellowgreen.png"
import Theme8 from "../assets/orange.png"
import Theme9 from "../assets/green.png"
import Theme10 from "../assets/yellow.png"

import UltraRep from "../assets/ultrarep.png"
import Gym from "../assets/non-profit.png"
import Ecommerce from "../assets/ecommerce.png"
import Wingle from "../assets/wingle.png"
import Portfolio from "../assets/portfolio.png"
import Resume from "../assets/resume.png"

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: "hsl(252, 35%, 51%)",
  },

  {
    id: 2,
    img: Theme2,
    color: "hsl(4, 93%, 54%)",
  },

  {
    id: 3,
    img: Theme3,
    color: "hsl(271, 76%, 53%)",
  },

  {
    id: 4,
    img: Theme4,
    color: "hsl(225, 73%, 57%)",
  },

  {
    id: 5,
    img: Theme5,
    color: "hsl(43, 74%, 49%)",
  },

  {
    id: 6,
    img: Theme6,
    color: "hsl(339, 81%, 66%)",
  },

  {
    id: 7,
    img: Theme7,
    color: "hsl(80, 61%, 50%)",
  },

  {
    id: 8,
    img: Theme8,
    color: "hsl(19, 96%, 52%)",
  },

  {
    id: 9,
    img: Theme9,
    color: "hsl(88, 65%, 43%)",
  },

  {
    id: 10,
    img: Theme10,
    color: "hsl(42, 100%, 50%)",
  },
]

export const skillsData = [
  {
    label: "HTML",
    img: "/html.png",
  },
  {
    label: "CSS",
    img: "/css-icon.png",
  },
  {
    label: "JavaScript",
    img: "/js-icon.png",
  },
  {
    label: "TypeScript",
    img: "/ts-icon.png",
  },
  {
    label: "React",
    img: "/react-icon.png",
  },
  {
    label: "Tailwind CSS",
    img: "/tailwind-icon.png",
  },
  {
    label: "Next JS",
    img: "/nextjs-icon.png",
  },
  {
    label: "Contentful",
    img: "/contentful.png",
  },
  {
    label: "Sanity",
    img: "/sanity-icon.png",
  },
  {
    label: "Python",
    img: "/python.png",
  },
  {
    label: "Fast API",
    img: "/fast.png",
  },
    {
      label: "Docker",
      img: "/docker.png",
    },
    {
      label: "Azure",
      img: "/azure.png",
    },
  {
    label: "MySQL",
    img: "/sql-icon.png",
  },
  {
    label: "PostgreSQL",
    img: "/postgre.png",
  },
  {
    label: "Neon DB",
    img: "/neon.png",
  },
  {
    label: "C",
    img: "/c-icon.png",
  },
  {
    label: "C++",
    img: "/cpp-icon.png",
  },
]

export const EducationalData = [
  {
    label: "Matriculation",
    year: "2019",
    desc: "I completed my matriculation in 2019 from The Professional's Schools, Lahore and scored 90%",
  },
  {
    label: "Intermediate",
    year: "2021",
    desc: "I completed my Intermediate in 2021 from Punjab Group of Colleges, Lahore.",
  },
  {
    label: "Graduation",
    year: "2021 - continued",
    desc: "I am currently a student of Bachelor of Science Computer Science (BSCS), at University of Central Punjab",
  },
]

export const ProjectsData = [
  {
    title: "UltraRep",
    img: UltraRep,
    desc: "UltraRep provides pre-trained remote talent for digital marketing agencies, helping you save on payroll and boost productivity. Scale your business effortlessly with our vetted specialists. Book a free strategy call today!",
    techs: ["Next JS", "Tailwind CSS", "Contentful", "Framer Motion", "AOS", "Tidio Chatbot"],
    url: "https://ultrarep-five.vercel.app/",
  },
  {
    title: "Non-Profit",
    img: Gym,
    desc: "A non-profit website template dedicated to [Purpose/Mission], showcasing its initiatives, impact, and donation options. Includes testimonials, mission, and contact info.",
    techs: ["Next JS", "Tailwind CSS", "Contentful"],
    url: "https://non-profit-phi.vercel.app/",
  },
  {
    title: "Social media app",
    img: Wingle,
    desc: "A social media platform that allows users to connect, share posts, and interact with others seamlessly.",
    techs: ["Next JS", "Tailwind CSS", "Python",  "Fast API", "Docker", "Azure", "Neon DB"],
    url: "https://twitter-clone-seven-rosy.vercel.app/",
  },
  {
    title: "Clothing Ecommerce Store",
    img: Ecommerce,
    desc: "A fashion e-commerce website featuring clothing for men, women, and kids. Highlights include seasonal sales, promotions, and a curated collection of high-quality products. Offers unique and authentic pieces.",
    techs: ["Next JS", "Tailwind CSS", "Sanity io"],
    url: "https://hackathon-mocha-sigma.vercel.app/",
  },
  {
    title: "My Portfolio",
    img: Portfolio,
    desc: "A personal portfolio showcasing my past projects and skills, with smooth and modern design.",
    techs: ["Next JS", "Tailwind CSS"],
    url: "https://shawaal-nadeem-portfolio.vercel.app/",
  },
  {
    title: "My Resume",
    img: Resume,
    desc: "A resume site showcasing expertise in TypeScript, JavaScript, Python, and web development. Highlights educational background, professional experience, and personal interests.",
    techs: ["Next JS", "Tailwind CSS"],
    url: "https://shawaal-nadeem-resume.vercel.app/",
  },
]
