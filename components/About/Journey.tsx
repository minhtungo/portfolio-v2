'use client';

import { Disclosure, Transition } from '@headlessui/react';
import { Title } from '..';
import { BsMoonStars, BsSun } from 'react-icons/bs';
import { AiOutlineCaretDown } from 'react-icons/ai';

import { motion } from 'framer-motion';

import { PopUpFromBottom } from '../../lib/FramerMotionVariants';

interface JourneyProps {
  journey: {
    title: string;
    description: string;
    icon: string;
    color: string;
    dark_color: string;
    date: string;
    status?: string;
  };
}

const journeys = [
  {
    title: 'Volunteer - Web Developer',
    description:
      'Migrated the company’s legacy website to React and provided inputs for front-end development.',
    icon: 'developer',
    color: 'bg-blue-600',
    dark_color: 'dark:bg-green-900',
    date: 'Sep 2022 – Oct 2022',
    status: 'Present',
  },
  {
    title: 'Web Developer Intern',
    description:
      'Developed a platform that provides build and deploy services for web applications and websites, primarily contributing to the front end using Vue.',
    icon: 'developer',
    color: 'bg-primary-400',
    dark_color: 'dark:bg-green-900',
    date: 'Sep 2021 – Apr 2022',
  },
  {
    title: 'Freelance Web Developer',
    description:
      'Built a website for a local restaurant with 500+ visitors per month using React and Bootstrap.',
    icon: 'jobsearch',
    color: 'bg-primary-400',
    dark_color: 'dark:bg-green-900',
    date: 'Sep 2021 – Oct 2021',
  },
];

const JourneyCard = ({ journey }: JourneyProps) => {
  return (
    <motion.div
      className='mb-4 ml-6 md:ml-8 rounded-lg border-2 shadow-lg p-4 px-6 bg-transparent-black border-transparent-white'
      initial='hidden'
      animate='visible'
      variants={PopUpFromBottom}
    >
      <span
        className={`absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full text-black ${journey.color} ring-1 ring-gray-700 `}
      >
        {journey.status ? (
          <>
            <div
              className={`absolute ${journey.color} rounded-full w-6 h-6 animate-ping`}
            />
            <div className={`absolute ${journey.color} rounded-full w-6 h-6`} />
          </>
        ) : null}

        <BsMoonStars type={journey.icon} className='h-3 w-3 text-white' />
      </span>
      <h3 className='flex m-0 w-full text-lg font-medium tracking-tight text-gray-200'>
        {journey.title}

        {journey.status ? (
          <span className='mr-2 ml-3 h-full rounded px-2.5 py-1 text-xs font-medium text-grey-dark bg-blue-400'>
            {journey.status}
          </span>
        ) : null}
      </h3>
      <time className='text-sm font-normal leading-none text-gray-500 dark:text-gray-500'>
        {journey.date}
      </time>
      <p className='text-sm text-gray-700 max-w-none dark:text-gray-400 my-1 '>
        {journey.description}
      </p>
    </motion.div>
  );
};

const Journey = () => {
  return (
    <section id='journey' className='max-w-4xl mx-auto mt-12 lg:mt-16'>
      <Title title='My Journey' subtitle='Learning and growing' />
      <ul className='relative mt-4 lg:mt-6 ml-3 border-l border-transparent-white dark:border-gray-700'>
        {journeys.slice(0, 2).map((item) => (
          <li key={item.title}>
            <JourneyCard journey={item} />
          </li>
        ))}

        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button>
                <div className='text-small ml-1.5 flex pt-2'>
                  <AiOutlineCaretDown
                    className={`h-5 w-5 text-gray-400 ${
                      open ? 'rotate-180 transform ' : ''
                    }`}
                  />
                </div>
              </Disclosure.Button>
              <Transition
                show={open}
                enter='transition duration-400 ease-in-out'
                enterFrom='transform scale-95 opacity-0'
                enterTo='transform scale-400 opacity-100'
                leave='transition duration-75 ease-out'
                leaveFrom='transform scale-100 opacity-100'
                leaveTo='transform scale-95 opacity-0'
              >
                <Disclosure.Panel>
                  {journeys.slice(2).map((journey) => (
                    <JourneyCard key={journey.title} journey={journey} />
                  ))}
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
      </ul>
    </section>
  );
};
export default Journey;
