import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  return (
        <div className='flex py-6 px-8 md:px-14 lg:px-24 w-full justify-between'>
            <a className='shrink-0 pr-16 font-bold text-lg'>Yusuf.nissar</a>
            <div className='justify-between hidden md:flex w-full'>
                <div className='space-x-12 py-1'>

                    
            
                </div>
                <div className='space-x-12'>
                <a>Home</a>
                <a>My projects</a>
                    <a>Resume</a>
                    <a className='px-6 py-2 bg-theme font-bold'>Contact</a>
                </div>
            </div>
            <div className='md:hidden'>Hamburger</div>
            <FontAwesomeIcon icon={faBars} className="md:hidden text-white text-3xl"/>
        </div>

  )
}

export default Navbar