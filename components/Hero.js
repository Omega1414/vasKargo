import Image from 'next/image';
import Header from './Header';
import { motion } from 'framer-motion';
import {
  staggerContainer,
  girlAnim,
  boyAnim,
  heroTruckAnim,
  fadeInDown,
} from '../variants';
import { CgArrowLongRight } from 'react-icons/cg';
import Link from 'next/link';

const Hero = ({ headerData, heroData, navData }) => {
  // destructure heroData
  const { title, boyImg, girlImg, truckImg, btnText } = heroData;
  return  <section className='bg-hero bg-no-repeat bg-left-top bg-cover h-[100vh] lg:h-[730px]'>
  {/* container */}

  <motion.div variants={fadeInDown}>
      <Header headerData={headerData} navData={navData} />
    </motion.div>
 
  <motion.div
    variants={staggerContainer}
    initial='initial'
    animate='animate'
    className='container mx-auto relative  h-[100vh] lg:min-h-[950px]'
  >
    {/* header */}
  

    {/* title */}
    <motion.h1
      variants={fadeInDown}
      className='h1  text-gray-700 text-[24px] pt-[12rem]  mb-[60px] lg:text-[30px] absolute left-0 right-0 mx-auto w-[300px] xl:left-[-950px] xl:right-[0px] lg:left-[-450px] text-center'
    >
      {title}
    </motion.h1>

    {/* button */}
    <motion.button
      whileHover={{
        scale: 1.05,
      }}
      variants={fadeInDown}
      className='absolute top-[320px] right-0 left-0 mx-auto w-[180px]   lg:left-[750px] xl:left-[950px] lg:top-[180px] xl:top-[580px] lg:right-[0px] '
      
    >
    <Link href='#order'>
    <a className='btn capitalize'>
      {btnText} <CgArrowLongRight className='text-[30px]' />
      </a>
      </Link>
    </motion.button>

    {/* girl image */}
    <motion.div
      variants={girlAnim}
      className='hidden lg:flex absolute top-[260px] xxl:left-[200px]'
    >
      <Image src={girlImg} width={186} height={475} alt="girl" />
    </motion.div>

    {/* truck image */}
    <motion.div
      variants={heroTruckAnim}
      className=' absolute bottom-0 lg:flex ll:hidden lg:bottom-[220px]  -left-[30%] xxl:-left-[10%]'
    >
      <Image src={truckImg} width={811} height={395} alt="truck" />
    </motion.div>

    {/* boy image */}
    <motion.div
      variants={boyAnim}
      className='hidden lg:flex absolute right-[380px] top-[260px] z-10 xxl:right-[700px]'
    >
      <Image src={boyImg} width={186} height={475} alt="boyHero" />
    </motion.div>
  </motion.div>
</section>
};

export default Hero;
