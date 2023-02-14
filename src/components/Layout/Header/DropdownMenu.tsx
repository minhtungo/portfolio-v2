import Avatar from '@/components/common/Avatar';
import { Menu, Transition } from '@headlessui/react';
import Link from 'next/link';
import { Fragment, useState } from 'react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { IoDocumentTextOutline } from 'react-icons/io5';

export default function DropdownMenu() {
  const [enabled, setEnabled] = useState(false);
  return (
    <Menu as='span' className='mt-[6px] flex items-center lg:mt-0 lg:hidden'>
      {({ open }) => (
        <>
          <Menu.Button>
            <Avatar isMobile width={6} height={6} />
          </Menu.Button>
          <Transition
            as={Fragment}
            show={open}
            enter='transition ease-out duration-100'
            enterFrom='transform opacity-0 scale-95'
            enterTo='transform opacity-100 scale-100'
            leave='transition ease-in duration-75'
            leaveFrom='transform opacity-100 scale-100'
            leaveTo='transform opacity-0 scale-95'
          >
            <Menu.Items
              static
              className='absolute top-[35px] right-6 mt-2 w-32 origin-top-right divide-y divide-custom-border-black rounded-md bg-background-light shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:divide-transparent-white dark:bg-background-dark sm:w-44'
            >
              <div className='px-1 py-1 '>
                <Menu.Item>
                  {({ active }: { active: boolean }) => (
                    <Link
                      href='https://github.com/minhtungo'
                      target='_blank'
                      className={`${
                        active
                          ? 'text-gray-5 bg-blue-500'
                          : 'text-gray-600 dark:text-gray-300'
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      <FiGithub className='mr-2 h-5 w-5' aria-hidden='true' />
                      Github
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }: { active: boolean }) => (
                    <Link
                      href='https://www.linkedin.com/in/minhtungo/'
                      target='_blank'
                      className={`${
                        active
                          ? 'bg-blue-500 text-gray-50'
                          : 'text-gray-600 dark:text-gray-300'
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      <FiLinkedin className='mr-2 h-5 w-5' aria-hidden='true' />
                      LinkedIn
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }: { active: boolean }) => (
                    <Link
                      href='https://drive.google.com/file/d/1QrTshKgEXGyM31S67JwCV1M-EpSgm3Za/view?usp=sharing'
                      target='_blank'
                      className={`${
                        active
                          ? 'bg-blue-500 text-gray-50'
                          : 'text-gray-600 dark:text-gray-300'
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      <IoDocumentTextOutline
                        className='mr-2 h-5 w-5'
                        aria-hidden='true'
                      />
                      Resume
                    </Link>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
}