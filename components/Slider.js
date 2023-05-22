import Image from 'next/image';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { BsArrowRight } from 'react-icons/bs';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const Slider = ({ clients }) => {
  return (
    <Swiper
     breakpoints= {
     { "@0.00": {
        slidesPerView: 1,
      },
      "@0.75": {
        slidesPerView: 1,
      },
      "@1.00": {
        slidesPerView: 2,
      },
      "@2.00": {
        slidesPerView: 3,
      },
     }}
     spaceBetween={10}
      slidesOffsetBefore={0}
      
      grabCursor={true}
      modules={[]}

    >
      {clients.map((client, idx) => {
        // destructure client
        const { message, image, name } = client;
        return (
          <SwiperSlide key={idx}>
            <div className='bg-white h-[370px]  lg:h-[360px] drop-shadow-primary rounded-[10px] px-[10px] pt-[30px] pb-[40px] flex flex-col justify-between w-full  lg:w-[270px]'>
              {/*  message */}
              <p className=' leading-[30px] font-slab text-justify hyphens-auto px-2 ' lang='de'>&nbsp; {message}</p>
              {/* name & image */}
              <div className='flex items-center gap-x-5'>
                <Image src={image} width={60} height={60} alt="image" />
                <span className='font-semibold font-slab'>{name}</span>
                <div className='absolute right-4'>
                <BsArrowRight className='text-4xl text-accent-hover lg:hidden' />
                </div>
              </div>
             
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Slider;