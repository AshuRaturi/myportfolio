import React from 'react'
import {experiences} from '../../constants'

const Experience = () => {
  return (
    <section
    id='experience'
    className='py-15 pb-16 md:pb-24 px-[12vw] lg:px-[16vw] font-sans '
    >
    <div className='mb-16 text-center'>
      <h2 className='text-4xl font-bold text-white'>Experience</h2>
      <div className='w-36 h-1 bg-[#8245ec] mx-auto mt-2'></div> //Divider Div
            <p className='mt-2 font-semibold text-gray-400'>A collection of my work experience and the roles I have taken in various organizations.</p>
    </div>

    {/* Experience Timeline */}
    <div className='relative'>

      {/* experience Entries */}
      {
        experiences.map((experience,index)=>(
          <div
          key={index}
          className={`flex flex-col sm:flex-row items-center mb-16 ${index%2 ===0 ? "sm-justify-end" : "sm-justify-start"}`}
          >
            {/*Timeline Circle*/}

           {/* company description content */}
<div className="relative flex items-start gap-4 mb-10 md:items-center md:gap-6">
  {/* Timeline line */}
  <div className="absolute top-0 hidden w-1 h-full bg-white left-6 md:block"></div>

  {/* Timeline dot */}
  <div className="z-10 flex items-center justify-center w-12 h-12 bg-white border-4 border-purple-500 rounded-full">
    <img src={experience.img} alt={experience.company} className="object-cover w-8 h-8 rounded-lg" />
  </div>

  {/* Card content */}
  <div className="bg-gray-900 border border-gray-700 rounded-md p-5 shadow-md w-full md:w-2/3">
    <h3 className="text-lg font-semibold text-white">{experience.role}</h3>
    <p className="text-sm font-medium text-purple-400">{experience.company} | {experience.date}</p>
    <p className="mt-2 text-sm text-gray-400">{experience.desc}</p>
    
    {/* Skills */}
    <div className="flex flex-wrap gap-2 mt-3">

      {experience.skills.map((skill, index) => (
        <span
          key={index}
          className="px-3 py-1 text-xs text-white bg-purple-900 rounded-full"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
</div>
</div>  
        ))
      }
    </div>
    </section>
  )
}

export default Experience