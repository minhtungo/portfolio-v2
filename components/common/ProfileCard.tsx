import Image from 'next/image';
import Link from 'next/link';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import Button from './Button';

const ProfileCard = () => {
  return (
    <div>
          <div className=' max-w-sm overflow-hidden shadow-md rounded-xl  bg-card-background-light dark:text-gray-100 dark:bg-card-background-dark mx-auto w-full pb-4'>
      <Image
        src='/static/images/background.jpg'
        className='w-full h-32 bg-cover'
        alt='background'
        height={300}
        width={300}
      />

      <div className='flex justify-center -mt-8'>
        <Link href='https://www.linkedin.com/in/minhtungo/' target='_blank'>
          <Image
            src='/static/images/avatar.png'
            alt='Avatar'
            height={50}
            width={50}
            className='-mt-6 w-28 h-28 md:w-24 md:h-24 rounded-full bg-blue-500 dark:bg-gray-700 ring-2 ring-blue-300 dark:ring-blue-300'
          />
        </Link>
      </div>
      <div className='text-center px-3 pb-4 pt-2 space-y-1'>
        <h2 className='text-lg font-semibold text-gray-700 dark:text-gray-200 '>
          Minh Tu Ngo
        </h2>
        {/* <p className='text-sm text-gray-600 dark:text-gray-400 font-light '>
          Web developer
        </p> */}
      </div>

      <div className='space-y-4 divide-y divide-custom-border-black dark:divide-transparent-white w-full'>
        <div className='flex space-x-3 items-center justify-center'>
          <Button
            href='mailto:mn.minhtungo@gmail.com'
            className='w-full flex-1'
          >
            Message
          </Button>
          <Button
            href='https://drive.google.com/file/d/1QrTshKgEXGyM31S67JwCV1M-EpSgm3Za/view?usp=sharing'
            variant='secondary'
            newTab
            className='w-full flex-1'
          >
            Resume
          </Button>
        </div>
        {/* <div className='flex justify-center py-1 space-x-4 items-center text-gray-600 dark:text-gray-300'>
          <Link
            rel='noopener noreferrer'
            href='https://github.com/minhtungo'
            className='hover:text-blue-500 p-2 '
            target='_blank'
            aria-label='GitHub URL'
          >
            <FiGithub className='w-5 h-5' />
          </Link>
          <Link
            rel='noopener noreferrer'
            href='https://www.linkedin.com/in/minhtungo/'
            aria-label='LinkedIn URL'
            className='hover:text-blue-500 p-2'
            target='_blank'
          >
            <FiLinkedin className='w-5 h-5' />
          </Link>
        </div> */}
      </div>
    </div>
    </div>

  );
};

export default ProfileCard;
