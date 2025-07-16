// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import vercelLogo from './assets/tech_logo/vercel.png';


// Experience Section Logo's
import proponentLogo from './assets/company_logo/proponent-logo.jpg';
import RmsiLogo from './assets/company_logo/RMSILOGO.jpg';


// Education Section Logo's
import BrillicaLogo from './assets/education_logo/brillica.jpeg';
import THDCCollege from './assets/education_logo/THDCIHET-LOGO.webp';
import SVMLogo from './assets/education_logo/svmlogo.jpeg';

// Project Section Logo's
import TeamRemoval from './assets/work_logo/teamremoval.png';
import BookMyMovers from './assets/work_logo/bookmymovers.png';
import movingchampsau from './assets/work_logo/movingchamps.png';
import brisbanemovers from './assets/work_logo/brisbanemovers.png';
import zaptro from './assets/work_logo/zaptro-ecommerce.png';



export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      // { name: 'Angular', logo: angularLogo },
      // { name: 'Redux', logo: reduxLogo },
      // { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
      // { name: 'GSAP', logo: gsapLogo },
      // { name: 'Material UI', logo: materialuiLogo },
    ],
  },
  // {
  //   title: 'Backend',
  //   skills: [
  //     { name: 'Springboot', logo: springbootLogo },
  //     { name: 'Node JS', logo: nodejsLogo },
  //     { name: 'Express JS', logo: expressjsLogo },
  //     { name: 'MySQL', logo: mysqlLogo },
  //     { name: 'MongoDB', logo: mongodbLogo },
  //     { name: 'Firebase', logo: firebaseLogo },
  //     { name: 'PostgreSQL', logo: postgreLogo },
  //   ],
  // },
  // {
  //   title: 'Languages',
  //   skills: [
  //     { name: 'C', logo: cLogo },
  //     { name: 'C++', logo: cppLogo },
  //     { name: 'Java', logo: javaLogo },
  //     { name: 'Python', logo: pythonLogo },
  //     { name: 'C-Sharp', logo: csharpLogo },
  //     { name: 'JavaScript', logo: javascriptLogo },
  //     { name: 'TypeScript', logo: typescriptLogo },
  //   ],
  // },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Vercel', logo: vercelLogo },
      // { name: 'Postman', logo: postmanLogo },
      // { name: 'Compass', logo: mcLogo },
      // { name: 'Netlify', logo: netlifyLogo },
      // { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
{
  id: 0,
  img: proponentLogo,
  role: "Frontend Developer",
  company: "Proponent Technologies",
  date: "July 2024 - Present",
  desc: "Crafted clean, responsive, and accessible UIs using React JS, Tailwind CSS, and SCSS. Converted complex designs into pixel-perfect layouts with HTML, CSS, and Bootstrap. Ensured smooth user experiences across devices, maintained code quality, and regularly deployed updates via FTP. Collaborated in an agile setup, focusing on performance, reusability, and modern frontend best practices.",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React JS",
    "Wordpress",
    "Elementor",
    "Divi-Theme",
    "Bootstrap",
    "FTP Server",
    "Tailwind CSS",
    "SCSS",
  ],
},
{
  id: 1,
  img: RmsiLogo,
  role: "GIS Engineer",
  company: "RMSI",
  date: "July 2021 - Jan 2024",
  desc: "Worked on geospatial data projects using specialized GIS tools like Microstation and telecom software. Involved in mapping, spatial analysis, and data correction for utility and telecom networks, ensuring high levels of accuracy and compliance. Collaborated with teams on projects for clients like Enbridge, delivering detailed mapping outputs and maintaining data integrity throughout the workflow.",
  skills: [
    "GIS Software",
    "Microstation",
    "Enbridge",
    "Telecom Software",
  ],
},

  ];
  
  export const education = [

    
{
  id: 0,
  img: THDCCollege,
  school: "THDC-IHET",
  date: "2016-2020",
  grade: "First Division",
  desc: "I completed my Bachelor of Technology (B.Tech) in Electrical Engineering from THDC Institute of Hydropower Engineering and Technology. Throughout the course, I studied core subjects like Electrical Machines, Power Systems, Control Systems, and Electrical Measurements. I also gained practical exposure through lab work and training, especially related to hydroelectric systems. My academic journey at THDC-IHET gave me a strong technical foundation and developed my interest in problem-solving and field operations.",
  degree: "Bachelor of Technology (B.Tech) - Electrical Engineering",
},
{
  id: 1,
  img: SVMLogo,
  school: "S.V.M.I.C VK Puram, Tehri Garhwal",
  date: "2015-2016",
  grade: "First Division",
  desc: "I completed my Class 12th education from SVM Inter College, VK Puram, Tehri Garhwal under the Uttarakhand Board. My major subjects were Physics, Chemistry, and Mathematics (PCM). This academic phase built my logical reasoning and analytical thinking skills, which became the base for my engineering studies later.",
  degree: "Intermediate (XII) - PCM Stream",
},
{
  id: 2,
  img: BrillicaLogo, 
  school: "Brillica Services, Dehradun",
  date: "Jan 2024 – Mar 2024",
  grade: "Completed",
  desc: "I completed a 3-month Frontend Development course at Brillica Services, Dehradun. The training covered HTML, CSS, JavaScript, Bootstrap, React.js, and Tailwind CSS. During the course, I built multiple responsive web projects and gained hands-on experience in creating modern UI components. This training sharpened my development workflow and strengthened my confidence in building frontend applications from scratch.",
  degree: "Frontend Development Certification",
},

    
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Team Removal Movers Website",
      description:
        "Team Removal Movers is a professional moving service website designed to offer smooth and stress-free relocation experiences. It showcases services like house moving, office relocation, interstate moves, and single item removals with a user-friendly interface and quick quote options.",
      image: TeamRemoval,
      tags: ["HTML", "CSS", "JavaScript", "PHP", "Bootstrap"],
      github: "https://github.com/codingmastr/GitHub-Profile-Search-App-Using-React-JS",
      webapp: "https://proponent.online/TeamRemovalsCanberra",
    },
    {
      id: 1,
      title: "ZAPTRO",
      description:
        "Zaptro is a modern electronics e-commerce platform built with React and Tailwind CSS, offering a sleek, fast, and responsive shopping experience. From gadgets to accessories, shop the latest tech with ease.",
      image: zaptro,
      tags: ["React JS", "API", "useContext", "CSS", "Javascript", "Tailwind"],
      github: "https://github.com/codingmastr/Webverse-Digital",
      webapp: "https://vkhm4cf5-5173.inc1.devtunnels.ms/",
    },
    {
      id: 2,
      title: "Moving Champs Australia",
      description:
        "Moving Champs Australia is your trusted partner for hassle-free relocation services across the country. Whether you're shifting your home, office, or just a single item, our expert team ensures a smooth, safe, and on-time moving experience. With years of experience and a strong local presence, we offer affordable solutions tailored to your needs — from packing and loading to transportation and delivery. Let us take the stress out of your move.",
      image: movingchampsau,
      tags: ["HTML", "CSS", "JavaScript", "PHP", "Bootstrap"],
      github: "https://github.com/codingmastr/Movie-Recommendation-App",
      webapp: "https://movingchamps.au/brisbane",
    },
    {
      id: 3,
      title: "Brisbane Movers Packers",
      description:
        "Brisbane Movers Packers is a trusted moving service platform that helps you relocate with ease. From house and office removals to interstate and last-minute moves, we make shifting simple, safe, and affordable — all just a few clicks away.",
      image: brisbanemovers,
      tags: ["HTML", "CSS", "JavaScript", "PHP", "Bootstrap","J-Query"],
      github: "https://github.com/codingmastr/cmtk-email-validator",
      webapp: "https://brisbanemoverspackers.com.au/",
    },
    {
      id: 4,
      title: "BookMyMovers",
      description:
        "Book My Movers is a trusted moving service platform that helps you relocate with ease. From house and office removals to interstate and last-minute moves, we make shifting simple, safe, and affordable — all just a few clicks away.",
      image: BookMyMovers,
      tags: ["Wordpress","Elementor","WP-Form",],
      github: "https://github.com/codingmastr/CSPrep",
      webapp: "https://bookmymovers.com.au",
    },

  ];  