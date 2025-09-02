'use client'

import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import clsx from 'clsx'
import * as React from 'react'

import { CheckIcon } from '@/shared/assets'

import s from './Checkbox.module.scss'

function Checkbox({ className, ...props }: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root data-slot="checkbox" className={clsx(s.root, className)} {...props}>
      <CheckboxPrimitive.Indicator data-slot="checkbox-indicator" className={s.indicator}>
        <CheckIcon />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox }
