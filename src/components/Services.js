import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

const services = [
  {
    name: 'UI/UX Design',
    description: 'With a CSE degree, you have gained a strong foundation in various areas of computer science.With a CSE degree, you have gained a strong foundation in various areas of computer science.',
    link: 'Learn more...'
  },
  {
    name: 'UI/UX Design',
    description: 'With a CSE degree, you have gained a strong foundation in various areas of computer science.With a CSE degree, you have gained a strong foundation in various areas of computer science.',
    link: 'Learn more...'
  },
  {
    name: 'UI/UX Design',
    description: 'With a CSE degree, you have gained a strong foundation in various areas of computer science.With a CSE degree, you have gained a strong foundation in various areas of computer science.',
    link: 'Learn more...'
  },
  {
    name: 'UI/UX Design',
    description: 'With a CSE degree, you have gained a strong foundation in various areas of computer science.With a CSE degree, you have gained a strong foundation in various areas of computer science.',
    link: 'Learn more...'
  },
  {
    name: 'UI/UX Design',
    description: 'With a CSE degree, you have gained a strong foundation in various areas of computer science.With a CSE degree, you have gained a strong foundation in various areas of computer science.',
    link: 'Learn more...'
  },
]
const Services = () => {
  return (
    <section className='section' id='service'>
      <div className='container mx-auto mt-[200px]'>
        <div className='flex flex-col lg:flex-row'>
          {/* text  */}
          <div className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'>
            <h2 className='h2 text-accent mb-6'>
              What I Do
            </h2>
            <motion.h3
              variants={fadeIn('right', 0.3)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.3 }}
              className='h3 max-w-[455px] mb-16'>
              With a CSE degree, you have gained a strong foundation in various areas of computer science.
            </motion.h3>
            {/* <buttonn className='btn btn-lg'>See my work</buttonn> */}
            <motion.button
              variants={fadeIn('up', 0.3)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.5 }}
              className='btn btn-lg'>
              See my work
            </motion.button>
          </div>
          {/* Services  */}
          <div className='flex-1'>
            <div>
              {
                services.map((service, index) => {

                  return (
                    <div className='border-b border-white/20 h-[146px] mb[38px] flex' key={index}>
                      <motion.div
                        variants={fadeIn('up', 0.3)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.5 }}
                        className='max-w-[476px]'>
                        <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>{service.name}</h4>
                        <p className='font-secondary leading-tight'>{service.description}</p>
                      </motion.div>
                      <motion.div
                        variants={fadeIn('left', 0.3)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.5 }}
                        className='flex flex-col flex-1 items-end'>
                        <a href='allwork' className='btn w-9 h-9 mb-[40px] flex justify-center item-center'>
                          <BsArrowUpRight></BsArrowUpRight>
                        </a>
                        <a href='#' className='text-gradient text-sm'>
                          {service.link}
                        </a>
                      </motion.div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Services;
