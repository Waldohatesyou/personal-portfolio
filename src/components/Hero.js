import './Hero.css';
import {Animated} from 'react-animated-css'
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import React, { Component } from 'react'

export default class Hero extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hello: "Hello!"
        };
    }

    componentDidMount() {
        this.helloInterval = setInterval(() => this.tick(), 1500); 
    }

    componentWillUnmount() {
        clearInterval(this.helloInterval);
    }

    tick() {        
        switch (this.state.hello) {
            case "Hello!":
                this.setState({
                    hello: "Привет!"
                })
                break;
        
            case "Привет!":
                this.setState({
                    hello: "你好!"
                })
                break;

            case "你好!":
                this.setState({
                    hello: "Hola!"
                })
                break;

            case "Hola!":
                this.setState({
                    hello: "नमस्ते!"
                })
                break;

            
            case "नमस्ते!":
                this.setState({
                    hello: "Bonjour!"
                })
                break;

            case "Bonjour!":
                this.setState({
                    hello: "Hello!"
                })
                break;
        }
    }

  render() {
    return (
        <div>
        <div className="flex items-center flex-col">
            {/*Hello header*/}
        <Animated animationIn='fadeInUp' animationInDuration={2000} isVisible={true}>
        <p className='text-9xl font-bold mt-20 pt-20 pb-4 gradient-hello '>{this.state.hello}</p>
        </Animated>
        {/*Description*/}
        <Animated animationIn='fadeInUp' animationInDuration={1300} animationInDelay={1050} isVisible={true}>
            <p className='text-center mt-8 max-w-lg'>My name is Yusuf, I'm a Computer Science and Business Student from the <b>University of Western Ontario.</b></p>
        </Animated> 
        {/*Neumorphic icons*/}
        <div className='flex justify-center space-x-10 mt-10 '>
            <FontAwesomeIcon icon={faGithub} className='nm-flat-white-sm text-4xl rounded-full p-5 max-w-xs active:nm-inset-white-sm' />
            <FontAwesomeIcon icon={faLinkedin} className='nm-flat-white-sm text-4xl rounded-full p-5 max-w-xs active:nm-inset-white-sm' />
            <FontAwesomeIcon icon={faEnvelope} className='nm-flat-white-sm text-4xl rounded-full p-5 max-w-xs active:nm-inset-white-sm' />
        </div>
        {/*<div className='nm-flat-button-sm px-24 py-4 mt-6 rounded-full text-lg text-white active:nm-inset-button-sm'>View my work!</div>*/}
        </div>
    </div>
    )
  }
}

