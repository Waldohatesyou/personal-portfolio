import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function NavbarIcons() {
  return (
    <div className='flex py-6 px-8 md:px-14 lg:px-24 w-full justify-between '>
        <a className='shrink-0 pr-16 font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-theme to-secondary'>Yusuf.nissar</a>
        <div className='justify-end hidden md:flex w-full'>
            {/* Page tabs */}
            <div className='space-x-12 py-1 child-hover:text-secondary'>
                <a className=''>Home</a>
                <a className=''>My projects</a>
                <a className=''>Resume</a>
                <a className=''>Contact me</a>
                
        
            </div>
            {/* Social media 
            <div className='space-x-12 child:text-text child-hover:text-secondary'>
            <FontAwesomeIcon icon={faInstagram} className="text-3xl" />
            <FontAwesomeIcon icon={faGithub} className="text-3xl " />
            <FontAwesomeIcon icon={faLinkedin} className="text-3xl" />
            </div>
        */}
        </div>
        <div className='md:hidden'>Hamburger</div>
        <FontAwesomeIcon icon={faBars} className="md:hidden text-white text-3xl"/>
    </div>

)
}


export default NavbarIcons