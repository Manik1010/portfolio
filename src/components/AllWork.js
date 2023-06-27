import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import { SwiperComponent as Swiper } from 'swiper/react';
import { TypeAnimation } from 'react-type-animation'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import { motion } from 'framer-motion';
import { fadeIn } from '../variants'
import { BsArrowUpRight } from 'react-icons/bs';

import img1 from '../assets/Project/PHP/addEvent.png';
import img2 from '../assets/Project/PHP/edite.png';
import img3 from '../assets/Project/PHP/readmore.png';
// import img5 from '../assets/Project/PHP/comiteeMembers.JPG';
import img6 from '../assets/Project/PHP/edite.png';
import img7 from '../assets/Project/PHP/particepentmemberInfo.JPG';
import img8 from '../assets/Project/PHP/particepentmemberSearch.JPG';
import img9 from '../assets/Project/PHP/Story_2/1-AddSupperAdmin.png';
import img10 from '../assets/Project/PHP/Story_2/2-AllEventSupper.png';
import img11 from '../assets/Project/PHP/Story_2/3-ApprovslSupper.png';
import img12 from '../assets/Project/PHP/Story_2/4-AddEventManager.png';
import img13 from '../assets/Project/PHP/Story_2/5-AllEventMannager.png';
import img14 from '../assets/Project/PHP/Story_2/all_event_manager.JPG';


import f1 from '../assets/Project/flavors of bangladesh/f_1.JPG'
import f2 from '../assets/Project/flavors of bangladesh/f_2.JPG'
import f3 from '../assets/Project/flavors of bangladesh/f_3.JPG'
import f4 from '../assets/Project/flavors of bangladesh/f_4.JPG'
import f5 from '../assets/Project/flavors of bangladesh/f_5.JPG'
import f6 from '../assets/Project/flavors of bangladesh/f_6.JPG'
import f7 from '../assets/Project/flavors of bangladesh/f_7.JPG'
import f8 from '../assets/Project/flavors of bangladesh/f_8.JPG'

import t1 from '../assets/Project/Magic Toy Mart/1.JPG'
import t2 from '../assets/Project/Magic Toy Mart/2.JPG'
import t3 from '../assets/Project/Magic Toy Mart/3.JPG'
import t4 from '../assets/Project/Magic Toy Mart/4.JPG'
import t5 from '../assets/Project/Magic Toy Mart/5.JPG'
import t6 from '../assets/Project/Magic Toy Mart/6.JPG'
import t7 from '../assets/Project/Magic Toy Mart/7.JPG'
import t8 from '../assets/Project/Magic Toy Mart/8.JPG'
import t9 from '../assets/Project/Magic Toy Mart/add.JPG'
import t10 from '../assets/Project/Magic Toy Mart/9.JPG'
import t11 from '../assets/Project/Magic Toy Mart/10.JPG'
import t12 from '../assets/Project/Magic Toy Mart/11.JPG'

import a1 from '../assets/Project/Alnumoni/unregister/reg.png'
import a2 from '../assets/Project/Alnumoni/unregister/login.png'
import a3 from '../assets/Project/Alnumoni/unregister/contact1.png'

import b1 from '../assets/Project/Assigenment_03/1.JPG';
import b2 from '../assets/Project/Assigenment_03/2.JPG';
import b3 from '../assets/Project/Assigenment_03/3.JPG';
import b4 from '../assets/Project/Assigenment_03/4.JPG';
import b5 from '../assets/Project/Assigenment_03/5.JPG';
import b6 from '../assets/Project/Assigenment_03/4.JPG';
import b7 from '../assets/Project/Assigenment_03/5.JPG';

import j1 from '../assets/Project/Assigenment_03/1.JPG';
import j2 from '../assets/Project/Assigenment_03/2.JPG';
import j3 from '../assets/Project/Assigenment_03/3.JPG';
import j4 from '../assets/Project/Assigenment_03/4.JPG';
import j5 from '../assets/Project/Assigenment_03/5.JPG';


