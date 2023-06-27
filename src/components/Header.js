import React from 'react';
import Logo from '../assets/logo.svg'
import { Link } from 'react-scroll';
const Header = () => {
  return (
    <header className='py-8'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <a href='#'>
            <img src={Logo} />
          </a>
          <Link to='allwork'>
            <button className='btn btn-sm'>All Work</button>
          </Link>
          <Link to='contact'>
            <button className='btn btn-sm'>Work With Me</button>
          </Link>

        </div>
      </div>
    </header>
  )
};

export default Header;
