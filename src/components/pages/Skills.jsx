import React from 'react'
import {SkillsInfo} from '../../constants'
import Tilt from "react-parallax-tilt";

const Skills = () => {
  return (
   <section 
   id='skills'
   className='clip-path-custome py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-[#050414] '
   >
    <div className='text-center mb-8'>
      <h2 className='text-3xl sm:text-4xl font-bold text-white'>Skills</h2>
      <div className='w-24 h-1 bg-[#8245ec] mx-auto mt-2'></div>
      <p className='text-gray-400 mt-4  font-semibold'>I bring a solid foundation in modern web development, with strong hands-on skills in React.js, JavaScript, HTML, CSS, and Tailwind. I continuously explore new tools and frameworks to stay sharp and build fast, clean, and responsive user interfaces.</p>
    </div>

    <div className="flex flex-wrap gap-4 lg:gap-5 py-10 justify-between">
  {SkillsInfo.map((category) => (
    <div
      key={category.title}
      className="bg-gray-900 backdrop-blur-md px-6 sm:px-10 py-6 sm:py-6 mb-10 w-full sm:w-[48%] rounded-2xl border border-white shadow-[0_0_20px_1px_rgba(136,69,236,0.3)]"
    >
      <h3 className="text-2xl sm:text-3xl font-semibold text-gray-400 mb-4 text-center">
        {category.title}
      </h3>
      {/* Skills list here */}
      <Tilt>
      <div className='grid grid-col-2 sm:grid-cols-2 gap-2 w-full'>
        {category.skills.map((skill)=>(
          <div
          key={skill.name}
          className='flex items-center justify-center space-x-2 bg-transparent border-2 border-gray-700 rounded-3xl py-2 px-2 '>
            <img 
            src={skill.logo}
            alt= {skill.name}
            className='w-6 h-6 sm:w-8 sm:h-8'></img>
            <span className='text-xs sm:text-sm text-gray-300'>{skill.name}</span>
            </div>
        ))}
      </div></Tilt>
    </div>
  ))}
</div>
   </section>
  )
}

export default Skills