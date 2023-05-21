// import components
import Hero from '../components/Hero';
import About from '../components/About';
import How from '../components/How';
import Faq from '../components/Faq';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import Copyright from '../components/Copyright';

import {
  headerData,
  heroData,
  navData,
  faqData,
  aboutData,
  howData,
  testimonialData,
  footerData,
} from '../data.json';
import { useEffect, useState } from 'react';



const Home = () => {
  const [domLoaded, setDomLoaded] = useState(false);
  useEffect(() => {
    setDomLoaded(true);
  }, []);
  return (
    <>
    {domLoaded && (
    <div className=' max-w-[1600px] mx-auto bg-page'>
       <Hero heroData={heroData} headerData={headerData} navData={navData} />
      <About aboutData={aboutData} />
      <How howData={howData} />
      <Faq faqData={faqData} />
      <Testimonials testimonialData={testimonialData} />
      <Footer footerData={footerData} />
      <Copyright />
    </div>
       )}
       </>
  );
};

export const getStaticProps = async () => {
  return {
    props: {
      headerData,
      heroData,
      navData,
      faqData,
      aboutData,
      howData,
      testimonialData,
      footerData,
    },
  };
};

export default Home;
