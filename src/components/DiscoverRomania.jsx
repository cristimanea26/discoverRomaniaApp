import React from 'react';
import { motion as m } from 'framer-motion';
import { fadeIn } from './Animations.jsx';

const DiscoverRomania = () => {
  return (
    <div className='discoverRomania'>
      <m.div
        className='dRBanner'
        variants={fadeIn('down', 'tween', 0.75, 1)}
        initial='hidden'
        animate='show'
      >
        <m.div
          className='dRBannerTitle'
          variants={fadeIn('up', 'tween', 1.5, 2)}
          initial='hidden'
          animate='show'
        >
          <h2>DISCOVER</h2>
          <h1>ROMANIA</h1>
          <p>This project was made using the following design:</p>
          <a
            href='https://www.figma.com/file/kWATAszSANhAXBRQX3f6lj/Visit-Romania-parallax'
            target='_blank'
          >
            Discover Romania
          </a>
        </m.div>
      </m.div>
      <div className='dRInfo'>
        <div className='dRInfoContainer'>
          <m.div
            className='dRInfoInner'
            variants={fadeIn('right', 'tween', 0.75, 1)}
            initial='hidden'
            animate='show'
          >
            <h1>Explore the nature</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non
              leo eget est consequat bibendum dictum et arcu. Curabitur sapien
              leo, faucibus in libero in, vestibulum maximus riscus. Donec
              sagittis augue nec mauris rutrum dapibus. Quisque lacinia nisi nec
              turpis pretium feugiat. Nullam eu euismond ante.
            </p>
            <p>
              Aliquam molestie vestibulum odio, in vehicula eros vehicula et.
              Maecenas justo est, congue sed neque eget, finibus viverra ipsum.
              Suspendisse potenti. Nam iaculis metus non nibh porttitor
              malesuada.
            </p>
          </m.div>
          <m.div
            className='dRInfoImg'
            variants={fadeIn('left', 'tween', 0.75, 1)}
            initial='hidden'
            animate='show'
          >
            <div className='dRInfoImgInner'>
              <a href='#explorethenature'>Explore the nature</a>
            </div>
          </m.div>
        </div>
      </div>
      <div className='dRLandmarks'>
        <m.div
          className='dRLandmarksContainer'
          variants={fadeIn('down', 'tween', 0.75, 1)}
          initial='hidden'
          animate='show'
        >
          <div className='dRLandmarksInner countryside'>
            <a href='#countryside'>COUNTRYSIDE</a>
          </div>
        </m.div>
        <m.div
          className='dRLandmarksContainer'
          variants={fadeIn('right', 'tween', 0.75, 1)}
          initial='hidden'
          animate='show'
        >
          <div className='dRLandmarksInner cities'>
            <a href='#cities'>CITIES</a>
          </div>
        </m.div>
        <m.div
          className='dRLandmarksContainer'
          variants={fadeIn('up', 'tween', 0.75, 1)}
          initial='hidden'
          animate='show'
        >
          <div className='dRLandmarksInner landmarks'>
            <a href='#landmarks'>LANDMARKS</a>
          </div>
        </m.div>
      </div>
    </div>
  );
};

export default DiscoverRomania;
