import React from 'react';

import img1 from '../assets/portfolio-img1.png'
import img2 from '../assets/portfolio-img2.png'
import img3 from '../assets/portfolio-img3.png'

import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

const Work = () => {
  return (
    <section className='section' id='work'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-x-10'>
          <div className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
            {/* Text  */}
            <div>
              <motion.h2
                variants={fadeIn('up', 0.3)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.7 }}
                className='h2 leading-tight text-accent'>
                My Latest <br />
                Work.
              </motion.h2>
              <motion.p
                variants={fadeIn('up', 0.3)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.7 }}
                className='max-w-sm mb-16'>
                With a CSE degree, you have gained a strong foundation in various areas of computer science.
                With a CSE degree, you have gained a strong foundation in various areas of computer science.
              </motion.p>
              <button className='btn btn-lg'>View all project</button>
            </div>
            {/* Image  */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* overta  */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* img  */}
              <img
                className='group-hover:scale-125 transition-all duration-500'
                src={img1}
                alt='' >
              </img>
              {/* pertitle  */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>UI/UX Design</span>
              </div>
              {/* title  */}
              {/* <div >
                <span>Project Title</span>
              </div> */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>Project Title</span>
              </div>
            </div>
          </div>
          <div className='flex-1 flex flex-col gap-y-10'>

            {/* Image  */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* overta  */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* img  */}
              <img
                className='group-hover:scale-125 transition-all duration-500'
                src={img2}
                alt='' >
              </img>
              {/* pertitle  */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>UI/UX Design</span>
              </div>
              {/* title  */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>Project Title</span>
              </div>
            </div>
            {/* Image  */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* overta  */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* img  */}
              <img
                className='group-hover:scale-125 transition-all duration-500'
                src={img3}
                alt='' >
              </img>
              {/* pertitle  */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>UI/UX Design</span>
              </div>
              {/* title  */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>Project Title</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Work;
