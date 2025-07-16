import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FiDownload } from "react-icons/fi";
import profileImage from "../../assets/profile-photo.jpeg";
import Tilt from "react-parallax-tilt";

const About = () => {
  return (
    <section
      id="about"
      className="py-10 px-6 sm:px-10 md:px-[7vw] lg:px-[15vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I Am
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Ashutosh Raturi
          </h2>

          {/* Typing effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white mr-2">I am a</span>
            <TypeAnimation
              sequence={[
                "Front End Dev",
                2000,
                "React Developer",
                2000,
                "Wordpress Expert",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
              wrapper="span"
            />
          </h3>

          {/* About Me Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-6 leading-relaxed">
            I'm a Front-End Developer with 1 year of hands-on experience
            building responsive and user-friendly web applications. My core
            skills revolve around React.js, JavaScript, Tailwind CSS, and modern
            front-end practices.
          </p>

          {/* Resume Button */}
          <div className="flex justify-center md:justify-start">
            <a
              href="/Front-end-Cv-Ashutosh-Raturi.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#8245ec] text-white font-medium px-6 py-3 rounded-full hover:bg-[#6c35c2] transition duration-300"
            >
              <FiDownload className="mb-[2px]" />
              View CV
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center">
          <Tilt className="w-50 h-50 sm:w-52 sm:h-52 md:w-72 md:h-72 lg:w-96 lg:h-96 border-4 border-purple-700 rounded-full">
            <img
              src={profileImage}
              alt="Ashutosh Raturi"
              className="w-full h-full object-cover rounded-full drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
