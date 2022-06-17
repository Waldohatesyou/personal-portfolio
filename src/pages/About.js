import React from 'react'
import bird from '../assets/images/bird.JPG'

function About() {
  return (
    <div className='flex flex-col items-center '>
      <p className='text-5xl mt-20 text-theme font-bold'>About Me!</p>
      <p className='mt-2'>Who am I, what do I do?</p>
      <img className=' mt-12 mx-auto text-center px-12' src={bird} alt='Bird' width={750} ></img>
      <p className='mt-6 px-6 max-w-4xl'>My name is Yusuf, I'm a Computer Science and Business Student from the <b>University of Western Ontario.</b> I have worked previously as the lead programming instructor for a Code Ninjas Center.</p>
      <p className='mt-2.5 px-6 max-w-4xl '>I have worked previously as the lead programming instructor for a Code Ninjas Center teaching programming fundamentals through JavaScript, Lua, Python.</p>
    </div>
  )
}

export default About