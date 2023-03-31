'use client';

import { Text } from '@/components/ui/FramerMotion';
import { Actions } from '@/components/Guestbook';
import { PopUpFromBottom } from '@/lib/framerVariants';
import { useSession } from 'next-auth/react';
import { Title } from '@/components/common';

import Form from './Form';

const Guestbook = () => {
  const { data: session } = useSession();

  return (
    <>
      <Title
        title='Guestbook'
        subtitle={
          session
            ? `Hi ${session.user?.name}! I am glad you're here. Please leave a message below.`
            : "I'd love to hear from you! To leave a message, simply sign in with your preferred account below. "
        }
        className='!mb-2'
      />
      {session ? <Form /> : <Actions />}
    </>
  );
};
export default Guestbook;
