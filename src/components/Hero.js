import React from 'react';
import './Hero.css';
import {Animated} from 'react-animated-css'
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Hero() {
  return (
    <div>
        <div className="flex items-center flex-col">
        <Animated animationIn='fadeInUp' animationInDuration={2000} isVisible={true}>
        <p className='text-9xl font-bold mt-20 pt-20 gradient-hello '>Hello</p>
        </Animated>
        <Animated animationIn='fadeInUp' animationInDuration={1300} animationInDelay={1050} isVisible={true}>
            <p className='text-center mt-8 max-w-lg'>My name is Yusuf, I'm a Computer Science and Business Student from the <b>University of Western Ontario</b></p>
        </Animated> 
        <div className='flex justify-center space-x-10 mt-10 '>
            <FontAwesomeIcon icon={faGithub} className='nm-flat-white-sm text-4xl rounded-full p-6 max-w-xs active:nm-inset-white-sm' />
            <FontAwesomeIcon icon={faLinkedin} className='nm-flat-white-sm text-4xl rounded-full p-6 max-w-xs active:nm-inset-white-sm' />
            <FontAwesomeIcon icon={faEnvelope} className='nm-flat-white-sm text-4xl rounded-full p-6 max-w-xs active:nm-inset-white-sm' />
        </div>
        </div>
    </div>

  )
}

export default Hero