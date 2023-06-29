import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants'
import { Link } from 'react-scroll';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,

  });
  return (
    <section className='section' id='about' ref={ref}>
      {/* About */}
      <div className='container mx-auto mt-10'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
          {/* Img  */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'>
          </motion.div>
          {/* Text  */}
          <div className='flex-1'>
            <motion.h2
              variants={fadeIn('left', 0.3)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.5 }}
              className='h2 text-accent'>
              About me
            </motion.h2>
            <h3 className='h3 mb-4'>
              Welcome to my portfolio! I'm Manik Molla, a junior MERN stack developer who is enthusiastic about creating dynamic web applications.
            </h3>
            <motion.p
              variants={fadeIn('left', 0.3)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.5 }}
              className='mb-6'>
              I recently completed an intensive web development course at Programming Hero, where I honed my skills in the MERN stack. Equipped with a solid foundation in JavaScript, I thrive on crafting interactive and responsive user interfaces.
              <br />
              With a Bachelor's degree in Computer Science and Engineering from Daffodil International University, I have gained a comprehensive understanding of software development principles and practices. My educational background, combined with hands-on
              experience in building applications using MongoDB, Express.js, React, and Node.js, enables me to develop robust and scalable solutions. I am passionate about staying up-to-date with the latest industry trends and continuously expanding my knowledge to deliver cutting-edge projects.
            </motion.p>
            <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {
                    inView ?
                      <CountUp start={10} end={0} duration={3}></CountUp> :
                      null
                  }
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Years of <br />
                  Experience
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {
                    inView ?
                      <CountUp start={0} end={25} duration={3}></CountUp> :
                      null
                  }
                  +
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Project <br />
                  Completed
                </div>
              </div>

              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {
                    inView ?
                      <CountUp start={0} end={22} duration={3}></CountUp> :
                      null
                  }
                  +
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Satisfied <br />
                  Clients
                </div>
              </div>
            </div>
            <div className='flex gap-x-8 items-center'>
              <Link to='contact'>
                <button className='btn btn-sm'>Contact me</button>
              </Link>
              <a href='#' className='text-gradient btn-link'>
                My Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
};

export default About;
