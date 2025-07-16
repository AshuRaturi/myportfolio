import React from 'react'
import { education } from '../../constants' 

const Education = () => {
  return (
    <section
      id='education'
      className='py-15 pb-16 md:pb-24 px-[12vw] lg:px-[16vw] font-sans '
    >
      <div className='mb-16 text-center'>
        <h2 className='text-4xl font-bold text-white'>Education</h2>
        <div className='w-36 h-1 bg-[#8245ec] mx-auto mt-2'></div>
        <p className='mt-2 font-semibold text-gray-400'>
          My academic journey through the years, exploring different fields and sharpening my skills.
        </p>
      </div>

      <div className='relative'>
        {education.map((edu, index) => (
          <div
            key={index}
            className={`flex flex-col sm:flex-row items-center mb-16 ${index % 2 === 0 ? 'sm:justify-end' : 'sm:justify-start'}`}
          >
            <div className="relative flex items-start gap-4 mb-10 md:items-center md:gap-6">
              {/* Timeline line */}
              <div className="absolute top-0 hidden w-1 h-full bg-white left-6 md:block"></div>

              {/* Timeline dot */}
              <div className="z-10 flex items-center justify-center w-12 h-12 bg-white border-4 border-purple-500 rounded-full">
                <img src={edu.img} alt={edu.school} className="object-cover w-8 h-8 rounded-lg" />
              </div>

              {/* Card content */}
              <div className="bg-gray-900 border border-gray-700 rounded-md p-5 shadow-md w-full md:w-2/3">
                <h3 className="text-lg font-semibold text-white">{edu.degree}</h3>
                <p className="text-sm font-medium text-purple-400">{edu.school} | {edu.date}</p>
                <p className="mt-2 text-sm text-gray-400">{edu.desc}</p>

        
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education
