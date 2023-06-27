import React from 'react';
// import img from '../assets/avatar.svg'BL.JPG
import img from '../assets/BL.JPG'

import { FaGithub, FaYoutube, FaDribbble } from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import { Link } from 'react-scroll';

const Banner = () => {
  return (
    <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1
              variants={fadeIn('up', 0.3)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'>
              Manik <span>Molla</span>
            </motion.h1>
            <div className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercse leading-[1]'>
              <span className='text-white mr-4'>I am a</span>
              <TypeAnimation sequence={[
                'Developer',
                200,
                'Designer',
                200,
                'Programer',
                200,
              ]}
                speed={50}
                className='text-accent'
                wrapper='span'
                repeat={Infinity}
              />
            </div>
            <motion.p
              variants={fadeIn('up', 0.3)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.5 }}
              className='mb-8 max-w-lg mx-auto lg:mx-0'>With a CSE degree, you have gained a strong foundation in various areas of computer science, including programming, algorithms, data structures, software development, computer architecture, databases, and more.
              This knowledge and skill set can be applied in a wide range of industries, such as software development, cybersecurity, data analysis, artificial intelligence, web development, and many others.
            </motion.p>
            <div className='flex max-w-max gap-x-6 items-center mb-12 mx-autolg:mx-0'>
              <Link to='contact'>
                <button className='btn btn-sm'>Contact me</button>
              </Link>
              <a href='#' className='text-gradien btn-link'>
                My Portfolio
              </a>
            </div>
            <motion.div
              variants={fadeIn('up', 0.3)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.5 }}
              className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
              <a href="#">
                <FaYoutube></FaYoutube>
              </a>
              <a href="#">
                <FaGithub></FaGithub>
              </a>
              <a href="#">
                <FaDribbble></FaDribbble>
              </a>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn('down', 0.5)}
            initial="hidden"
            whileInView={'show'}
            className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'>
            <img className='w-[350px]' src={img} alt=''></img>
          </motion.div>
        </div>
      </div>
    </section >
  )
};

export default Banner;
