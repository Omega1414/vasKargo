import Image from 'next/image';

// import motion
import { motion } from 'framer-motion';

// import variants
import { fadeInUp, fadeInDown, staggerTextContainer } from '../variants';

const About = ({ aboutData }) => {
  // destructure about data
  const { title, subtitle, text, boyImg } = aboutData;
  return (
    <section className='mb-[60px] lg:mb-[50px] pt-[30px] lg:pt-[100px] lg:px-10 xl:px-40 ll:px-40' id="about">
      <div className='container mx-auto'>
        <motion.div
          variants={staggerTextContainer}
          initial='initial'
          whileInView={'animate'}
          viewport={{ once: true, amount: 0.6 }}
          className='flex flex-col lg:flex-row gap-x-[20px]'
        >
          {/* text */}
          <motion.div variants={fadeInDown} className='flex-1 mt-[50px] '>
            <h3 className='h3 font-slab capitalize mb-3 xxl:mb-5 lg:text-[26px] xxl:text-[30px]'>{title}</h3>
            <p className='lead leading-8 lg:leading-[40px] max-w-[520px] md:max-w-full xxl:max-w-[570px] mb-[20px] lg:mb-[50px] xxl:text-[22px] font-slab hyphens-auto text-justify' lang='de' >{subtitle}</p>
            {/* text box */}
            <div className='bg-accent/10 border-l-[10px] border-accent max-w-[570px] h-[160px] flex items-center justify-center mb-8 lg:mb-0'>
              <p className='text-[18px] ml-2 leading-normal lg:text-[22px] lg:leading-[32px] font-bold max-w-[320px] md:max-w-full lg:max-w-[460px] font-slab '>
                {text}
              </p>
            </div>
          </motion.div>
          {/* image */}
          <motion.div variants={fadeInUp} className='flex-1 mt-0 lg:mt-8 md:max-w-[500px] md:justify-center md:align-middle md:mx-auto'>
            <Image src={boyImg} width={575} height={580} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;