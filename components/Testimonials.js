// import components
import Slider from './Slider';
// import motion
import { motion } from 'framer-motion';
// import variants
import {
  fadeInLeft,
  fadeInRight,
  fadeInUp,
  staggerTextContainer,
} from '../variants';

const Testimonials = ({ testimonialData }) => {
  // destructure testimonial data
  const { pretitle, title, clients } = testimonialData;
  return (
    <section className='relative min-h-[600px] lg:px-10 xl:px-40' id="testi">
      <div className='container mx-auto'>
        <motion.div
          variants={staggerTextContainer}
          initial='initial'
          whileInView={'animate'}
          viewport={{ once: true, amount: 0.6 }}
          className='flex flex-col lg:flex-row'
        >
          {/* text */}
          <motion.div variants={fadeInUp} className='lg:w-[40%]'>
            {/* pretitle */}
            <h3 className='h3 text-[30px] capitalize font-slab font-light'>{pretitle}</h3>
            {/* title */}
            <h2 className='h2 mb-6 font-slab font-medium text-[20px] lg:text-[26px]'>{title}</h2>
          </motion.div>
          {/* slider */}
        
          <motion.div
            variants={fadeInUp}
            className='w-full lg:w-[60%] lg:absolute lg:right-0'
          >
            <Slider clients={clients} />
            
          
          </motion.div>
        
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;