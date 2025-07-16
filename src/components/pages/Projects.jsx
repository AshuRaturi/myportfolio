import React from 'react'
import {projects} from '../../constants'
import { useState } from 'react';

const Projects = () => {

 const [selectedProject, setSelectedProject]=useState(null);

 const handleProjectModal= (project)=>{
  setSelectedProject(project)
 }

 const handleCloseModal =(project)=>{
  setSelectedProject(null)
 }

  return (
    <section id='work' className="relative px-6 pb-20 font-sans md:px-12 xl:px-24">
  {/* Section Title */}
  <div className="mb-16 text-center">
    <h2 className="text-4xl font-bold text-white">Projects</h2>
     <div className='w-36 h-1 bg-[#8245ec] mx-auto mt-2'></div> //Divider Div
    <p className="max-w-xl mx-auto mt-4 text-base font-semibold text-gray-400 md:text-lg">
      A showcase of the projects I have worked on, highlighting my skills and experience in various technologies.
    </p>
  </div>

  {/* Projects Grid */}
  <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
    {projects.map((project) => (
      <div
        key={project.id}
        onClick={()=>{handleProjectModal(project)}}
        className="overflow-hidden transition-transform duration-300 bg-gray-900 border shadow-2xl cursor-pointer border-white/10 backdrop-blur-md rounded-2xl hover:shadow-purple-500/40 hover:scale-105"
      >
        <img
          src={project.image}
          alt={project.title}
          className="object-cover w-full h-60 rounded-xl"
        />
        {/* Optional: project title/desc here */}
        <div className="p-6 "> 
         <h3 className='text-white mb-2 text-2xl font-bold'>{project.title}</h3> 
         <p className='text-gray-500 mb-4 pt-5 line-clamp-3'>{project.description}</p>
         <div className='mb-4'>
          {project?.tags.map((tag,index)=>(
          <span 
          key={index} className='inline-block bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1 mr-2 mb-2'>
           {tag}
          </span>
          ))}

          </div>
         </div>
      </div>
      
    ))}
{/* Modal Container */}
{selectedProject && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4">
    <div className="bg-gray-900 rounded-xl shadow-2xl w-full max-w-3xl overflow-hidden relative">
      
      {/* Close Button */}
      <div className="flex justify-end p-4">
        <button
          onClick={handleCloseModal}
          className="text-white text-3xl font-bold hover:text-purple-500"
        >
          &times;
        </button>
      </div>

      {/* Content */}
      <div className="flex flex-col">
        
        {/* Project Image */}
        <div className="w-full flex justify-center px-4">
          <img
            src={selectedProject.image}
            alt={selectedProject.title}
            className="w-full max-h-[300px] object-contain rounded-xl shadow-2xl"
          />
        </div>

        {/* Text Section */}
        <div className="px-6 pb-8">
          <h3 className="text-2xl lg:text-3xl text-white mb-4 font-semibold text-center lg:text-left">
            {selectedProject.title}
          </h3>
          <p className="text-gray-400 text-sm lg:text-base leading-relaxed text-justify">
            {selectedProject.description}
          </p>

          {/* View Live Button */}
         
            <div className="text-center mt-6">
              <a
                href={selectedProject.webapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 text-white font-semibold bg-[#8245ec] rounded-full hover:bg-purple-600 transition duration-300"
              >
                View Project Live
              </a>
            </div>
           </div>
      </div>
    </div>
  </div>
)}

  </div>
</section>
  )}

export default Projects ;