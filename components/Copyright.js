import Link from 'next/link';
// import icons
import { FaYoutube, FaInstagram, FaGithub } from 'react-icons/fa';
// import motion
import { motion } from 'framer-motion';
// import variants
import { fadeInUp } from '../variants';

const Copyright = () => {
  return (
    <motion.div
      variants={fadeInUp}
      initial='initial'
      whileInView={'animate'}
      viewport={{ once: true, amount: 0.1 }}
      className='bg-white h-[140px] lg:px-10 xl:px-10'
    >
      <div className='container mx-auto h-full'>
        <div className='flex justify-between items-center h-full  xl:pr-24'>
          {/* copyright text */}
          <p>Copyright &copy; 2023</p>
          <div className='flex gap-x-[30px]'>
            <Link href={'/'}>
              <a>
                <div className='w-9 h-9 bg-accent hover:bg-accent-hover  text-white rounded-full flex justify-center items-center transition'>
                  <FaYoutube className='text-lg' />
                </div>
              </a>
            </Link>
            <Link href={'/'}>
              <a>
                <div className='w-9 h-9 bg-accent hover:bg-accent-hover  text-white rounded-full flex justify-center items-center transition'>
                  <FaInstagram className='text-lg' />
                </div>
              </a>
            </Link>
            <Link href={'/'}>
              <a>
                <div className='w-9 h-9 bg-accent hover:bg-accent-hover  text-white rounded-full flex justify-center items-center transition'>
                  <FaGithub className='text-lg' />
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Copyright;