const AllWork = () => {
    return (
        <section>
            <div className='container mx-auto'>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <h1 className="text-3xl font-bold my-4">Project Name: Tour KOro <span></span></h1>
                    <h3 className="font-bold my-4">Project Base: PHP Project</h3>
                    {/* Slider....... */}
                    <div>
                        <Swiper
                            spaceBetween={30}
                            centeredSlides={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            modules={[Autoplay, Pagination, Navigation]}
                            className="mySwiper"
                        >

                            <SwiperSlide>
                                <img src={img1}></img>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={img2}></img>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={img3}></img>
                            </SwiperSlide>
                            {/* 
                            <SwiperSlide>
                                <img src={img5}></img>
                            </SwiperSlide> */}
                            <SwiperSlide>
                                <img src={img6}></img>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={img7}></img>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={img8}></img>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={img9}></img>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={img10}></img>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={img11}></img>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={img12}></img>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={img13}></img>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={img14}></img>
                            </SwiperSlide>

                        </Swiper>
                    </div>
                    {/* Text  */}
                    <div>
                        <h4>Project Name</h4>
                        <p>
                            With a CSE degree, you have gained a strong foundation in various areas of computer science. With a CSE degree, you have gained a strong foundation in various areas of computer science.
                            With a CSE degree, you have gained a strong foundation in various areas of computer science.With a CSE degree, you have gained a strong foundation in various areas of computer science.
                        </p>
                    </div>
                </div>
                {/* second project  */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* <h1 className="text-3xl font-bold mt-4">Project Name: Flavors of Bangladesh <span></span></h1> */}
                    <motion.h2
                        variants={fadeIn('up', 0.3)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.7 }}
                        className="text-3xl font-bold mt-4">
                        Project Name: Flavors of Bangladesh
                        <span><a href='https://magice-toy-mart.web.app/' className='ml-[540px] mt-[-35px] btn w-9 h-9 mb-[40px] flex justify-center item-center'>
                            <BsArrowUpRight></BsArrowUpRight>
                        </a></span>
                    </motion.h2>
                    <h3 className="mt-4 text-[36px] lg:text-[40px] font-secondary font-semibold">
                        Technology used:
                        <TypeAnimation sequence={[
                            'JavaScript',
                            300,
                            'Tailwind',
                            300,
                            'DaisyUI',
                            300,
                            'React.js',
                            300,
                            'Express.js',
                            300,
                            'MongoDB',
                            300,
                            'Vercel',
                            300,
                            'Authentication',
                            300,
                        ]}
                            speed={50}
                            className='text-accent'
                            wrapper='span'
                            repeat={Infinity}
                        />
                    </h3>

                    {/* Slider....... */}
                    <div className="md:mt-[-20px]">
                        <Swiper
                            spaceBetween={30}
                            centeredSlides={true}
                            autoplay={{
                                delay: 3500,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            modules={[Autoplay, Pagination, Navigation]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <img src={f1}></img>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={f2}></img>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={f3}></img>
                            </SwiperSlide>

                            <SwiperSlide>
                                <img src={f4}></img>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={f5}></img>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={f6}></img>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={f7}></img>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={f8}></img>
                            </SwiperSlide>

                        </Swiper>
                    </div>
                    {/* Text  */}
                    <div className="md:mt-[-20px]">
                        <h4>"Flavors of Bangladesh" is a React-based project that aims to showcase the diverse culinary heritage of Bangladesh. The project includes a header and footer to provide a consistent layout across the website. </h4>
                        <p>
                            One of the key features of the project is the Register and Login system, which utilizes the Firebase Authentication system. Users can create an account, log in, and access personalized features.
                            The website also includes a banner section, which serves as a visually appealing introduction to the site. The banner section may include enticing images or promotional content related to Bangladeshi cuisine.
                        </p>
                        {/* <p>
                            The about section provides information about the project, such as its purpose, goals, and the team behind it. It may also highlight the cultural significance of Bangladeshi cuisine and its impact on the country's identity.<br />
                            The all recipes section is a comprehensive collection of various Bangladeshi recipes. Users can browse through different categories or search for specific recipes. Each recipe may include ingredients, step-by-step instructions, and accompanying images
                        </p> */}
                        <p>
                            Lastly, the contact section allows users to get in touch with the project team. It may include a contact form or provide contact details for inquiries, feedback, or collaboration opportunities.
                            <br />
                            Overall, "Flavors of Bangladesh" aims to celebrate the rich culinary traditions of Bangladesh through an engaging and user-friendly web platform, offering a combination of information, recipes, and interactive features for users to explore and enjoy.
                        </p>
                        <motion.div
                            variants={fadeIn('up', 0.3)}
                            initial="hidden"
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.5 }}
                            className="grid grid-cols-2 md:grid-cols-2">
                            <div>Client Site:
                                <a href='https://magice-toy-mart.web.app/' className='ml-[80px] mt-[-35px] btn w-9 h-9 mb-[40px] flex justify-center item-center'>
                                    <BsArrowUpRight></BsArrowUpRight>
                                </a>
                            </div>
                            <div>Server Site:
                                <span><a href='https://magice-toy-mart.web.app/' className='ml-[80px] mt-[-35px] btn w-9 h-9 mb-[40px] flex justify-center item-center'>
                                    <BsArrowUpRight></BsArrowUpRight>
                                </a></span>
                            </div>
                        </motion.div>
                    </div>
                </div>
                {/* Third project  */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-2">
                    {/* <h1 className="text-3xl font-bold mt-4">Project Name: Flavors of Bangladesh <span></span></h1> */}
                    <motion.h2
                        variants={fadeIn('up', 0.3)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.7 }}
                        className="text-3xl font-bold mt-4">
                        Project Name: Magical Toy Mart
                        <span><a href='https://magice-toy-mart.web.app/' className='ml-[460px] mt-[-35px] btn w-9 h-9 mb-[40px] flex justify-center item-center'>
                            <BsArrowUpRight></BsArrowUpRight>
                        </a></span>
                    </motion.h2>
                    <h3 className="mt-4 text-[36px] lg:text-[40px] font-secondary font-semibold">
                        Technology used:
                        <TypeAnimation sequence={[
                            'JavaScript',
                            300,
                            'Tailwind',
                            300,
                            'DaisyUI',
                            300,
                            'React.js',
                            300,
                            'Express.js',
                            300,
                            'MongoDB',
                            300,
                            'Vercel',
                            300,
                            'Authentication',
                            300,
                        ]}
                            speed={50}
                            className='text-accent'
                            wrapper='span'
                            repeat={Infinity}
                        />
                    </h3>

                    {/* Slider....... */}
                    <div className="md:mt-[-20px]">
                        <Swiper
                            spaceBetween={30}
                            centeredSlides={true}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            modules={[Autoplay, Pagination, Navigation]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <img src={t1}></img>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={t2}></img>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={t3}></img>
                            </SwiperSlide>

                            <SwiperSlide>
                                <img src={t4}></img>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={t5}></img>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={t6}></img>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={t7}></img>
                            </SwiperSlide>

                            <SwiperSlide>
                                <img src={t8}></img>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={t10}></img>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={t11}></img>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={t12}></img>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={t9}></img>
                            </SwiperSlide>

                        </Swiper>
                    </div>
                    {/* Text  */}
                    <div className="md:mt-[-20px]">
                        <h4>""Magical Toy Mart" is a React-based project focused on educational and learning toys. The project aims to provide a platform for users to explore, purchase, and engage with a wide range of educational toys.</h4>
                        <p>
                            The project organizes toys into different categories based on subjects like Math, Science, Engineering, and more. Each category showcases a variety of toys that align with the respective subject, allowing users to easily find toys suitable for specific educational needs.
                        </p>
                        <p>
                            Additionally, the project incorporates two routers. The first router, "All Toys," enables users to view and explore the entire collection of toys available in the Magical Toy. The second router, "My Toy," provides a personalized
                            experience by displaying only the toys posted by the logged-in user. Users can access and manage their posted toys using basic CRUD functionality, allowing them to create, read, update, and delete their toy listings.
                        </p>
                        <p>
                            Overall, "Magical Toy Mart" seeks to provide a user-friendly platform for discovering and engaging with educational and learning toys. By combining a range of features, including authentication, service information, categorized toy selection,
                            a captivating gallery, and personalized toy management, the project aims to create an enriching and enjoyable experience for users interested in educational toys.
                        </p>
                        <motion.div
                            variants={fadeIn('up', 0.3)}
                            initial="hidden"
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.5 }}
                            className="grid grid-cols-2 md:grid-cols-2">
                            <div>Client Site:
                                <a href='https://magice-toy-mart.web.app/' className='ml-[80px] mt-[-35px] btn w-9 h-9 mb-[40px] flex justify-center item-center'>
                                    <BsArrowUpRight></BsArrowUpRight>
                                </a>
                            </div>
                            <div>Server Site:
                                <span><a href='https://magice-toy-mart.web.app/' className='ml-[80px] mt-[-35px] btn w-9 h-9 mb-[40px] flex justify-center item-center'>
                                    <BsArrowUpRight></BsArrowUpRight>
                                </a></span>
                            </div>
                        </motion.div>
                    </div>
                </div>
                {/* Forth project  */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-2">
                    {/* <h1 className="text-3xl font-bold mt-4">Project Name: Flavors of Bangladesh <span></span></h1> */}
                    <motion.h2
                        variants={fadeIn('up', 0.3)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.7 }}
                        className="text-3xl font-bold mt-4">
                        Project Name: Alomoni Aconnson
                        <span><a href='https://magice-toy-mart.web.app/' className='ml-[460px] mt-[-35px] btn w-9 h-9 mb-[40px] flex justify-center item-center'>
                            <BsArrowUpRight></BsArrowUpRight>
                        </a></span>
                    </motion.h2>
                    <h3 className="mt-4 text-[36px] lg:text-[40px] font-secondary font-semibold">
                        Technology used:
                        <TypeAnimation sequence={[
                            'JavaScript',
                            300,
                            'Tailwind',
                            300,
                            'DaisyUI',
                            300,
                            'React.js',
                            300,
                            'Express.js',
                            300,
                            'MongoDB',
                            300,
                            'Vercel',
                            300,
                            'Authentication',
                            300,
                        ]}
                            speed={50}
                            className='text-accent'
                            wrapper='span'
                            repeat={Infinity}
                        />
                    </h3>

                    {/* Slider....... */}
                    <div className="md:mt-[-20px]">
                        <Swiper
                            spaceBetween={30}
                            centeredSlides={true}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            modules={[Autoplay, Pagination, Navigation]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <img src={a1}></img>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={a2}></img>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={a3}></img>
                            </SwiperSlide>

                        </Swiper>
                    </div>
                    {/* Text  */}
                    <div className="md:mt-[-20px]">
                        <h4>""Magical Toy Mart" is a React-based project focused on educational and learning toys. The project aims to provide a platform for users to explore, purchase, and engage with a wide range of educational toys.</h4>
                        <p>
                            The project organizes toys into different categories based on subjects like Math, Science, Engineering, and more. Each category showcases a variety of toys that align with the respective subject, allowing users to easily find toys suitable for specific educational needs.
                        </p>

                        <p>
                            Overall, "Magical Toy Mart" seeks to provide a user-friendly platform for discovering and engaging with educational and learning toys. By combining a range of features, including authentication, service information, categorized toy selection,
                            a captivating gallery, and personalized toy management, the project aims to create an enriching and enjoyable experience for users interested in educational toys.
                        </p>
                        <motion.div
                            variants={fadeIn('up', 0.3)}
                            initial="hidden"
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.5 }}
                            className="grid grid-cols-2 md:grid-cols-2">
                            <div>Client Site:
                                <a href='https://magice-toy-mart.web.app/' className='ml-[80px] mt-[-35px] btn w-9 h-9 mb-[40px] flex justify-center item-center'>
                                    <BsArrowUpRight></BsArrowUpRight>
                                </a>
                            </div>
                            <div>Server Site:
                                <span><a href='https://magice-toy-mart.web.app/' className='ml-[80px] mt-[-35px] btn w-9 h-9 mb-[40px] flex justify-center item-center'>
                                    <BsArrowUpRight></BsArrowUpRight>
                                </a></span>
                            </div>
                        </motion.div>
                    </div>
                </div>
                {/* fivth project  */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-2">
                    {/* <h1 className="text-3xl font-bold mt-4">Project Name: Flavors of Bangladesh <span></span></h1> */}
                    <motion.h2
                        variants={fadeIn('up', 0.3)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.7 }}
                        className="text-3xl font-bold mt-4">
                        Project Name: Alomoni Aconnson
                        <span><a href='https://magice-toy-mart.web.app/' className='ml-[460px] mt-[-35px] btn w-9 h-9 mb-[40px] flex justify-center item-center'>
                            <BsArrowUpRight></BsArrowUpRight>
                        </a></span>
                    </motion.h2>
                    <h3 className="mt-4 text-[36px] lg:text-[40px] font-secondary font-semibold">
                        Technology used:
                        <TypeAnimation sequence={[
                            'JavaScript',
                            300,
                            'Tailwind',
                            300,
                            'DaisyUI',
                            300,
                            'React.js',
                            300,
                            'Express.js',
                            300,
                            'MongoDB',
                            300,
                            'Vercel',
                            300,
                            'Authentication',
                            300,
                        ]}
                            speed={50}
                            className='text-accent'
                            wrapper='span'
                            repeat={Infinity}
                        />
                    </h3>

                    {/* Slider....... */}
                    <div className="md:mt-[-20px]">
                        <Swiper
                            spaceBetween={30}
                            centeredSlides={true}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            modules={[Autoplay, Pagination, Navigation]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <img src={a1}></img>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={a2}></img>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={a3}></img>
                            </SwiperSlide>

                        </Swiper>
                    </div>
                    {/* Text  */}
                    <div className="md:mt-[-20px]">
                        <h4>""Magical Toy Mart" is a React-based project focused on educational and learning toys. The project aims to provide a platform for users to explore, purchase, and engage with a wide range of educational toys.</h4>
                        <p>
                            The project organizes toys into different categories based on subjects like Math, Science, Engineering, and more. Each category showcases a variety of toys that align with the respective subject, allowing users to easily find toys suitable for specific educational needs.
                        </p>
                        <p>
                            Additionally, the project incorporates two routers. The first router, "All Toys," enables users to view and explore the entire collection of toys available in the Magical Toy. The second router, "My Toy," provides a personalized
                            experience by displaying only the toys posted by the logged-in user. Users can access and manage their posted toys using basic CRUD functionality, allowing them to create, read, update, and delete their toy listings.
                        </p>
                        <p>
                            Overall, "Magical Toy Mart" seeks to provide a user-friendly platform for discovering and engaging with educational and learning toys. By combining a range of features, including authentication, service information, categorized toy selection,
                            a captivating gallery, and personalized toy management, the project aims to create an enriching and enjoyable experience for users interested in educational toys.
                        </p>
                        <motion.div
                            variants={fadeIn('up', 0.3)}
                            initial="hidden"
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.5 }}
                            className="grid grid-cols-2 md:grid-cols-2">
                            <div>Client Site:
                                <a href='https://magice-toy-mart.web.app/' className='ml-[80px] mt-[-35px] btn w-9 h-9 mb-[40px] flex justify-center item-center'>
                                    <BsArrowUpRight></BsArrowUpRight>
                                </a>
                            </div>
                            <div>Server Site:
                                <span><a href='https://magice-toy-mart.web.app/' className='ml-[80px] mt-[-35px] btn w-9 h-9 mb-[40px] flex justify-center item-center'>
                                    <BsArrowUpRight></BsArrowUpRight>
                                </a></span>
                            </div>
                        </motion.div>
                    </div>
                </div>
                {/* sixth project  */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-2">
                    <motion.h2
                        variants={fadeIn('up', 0.3)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.5 }}
                        className="text-3xl font-bold mt-4">
                        Project Name: G3 Architects
                        <span><a href='https://manik1010.github.io/Assigenment_02/' className='ml-[460px] mt-[-35px] btn w-9 h-9 mb-[40px] flex justify-center item-center'>
                            <BsArrowUpRight></BsArrowUpRight>
                        </a></span>
                    </motion.h2>
                    <h3 className="mt-4 text-[36px] lg:text-[40px] font-secondary font-semibold">
                        Technology used:
                        <TypeAnimation sequence={[
                            'HTML',
                            300,
                            'Vanila CSS',
                            300,

                        ]}
                            speed={50}
                            className='text-accent'
                            wrapper='span'
                            repeat={Infinity}
                        />
                    </h3>

                    {/* Slider....... */}
                    <div className="md:mt-[-20px]">
                        <Swiper
                            spaceBetween={30}
                            centeredSlides={true}
                            autoplay={{
                                delay: 3500,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            modules={[Autoplay, Pagination, Navigation]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <img src={b1}></img>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={b2}></img>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={b3}></img>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={b4}></img>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={b5}></img>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={b6}></img>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={b7}></img>
                            </SwiperSlide>

                        </Swiper>
                    </div>
                    {/* Text  */}
                    <div className="md:mt-[-20px]">
                        <h4>G3 Architects is a project built on vanilla CSS, focusing on creating a visually engaging website. The project includes several key sections, namely:</h4>
                        <p>
                            Banner Section: The banner section serves as the introductory component of the website. It incorporates captivating visuals, such as high-quality images along with compelling text to grab visitors' attention.
                        </p>
                        <p>
                            Features Section: The features section highlights the unique selling points or key features of G3 Architects. Using CSS animations, elements within this section can be animated to provide an interactive and dynamic experience. For instance, individual features can fade in or slide into view as the user scrolls down the page.
                        </p>
                        <p>
                            Some Facts Section: The some facts section presents interesting and relevant statistics or facts about G3 Architects. CSS animations can be applied here to add visual interest and enhance the overall user experience. For example, numbers can be animated to increment gradually or elements can slide in with smooth transitions.
                        </p>
                        <p>
                            Sponsors Section: The sponsors section showcases the sponsors or partners associated with G3 Architects. Animation can be incorporated to bring attention to sponsor logos or create an engaging effect when hovering over each logo. This can be achieved through transformations, scaling, or adding hover effects.
                        </p>

                        <p>
                            Remember to keep the animations subtle, smooth, and complementary to the overall design and branding of G3 Architects. The goal is to provide an immersive and visually appealing experience that effectively showcases the project's content and engages visitors.
                        </p>
                        <motion.div
                            variants={fadeIn('up', 0.3)}
                            initial="hidden"
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.5 }}
                            className="grid grid-cols-2 md:grid-cols-2">
                            <div>Source Code:
                                <a href='https://github.com/Manik1010/Assigenment_02' className='ml-[100px] mt-[-35px] btn w-9 h-9 mb-[40px] flex justify-center item-center'>
                                    <BsArrowUpRight></BsArrowUpRight>
                                </a>
                            </div>
                            {/* <div>Server Site:
                                <span><a href='https://magice-toy-mart.web.app/' className='ml-[80px] mt-[-35px] btn w-9 h-9 mb-[40px] flex justify-center item-center'>
                                    <BsArrowUpRight></BsArrowUpRight>
                                </a></span>
                            </div> */}
                        </motion.div>
                    </div>
                </div>
                {/* seven project  */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-2">
                    {/* <h1 className="text-3xl font-bold mt-4">Project Name: Flavors of Bangladesh <span></span></h1> */}
                    <motion.h2
                        variants={fadeIn('up', 0.3)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.7 }}
                        className="text-3xl font-bold mt-4">
                        Project Name: Justice website
                        <span><a href='https://starlit-cocada-d1b7cf.netlify.app/' className='ml-[460px] mt-[-35px] btn w-9 h-9 mb-[40px] flex justify-center item-center'>
                            <BsArrowUpRight></BsArrowUpRight>
                        </a></span>
                    </motion.h2>
                    <h3 className="mt-4 text-[36px] lg:text-[40px] font-secondary font-semibold">
                        Technology used:
                        <TypeAnimation sequence={[
                            'HTML',
                            300,
                            'CSS',
                            300,
                            'Bootstrap',
                            300,

                        ]}
                            speed={50}
                            className='text-accent'
                            wrapper='span'
                            repeat={Infinity}
                        />
                    </h3>

                    {/* Slider....... */}
                    <div className="md:mt-[-20px]">
                        <Swiper
                            spaceBetween={30}
                            centeredSlides={true}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            modules={[Autoplay, Pagination, Navigation]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <img src={j1}></img>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={j2}></img>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={j3}></img>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={j4}></img>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={j5}></img>
                            </SwiperSlide>

                        </Swiper>
                    </div>
                    {/* Text  */}
                    <div className="md:mt-[-20px]">
                        <h4>"CSS frameworks such as Bootstrap provide a set of pre-designed components and styles that can be used to create responsive and visually appealing web pages more efficiently.
                            Here's a description of how Bootstrap could be used for an Ed Tech landing page assignment, including the specified sections:</h4>
                        <p>
                            Navbar: Utilize Bootstrap's Navbar component to create a responsive navigation bar with the desired menu items and logo.
                        </p>
                        <p>
                            Banner Section: Use Bootstrap's Grid system to create a responsive layout for the banner section. Add an image or background color along with text and buttons to highlight the key message of the landing page.
                        </p>
                        <p>
                            Legal Practice Area Section: Use Bootstrap's Grid system and Card component to create a responsive layout for showcasing different legal practice areas. Each practice area can be represented by a card containing an image, title, and a brief description.
                        </p>
                        <p>
                            Our Client Say Section: Utilize Bootstrap's Carousel component to create a responsive carousel/slider showcasing client testimonials. Each testimonial can be represented as a slide containing a client's image, name, and their feedback.
                        </p>
                        <p>
                            Q Section: Use Bootstrap's Grid system and Accordion component to create an expandable and collapsible section for frequently asked questions (FAQs). Each question can be represented as an accordion item with a question title and its corresponding answer.
                        </p>
                        <p>
                            Contact Section: Create a responsive layout for the contact section using Bootstrap's Grid system. Add a contact form or contact information along with a call-to-action button to encourage users to get in touch.
                        </p>
                        <p>
                            Footer: Utilize Bootstrap's Footer component to create a responsive footer section. Include links to relevant pages, copyright information, and any additional elements required.
                        </p>
                        <p>
                            Throughout the design process, apply appropriate Bootstrap classes and customize the styles as per the specific design requirements of the Ed Tech landing page. Additionally,
                            leverage Bootstrap's responsive utilities and breakpoints to ensure the page looks and functions well across different screen sizes and devices.

                            Remember to link the necessary Bootstrap CSS and JS files to your HTML document to utilize Bootstrap's features effectively.
                        </p>
                        <motion.div
                            variants={fadeIn('up', 0.3)}
                            initial="hidden"
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.5 }}
                            className="grid grid-cols-2 md:grid-cols-2">
                            <div>Source Code:
                                <a href='https://github.com/Manik1010/Assigenment_03' className='ml-[100px] mt-[-35px] btn w-9 h-9 mb-[40px] flex justify-center item-center'>
                                    <BsArrowUpRight></BsArrowUpRight>
                                </a>
                            </div>
                            {/* <div>Server Site:
                                <span><a href='https://magice-toy-mart.web.app/' className='ml-[80px] mt-[-35px] btn w-9 h-9 mb-[40px] flex justify-center item-center'>
                                    <BsArrowUpRight></BsArrowUpRight>
                                </a></span>
                            </div> */}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AllWork;