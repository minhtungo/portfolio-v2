import { motion } from 'framer-motion';
import { Title, CodeSnippet, Button, AnimatedDiv } from '..';
import {
  OpacityVariant,
  PopUpFromBottom,
} from '../../lib/FramerMotionVariants';
import ProfileCard from '../common/ProfileCard';
interface AboutProps {
  resumeURL: string;
}
const About = ({ resumeURL }: AboutProps) => {
  return (
    <section id='about'>
      <Title title='About Me' subtitle='Introduction' />
      <div className='flex flex-col items-center md:flex-row gap-8 md:gap-4 lg:gap-18'>
        <motion.div
          initial='hidden'
          animate='visible'
          variants={PopUpFromBottom}
          className='w-full lg:w-1/3'
        >
          {/* <CodeSnippet className='md:mx-auto lg:mx-0 w-full' /> */}
          <ProfileCard />
        </motion.div>
        <div className='flex flex-col items-center justify-center text-left r w-full lg:w-3/5'>
          <AnimatedDiv variants={OpacityVariant}>
            <div className='flex flex-col'>
              <h3 className='text-lg md:text-xl lg:text-2xl font-medium lg:font-semibold mb-2 text-gray-700 dark:text-gray-200'>
                Hi, I{"'"}m Minh Tu Ngo <span className='wave'>👋</span>
              </h3>
              <hr className='mb-3 border-b border-custom-border-black dark:border-transparent-white' />
              <p className='text-sm mb-4 text-gray-600 dark:text-gray-400 leading-relaxed'>
                From the moment I produced {'"'}Hello World{'"'} in the console
                of my first application, I knew I was hooked into the world of
                web development. It has never been {'"'}just a job{'"'} for me,
                it{"'"}s offered an engaging challenge to continually learn and
                improve my skills in creating high-quality websites.
              </p>
              <p className='text-sm mb-4 text-gray-600 dark:text-gray-400 leading-relaxed'>
                I am a passionate Web Developer with experience building web
                apps using React, NextJS, TypeScript and NodeJS. I am focused on
                being a valuable part of any team I am on and believe in the
                team rising together. I love working with dedicated teams to
                create amazing web applications to make the internet a better
                place. Currently, I am looking for an opportunity to
                continuously learn, grow and make positive contributions to the
                company.
              </p>
            </div>
          </AnimatedDiv>
          {/* <Button
            href={
              'https://drive.google.com/file/d/1QrTshKgEXGyM31S67JwCV1M-EpSgm3Za/view?usp=sharing'
            }
            newTab
          >
            My Resume
          </Button> */}
        </div>
      </div>
    </section>
  );
};
export default About;
