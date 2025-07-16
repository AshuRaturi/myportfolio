import React from 'react';

const Footer = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#050414] text-white py-12 px-4 md:px-12 lg:px-24  ">
      <div className="max-w-6xl mx-auto text-center border-t-2 pt-6">
        {/* Brand Name */}
        <h2 className="text-2xl md:text-3xl font-bold tracking-wider text-purple-500 mb-4">
          Ashutosh Raturi
        </h2>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-6">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Projects", id: "work" },
            { name: "Education", id: "education" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="text-sm md:text-base text-gray-300 hover:text-purple-400 transition-colors duration-300"
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Footer Bottom Text */}
        <p className="text-xs md:text-sm text-gray-500">
          © {new Date().getFullYear()} Ashutosh Raturi. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
