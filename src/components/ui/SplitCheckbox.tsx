'use client';

import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';
import * as React from 'react';

import { cn } from '@/lib/utils';

const SplitCheckbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      'border-primary focus-visible:ring-ring data-[state=checked]:text-primary-foreground peer h-4 w-4 shrink-0 rounded-sm border shadow focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50',
      className
    )}
    {...props}
  >
    {children === 'Add Split' ? (
      <div className="flex w-full items-center justify-between">
        <div>Add Split</div>
        <div className="border-primary h-3 w-3 rounded-sm border opacity-70"></div>
      </div>
    ) : null}
    <CheckboxPrimitive.Indicator
      className={cn('flex w-full items-center justify-between text-current')}
    >
      {children}
      <CheckIcon className="h-4 w-4 text-emerald-300" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
SplitCheckbox.displayName = CheckboxPrimitive.Root.displayName;

export { SplitCheckbox };
