import { GithubIcon, Linkedin, Mail, Phone } from 'lucide-react';
import Image from 'next/image';
import Drizzle from '/public/static/images/tech/drizzle.png';
import Express from '/public/static/images/tech/express.svg';
import Medusa from '/public/static/images/tech/medusa.jpg';
import Next from '/public/static/images/tech/next.svg';
import NodeJS from '/public/static/images/tech/nodejs.png';
import Radix from '/public/static/images/tech/radix.png';
import React from '/public/static/images/tech/react.svg';
import Redux from '/public/static/images/tech/redux.svg';
import Svelte from '/public/static/images/tech/svelte.svg';
import Tailwind from '/public/static/images/tech/tailwind.svg';
import TRPC from '/public/static/images/tech/trpc.png';
import TypeScript from '/public/static/images/tech/typescript.svg';
import Prisma from '/public/static/images/tech/prisma.svg';
import ReactQuery from '/public/static/images/tech/react-query.webp';
import Jotai from '/public/static/images/tech/jotai.png';
import PayloadCMS from '/public/static/images/tech/payloadcms.png';
import AuthJS from '/public/static/images/tech/authjs.webp';

export const CONTACT_INFO = [
  {
    icon: <Mail className='size-[18px]' />,
    href: 'mailto:mn.minhtungo@gmail.com',
    text: 'mn.minhtungo@gmail.com',
  },
  {
    icon: <Phone className='size-[18px]' />,
    href: 'tel:613-453-6449',
    text: '613-453-6449',
  },
];

export const SOCIAL_INFO = [
  {
    icon: <GithubIcon className='size-[18px]' />,
    href: 'https://github.com/minhtungo',
    text: 'Github',
  },
  {
    icon: <Linkedin className='size-[18px]' />,
    href: 'https://linkedin.com/in/minhtungo/',
    text: 'Linkedin',
  },
];

export const FAVORITE_TECHS = [
  {
    name: 'NextJS',
    icon: <Image width={32} height={32} src={Next} alt='nextjs' className='size-8 object-contain' />,
  },
  {
    name: 'SvelteKit',
    icon: <Image src={Svelte} alt='Svelte' className='size-8 object-contain' />,
  },
  {
    name: 'React',
    icon: <Image src={React} alt='react' className='size-8 object-contain' />,
  },
  {
    name: 'Medusa.js',
    icon: <Image src={Medusa} alt='medusa' className='size-8 object-contain' />,
  },
  {
    name: 'Auth.js',
    icon: <Image src={AuthJS} alt='AuthJS' className='size-8 object-contain' />,
  },
  {
    name: 'React Query',
    icon: <Image src={ReactQuery} alt='React Query' className='size-8 object-contain' />,
  },
  {
    name: 'Jotai',
    icon: <Image src={Jotai} alt='Jotai' className='size-8 object-contain' />,
  },
  {
    name: 'Tailwind',
    icon: <Image src={Tailwind} alt='tailwind' className='size-8 object-contain' />,
  },
  {
    name: 'Radix UI',
    src: '/static/images/tech/radix.png',
    icon: <Image src={Radix} alt='radix' className='size-8 object-contain' />,
  },
  {
    name: 'Redux',
    icon: <Image src={Redux} alt='redux' className='size-8 object-contain' />,
  },
  {
    name: 'Drizzle',
    icon: <Image src={Drizzle} alt='Drizzle' className='size-8 object-contain' />,
  },
  {
    name: 'Prisma',
    icon: <Image src={Prisma} alt='Prisma' className='size-8 object-contain' />,
  },
  {
    name: 'PayloadCMS',
    icon: <Image src={PayloadCMS} alt='PayloadCMS' className='size-8 object-contain' />,
  },
  {
    name: 'Express',
    icon: <Image src={Express} alt='express' className='size-8 object-contain' />,
  },
  {
    name: 'NodeJS',
    icon: <Image src={NodeJS} alt='nodejs' className='size-8 object-contain' />,
  },
  {
    name: 'TypeScript',
    icon: <Image src={TypeScript} alt='typescript' className='size-8 object-contain' />,
  },
  {
    name: 'tRPC',
    icon: <Image src={TRPC} alt='trpc' className='size-8 object-contain' />,
  },
];

export const EXPERIENCES = [
  {
    title: 'Full Stack Developer',
    description:
      'I have worked with a variety of technologies, including React, NextJS, TypeScript, and Tailwind CSS. I have also worked on projects that involved building APIs, managing databases, and implementing user authentication.',
    href: 'https://taubyte.com',
    company: 'Taubyte',
    location: 'Remote',
    time: '2021 - Present',
    isPresent: true,
    techs: [
      'React',
      'NextJS',
      'TypeScript',
      'Tailwind CSS',
      'PostgreSQL',
      'NodeJS',
      'Express',
      'MongoDB',
      'Prisma',
      'tRPC',
      'Vercel',
    ],
  },
  {
    title: 'Full Stack Developer 2',
    href: 'https://taubyte.com',
    description:
      'I have worked with a variety of technologies, including React, NextJS, TypeScript, and Tailwind CSS. I have also worked on projects that involved building APIs, managing databases, and implementing user authentication.',
    company: 'Taubyte',
    location: 'Remote',
    time: '2021 - Present',
    isPresent: true,
    techs: [
      'React',
      'NextJS',
      'TypeScript',
      'Tailwind CSS',
      'PostgreSQL',
      'NodeJS',
      'Express',
      'MongoDB',
      'Prisma',
      'tRPC',
      'Vercel',
    ],
  },
];

export const REPOS = [
  {
    title: 'Vietify',
    description: `Vietify eCommerce site's storefront built with Medusa-React`,
    href: 'https://minhtungo.com',
    techs: ['Medusa.js', 'NextJS', 'React', 'Tailwind CSS', 'Vercel'],
  },
  {
    title: 'Vietify 2',
    description: `Vietify eCommerce site's storefront built with Medusa-React`,
    href: 'https://minhtungo.com',
    techs: ['Medusa.js', 'NextJS', 'React', 'Tailwind CSS', 'Vercel'],
  },
  {
    title: 'Vietify 3',
    description: `Vietify eCommerce site's storefront built with Medusa-React`,
    href: 'https://minhtungo.com',
    techs: ['Medusa.js', 'NextJS', 'React', 'Tailwind CSS', 'Vercel'],
  },
];

export type Repo = (typeof REPOS)[number];

export const USED_TECHS = [
  {
    name: 'NextJS',
    icon: <Image src={Next} alt='nextjs' className='size-5 object-contain' />,
  },
  {
    name: 'Tailwind',
    icon: <Image src={Tailwind} alt='tailwind' className='size-5 object-contain' />,
  },
  {
    name: 'TypeScript',
    icon: <Image src={TypeScript} alt='typescript' className='size-5 object-contain' />,
  },
  {
    name: 'Radix UI',
    icon: <Image src={Radix} alt='radix' className='size-5 object-contain' />,
  },
];

export const ABOUT_ME = [
  {
    description: `My journey in web development began with the classic "Hello World" console output, which ignited a deep passion for creating exceptional web experiences. Since then, I have continually strived to learn and get feedback to make myself better and improve.`,
  },
  {
    description: `As a dedicated and passionate Web Developer, I specialize in using cutting-edge technologies such as React and NextJS to build powerful and scalable web application. I am focused on being a valuable part of any team I am on and I love working with dedicated teams to create amazing web applications to make the internet a better place.`,
  },
  {
    description: `I am constantly looking for new opportunities to learn and grow as a developer. If you're looking for a driven and enthusiastic team player to help create amazing web applications, let's work together!`,
  },
];