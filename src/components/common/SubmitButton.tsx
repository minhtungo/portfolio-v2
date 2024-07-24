'use client';

import { cn } from '@/lib/utils';
import { FC } from 'react';
import Spinner from './Spinner';
import { Button, ButtonProps } from '@/components/ui/button';

interface SubmitButtonProps extends ButtonProps {
  label: string;
  isPending?: boolean;
  type?: 'submit' | 'button';
}

const SubmitButton: FC<SubmitButtonProps> = ({ className, label, isPending, type = 'submit', ...props }) => {
  return (
    <Button type={type} disabled={isPending} className={cn(className)} {...props}>
      {label}
      {isPending && <Spinner />}
    </Button>
  );
};

export default SubmitButton;
