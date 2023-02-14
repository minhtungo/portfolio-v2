import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { TypeAnimation } from 'react-type-animation';

import { Button, ModelLoader, SnowFall } from '..';

const LazyDogModel = dynamic(() => import('./Model/DogModel'), {
  ssr: false,
  loading: () => <ModelLoader />,
});

interface HeroProps {
  resumeURL: string;
}

const Hero = ({ resumeURL }: HeroProps) => {
  return (
    <section
      id='home'
      className='h-screen flex-1 gap-16 pt-8 md:flex md:items-center md:justify-between lg:pt-0'
    >
      {/* Dog Model */}
      <div className='relative z-10 mx-auto mt-4 flex h-[280px] w-[280px] basis-2/5 justify-center sm:h-[360px] sm:w-[360px] md:order-2 md:mx-0 md:mt-[6.6rem] md:h-[480px] md:w-[480px]'>
        <LazyDogModel />
      </div>
      {/* Hero Text */}
      <div className='-mt-14 basis-2/5 text-center md:text-start'>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className='mb-[5px] pl-[3px]'>Hi there, I am</p>
          <span className='animate-border bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-[length:400%_400%] bg-clip-text text-2xl font-bold text-transparent md:text-4xl lg:text-5xl'>
            Minh Tu Ngo.
          </span>
          <span className='wave text-2xl md:text-4xl lg:text-5xl'>👋</span>
          <p className='mt-4 mb-7 text-lg font-semibold lg:mt-8'>
            &lt;&gt;
            <TypeAnimation
              cursor={true}
              speed={50}
              sequence={[
                'I Love Bubble Tea.',
                1000,
                'I Love Building Things For The Web.',
                1000,
                'I Love React.',
                1000,
                '',
              ]}
              wrapper='span'
              repeat={Infinity}
            />
            &lt;/&gt;
          </p>
        </motion.div>

        {/* buttons */}
        <div className='mt-5 flex justify-center md:justify-start'>
          <Button href='#contact' className='mr-4'>
            Let{"'"}s Connect
          </Button>

          <Button
            href='https://drive.google.com/file/d/1QrTshKgEXGyM31S67JwCV1M-EpSgm3Za/view?usp=sharing'
            variant='secondary'
          >
            My Resume
          </Button>
        </div>
      </div>
      <SnowFall />
    </section>
  );
};

export default Hero;
