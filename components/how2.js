// import Image from 'next/image';
// import {BrowserView, MobileView} from 'react-device-detect';
// // import motion
// import { motion } from 'framer-motion';
// // import variants
// import { fadeInLeft, fadeInRight, staggerTextContainer } from '../variants';

// const How = ({ howData }) => {

//   // destructure how data
//   const { title, subtitle, girlImg } = howData;
//   return (
//     <section className='mb-[60px] lg:mb-[40px] pt-20 lg:pt-[120px]  w-[100%] lg:px-10 xl:px-40 ll:px-40 ' id='order'>
//       <div className='container mx-auto flex flex-col lg:flex-row '>
//       <motion.div
//           variants={staggerTextContainer}
//           initial='initial'
//           whileInView={'animate'}
//           viewport={{ once: true, amount: 0.6 }}
//           className='flex flex-col lg:flex-row gap-x-[20px] '
//         >
       
//           {/* image */}
//           <motion.div variants={fadeInRight} className='flex-1 max-w-[240px] md:max-w-[360px] lg:max-w-[400px] align-center justify-center mx-auto'>
//             <Image src={girlImg} width={620} height={678} />
//           </motion.div>
//           {/* text */}
         
//          <BrowserView>
//           <motion.div variants={fadeInLeft} className='flex-1 flex justify-center my-auto ml-2'>
//             <div className='max-w-[400px] xl:max-w-full  '>
//               <h3 className='h3 font-slab capitalize lg:text-[26px] xxl:text-[30px] mb-3 xxl:mb-5'>{title}</h3>
//               <p className='lead font-slab lg:text-[18px] xxl:text-[22px] hyphens-auto text-justify leading-[30px] lg:leading-[35px]' lang='de'>{subtitle}</p>
//             </div>
//           </motion.div>
//           </BrowserView>
//           <MobileView>
//           <motion.div variants={fadeInRight} className='flex-1 flex justify-end'>
//             <div className='max-w-[455px] md:max-w-[100%]'>
//               <h3 className='h3  font-slab capitalize  '>{title}</h3>
//               <p className='lead leading-8 lg:leading-[40px] font-slab '>{subtitle}</p>
//             </div>
//           </motion.div>
//           </MobileView>
//        </motion.div>
//       </div>
//     </section>
//   );
// };

// export default How;