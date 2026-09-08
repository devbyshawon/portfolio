'use client';

import { personalInfo } from './lib/constants';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, bounceScroll } from './lib/animations';

const Home = () => {
  return (
    <main className='min-h-screen bg-primary'>
      {/* Hero Section */}
      <section className='section flex flex-col items-center justify-center min-h-screen bg-linear-to-br from-primary to-bg-subtle pt-20'>
        <motion.div
          className='text-center max-w-2xl'
          variants={staggerContainer}
          initial='initial'
          animate='animate'
        >
          {/* HEADLINE */}
          <motion.h1
            className='text-6xl md:text-5xl font-bold text-text-light mb-4 font-grotesk'
            variants={fadeInUp}
          >
            Crafting Digital Solutions
          </motion.h1>

          {/* SUBHEADLINE */}
          <motion.p
            className='text-xl text-text-secondary mb-8'
            variants={fadeInUp}
          >
            Full-stack MERN developer building production systems that solve real problems
          </motion.p>

                    {/* BUTTONS */}
          <motion.div
            className='flex gap-4 justify-center flex-wrap'
            variants={fadeInUp}
          >
            <button className='btn-primary'>
              Explore My Work
            </button>
            <button className='btn-secondary'>
              Download Resume
            </button>
          </motion.div>

          {/* SOCIAL LINKS */}
          <motion.div
            className='flex gap-6 justify-center mt-12'
            variants={fadeInUp}
          >
            <a 
                href={personalInfo.github} 
                target='_blank' 
                rel='noopener noreferrer' 
                className='text-secondary hover:text-accent transition-colors'
            >
              GitHub
            </a>

            <a 
                href={personalInfo.linkedin} 
                target='_blank' 
                rel='noopener noreferrer' 
                className='text-secondary hover:text-accent transition-colors'
            >
              LinkedIn
            </a>

            <a 
                href={personalInfo.twitter} 
                target='_blank' 
                rel='noopener noreferrer' 
                className='text-secondary hover:text-accent transition-colors'
            >
              Twitter
            </a>
          </motion.div>
        </motion.div>

        {/* SCROLL INDICATOR */}
        <motion.div
          className='absolute bottom-8 left-1/2 transform -translate-x-1/2'
          animate={bounceScroll.animate}
          transition={bounceScroll.transition}
        >
          <ChevronDown className='text-secondary' size={32} />
        </motion.div>
      </section>

      {/* ABOUT SECTION PLACEHOLDER */}
      <section id='about' className='section bg-bg-subtle'>
        <h2 className='text-4xl font-bold text-center mb-8'>About Me</h2>
        <p className='text-center text-text-secondary max-w-2xl mx-auto'>
          Coming soon...
        </p>
      </section>
    </main>
  )
};

export default Home;