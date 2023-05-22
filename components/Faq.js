import Image from 'next/image';

// import components
import Accordion from './Accordion';

// import motion
import { motion } from 'framer-motion';

// import variants
import {
  fadeInLeft,
  fadeInRight,
  staggerAccordionContainer,
  staggerTextContainer,
} from '../variants';

const Faq = ({ faqData }) => {
  // destructure faq data
  const { pretitle, title, boyImg, accordions } = faqData;
  return (
    <section className='min-h-[1150px] lg:bg-faq bg-no-repeat bg-right-top pt-[60px] lg:pt-[190px] lg:pb-24 mb-[60px] lg:mb-[160px] w-[100%] lg:px-10 xl:px-40 ll:px-40' id="faq">
      <div className='container mx-auto'>
        {/* top */}
        <motion.div
          variants={staggerTextContainer}
          initial='initial'
          whileInView={'animate'}
          viewport={{ once: true, amount: 0.6 }}
          className='flex flex-col lg:flex-row justify-center lg:justify-start items-center relative pt-8 pb-16 lg:pt-16 lg:pb-32'
        >
          {/* text */}
          <motion.div variants={fadeInRight} className='lg:w-[40%] xl:w-[45%]'>
            <h3 className='h3 lg:text-[30px]'>{pretitle}</h3>
            <h2 className='h2 mb-6 lg:mb-12 font-slab font-medium text-[18px] lg:text-[20px] xl:text-[24px]'>{title}</h2>
          </motion.div>
          {/* image */}
          <motion.div
            variants={fadeInRight}
            className='lg:absolute lg:right-0 xl:-right-16 lg:-top-16 w-[240px] sm:w-[220px] lg:w-[300px] xl:w-[400px]'
          >
            <Image src={boyImg} width={408} height={498} alt="boyFaq" />
          </motion.div>
        </motion.div>
        {/* accordions list */}
        <motion.div
          variants={staggerAccordionContainer}
          initial='initial'
          whileInView={'animate'}
          viewport={{ once: true, amount: 0.4 }}
          className='grid grid-cols-1 lg:grid-cols-2 gap-x-[20px] gap-y-[10px] w-[100%]  '
        >
          {accordions.map((accordion, idx) => {
            return <Accordion accordion={accordion} key={idx} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Faq;