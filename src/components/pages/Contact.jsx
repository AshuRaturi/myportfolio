import React, { useRef,useState } from 'react'
import { ToastContainer,toast } from 'react-toastify';
import emailjs from '@emailjs/browser';

const Contact = () => {
const form = useRef();
const [isSent, setisSent]= useState(false);

const handleForm = (e)=>{
   e.preventDefault();

   emailjs
   .sendForm(
    "service_mec47xb", // Service Id of Emailjs
    "template_vcgpf8p", // Email js template ID
    form.current,
    "gkZnRh_C81nHcfpoH" // Email js Public Key

   ).then(
    ()=>{
      setisSent(true);
      form.current.reset(); // Reset form field after Form sent
      toast.success("Mail sent successfully! ✅" ,{
        position: "bottom-right",
        autoClose: 3000,
        theme:"dark",
      });
    }, 
    (error)=>{
      toast.error("error sending msg", error);
            toast.error("Error on submitting, Try Again" ,{
        position: "bottom-right",
        autoClose: 3000,
        theme:"dark",
      });
    }
   )
}

  return (
       <section 
   id='contact'
   className='clip-path-custome  pb-16 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-[#050414] flex flex-col items-center justify-center'
   >
    <ToastContainer/>

    <div className='text-center mb-8'>
      <h2 className='text-3xl sm:text-4xl font-bold text-white'>Contact</h2>
      <div className='w-24 h-1 bg-[#8245ec] mx-auto mt-2'></div>
      <p className='text-gray-400 mt-4  font-semibold'>I'd love to hear from you-reach out for any opportunities or questions!</p>
    </div>

    {/* Contact Form */}
    <div className='mt-8 w-full max-w-md bg-[#0d081f] p-6 rounded-lg shadow-lg border border-gray-700 '>
      <h3 className='text-xl font-semibold text-white text-center'>Connect With Me</h3>

      {/* Form */}
      <form ref={form} onSubmit={handleForm} className='flex flex-col spae-y-4 mt-4'>
        <input type="text" name="name" placeholder='Your Name' className='w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:border-purple-500 mb-4' required/>
        <input type="email" name="email" placeholder='Your E-Mail' className='w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:border-purple-500 mb-4' required/>
        <input type="text" name="subject" placeholder='Subject' className='w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:border-purple-500 mb-4' />
        <textarea name="message" placeholder='Message' rows="4" className='w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:border-purple-500 mb-4'></textarea>

        {/* Send Button */}
        <button 
        type='submit'
        className='w-full bg-gradient-to-r from-purple-600 to-pink-500 py-3 text-white font-semibold rounded-md hover:opacity-90 transition'>
         Send
        </button>
      </form>
    </div>

    </section>
  )
}

export default Contact