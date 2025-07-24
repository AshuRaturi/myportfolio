import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setactiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  const handleMenuItemClick = (sectionId) => {
    setactiveSection(sectionId);
    setIsOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Work" },
    { id: "education", label: "Academic" },
    { id: "contact", label: "7060051875" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transitionduration-300 px-[7vw] lg:px-[20vw] ${
        isScrolled
          ? "bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between py-5 text-white">
        <div className="text-lg font-semibold cursor-pointer">
          <span className="text-[#8245ec]">&lt;</span>
          <span className="text-white">Ashutosh</span>
          <span className="text-[#8245ec]">/</span>
          <span className="text-white">Raturi</span>
          <span className="text-[#8245ec]">&gt;</span>
        </div>

        {/* Desktop Menu  */}
        <ul className="hidden space-x-8 md:flex text-grey-300">
          {menuItems.map((item) =>
            item.id === "contact" ? (
              <li
                key={item.id}
                className="font-semibold text-[#8245ec] hover:text-white"
              >
                <FaPhone size={16} className="inline mr-1" />{" "}
                <a href="tel:7060051875" className="mr-3 hover:underline">
                  {item.label}
                </a>
              </li>
            ) : (
              <li
                key={item.id}
                className={`cursor-pointer hover:text-[#8245ec] font-semibold ${
                  activeSection === item.id ? "text-[#8245ec]" : ""
                }`}
              >
                <button onClick={() => handleMenuItemClick(item.id)}>
                  {item.label}
                </button>
              </li>
            )
          )}
        </ul>

        {/* Social-Media-Icons  */}
        <div className="hidden space-x-4 md:flex">
          <a
            href="https://github.com/ashuraturi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec]"
          >
            <FaGithub size={24} />
          </a>

          <a
            href="https://www.linkedin.com/in/ashutosh-raturi-507843255/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec]"
          >
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* Mobile-Hemburger */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => {
                setIsOpen(false);
              }}
            />
          ) : (
            <FiMenu
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => {
                setIsOpen(true);
              }}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu Items  */}
      {isOpen && (
        <div className="absolute top-20 left-10 transform -transform-x-1/2  w-[300px] bg-[#050414] bg-opacity-50 backdrop-blur-lg z-50 rounded-lg shadow-lg">
          <ul className="flex flex-col items-center py-4 space-y-4 text-gray-300">
            {menuItems.map((item) =>
              item.id === "contact" ? (
                <li
                  key={item.id}
                  className="font-semibold text-[#8245ec] hover:text-white "
                >
                  <FaPhone size={16} className="inline mr-1" />{" "}
                  <a href="tel:7060051875" className="mr-3 hover:underline">
                    {item.label}
                  </a>
                </li>
              ) : (
                <li
                  key={item.id}
                  className={`cursor-pointer hover:text-[#8245ec] font-semibold ${
                    activeSection === item.id ? "text-[#8245ec]" : ""
                  }`}
                >
                  <button onClick={() => handleMenuItemClick(item.id)}>
                    {item.label}
                  </button>
                </li>
              )
            )}
            <div className="flex space-x-4">
              <a
                href="https://github.com/AshuRaturi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#8245ec]"
              >
                <FaGithub size={24} />
              </a>

              <a
                href="https://www.linkedin.com/in/ashutosh-raturi-507843255/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#8245ec]"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
