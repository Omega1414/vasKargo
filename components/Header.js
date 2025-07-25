import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// import components
import Nav from '../components/Nav';
import NavMobile from '../components/NavMobile';

// import react icons
import { HiMenu } from 'react-icons/hi';

const Header = ({ headerData, navData }) => {
  const [header, setHeader] = useState(false);
  const [navMobile, setNavMobile] = useState(false);
  // destructure header data
  const { logoImgV1, logoImgV2, btnText } = headerData;

  useEffect(() => {
    // scroll event
    window.addEventListener('scroll', () => {
      // set the header state according to scrollY position
      window.scrollY > 80 ? setHeader(true) : setHeader(false);
    });
  });

  return (
    <header
      className={`${
        header
          ? 'bg-white px-3 py-3 rounded-md drop-shadow-primary'
          : 'py-[40px]'
      } fixed w-full left-0 right-0 mx-auto max-w-[90vw] lg:max-w-[1120px] z-20 flex justify-between items-center transition-all duration-500 `}
    >
   
      <Link href={'/'}>
        <a>
          <Image
            src={`${header ? logoImgV1 : logoImgV2}`}
            width={header ? 180 : 182}
            height={50}
            alt="logo"
          />
        </a>
      </Link>
   
      <div className='hidden lg:flex gap-x-[96px]'>
     
        <Nav navData={navData} header={header} />
       
       <a href='#foot' className='btn font-slab font-semibold'>{btnText}</a>
      </div>

     
      <div
        onClick={() => setNavMobile(!navMobile)}
        className='lg:hidden cursor-pointer'
      >
        <HiMenu className='text-4xl text-accent-hover ' />
      </div>

   
      <div
        className={`${
          navMobile ? 'max-h-[154px]' : 'max-h-0'
        } lg:hidden absolute top-full mt-2 w-full left-0 rounded-md overflow-hidden shadow-2xl  transition-all`}
       
        
      >
        <NavMobile navData={navData}  setNavMobile={setNavMobile} />
      </div>
    </header>
  );
};

export default Header;