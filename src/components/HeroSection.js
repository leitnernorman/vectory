import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-3.mov' autoPlay loop muted />
      <img className="tvlogo" alt="logo" src="/images/logo.png"/>
      <h1 href="#contact">Vectory Tattoo</h1>
      
      <div className='hero-btns'>
        {/* <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Ajánlatkérés
        </Button> */}
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          url='#contact'
          // onClick={console.log('hey')}
        >
          Ajánlatkérés
          {/* Ajánlatkérés <i className='far fa-play-circle' /> */}
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
