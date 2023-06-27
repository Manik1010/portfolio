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
      <div className='container mx-auto'>
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
              With a CSE degree, you have gained a strong foundation in various areas of computer science.
            </h3>
            <motion.p
              variants={fadeIn('left', 0.3)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.5 }}
              className='mb-6'>
              lorem20 With a CSE degree, you have gained a strong foundation in various areas of computer science, including programming, algorithms, data structures, software development, computer architecture, databases, and more.
              This knowledge and skill set can be applied in a wide range of industries With a CSE degree, you have gained a strong foundation in various areas of computer science, including programming, algorithms, data structures, software development, computer architecture, databases, and more.
            </motion.p>
            <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {
                    inView ?
                      <CountUp start={0} end={13} duration={3}></CountUp> :
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
                      <CountUp start={0} end={15} duration={3}></CountUp> :
                      null
                  }
                  k+
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
                      <CountUp start={0} end={12} duration={3}></CountUp> :
                      null
                  }
                  k+
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
