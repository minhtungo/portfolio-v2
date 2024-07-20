import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';
import { forwardRef, HTMLAttributes } from 'react';

export const TypographyVariants = cva('', {
  variants: {
    variant: {
      h1: 'scroll-m-20 text-3xl font-bold tracking-tight lg:text-4xl',
      h2: 'scroll-m-20 text-2xl sm:text-3xl font-semibold tracking-tight',
      h3: 'scroll-m-20 text-xl sm:text-2xl font-semibold tracking-tight',
      h4: 'scroll-m-20 text-lg sm:text-xl font-semibold tracking-tight',
      h5: 'scroll-m-20 text-base sm:text-lg font-semibold',
      h6: 'text-base  font-semibold',
      p: 'leading-7',
      div: '[&>p:not(:first-child)]:mt-6',
    },
  },
  defaultVariants: {
    variant: 'p',
  },
});

interface TypographyProps extends HTMLAttributes<HTMLHeadingElement>, VariantProps<typeof TypographyVariants> {
  tag?: string;
}

const Typography = forwardRef<HTMLHeadingElement, TypographyProps>(({ className, variant = 'p', tag, children, ...props }, ref) => {
  const Tag = tag ? tag : variant;
  return (
    <Tag className={cn(TypographyVariants({ variant }), className)} ref={ref} {...props}>
      {children}
    </Tag>
  );
});

Typography.displayName = 'Typography';

export default Typography;
