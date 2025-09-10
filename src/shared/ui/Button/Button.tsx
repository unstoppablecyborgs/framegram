'use client'

import { Slot } from '@radix-ui/react-slot'
import clsx from 'clsx'
import * as React from 'react'

import s from './Button.module.scss'

type ButtonVariant = 'primary' | 'secondary' | 'outlined' | 'textButton'

type Props = {
  /** Render the Button using any element if asChild true */
  asChild?: boolean
  /** Choose from 4 style variants. Default: "primary". */
  variant?: ButtonVariant
  /** Stretches button to full parent width if fullWidth true*/
  fullWidth?: boolean
} & React.ComponentProps<'button'>

/** Ui kit Button component */
export const Button = ({
  asChild,
  variant = 'primary',
  fullWidth = false,
  className,
  ...rest
}: Props) => {
  const Component = asChild ? Slot : 'button'

  const classNames = {
    root: clsx(s.button, s[variant], fullWidth && s.fullWidth, className),
  }

  return <Component className={classNames.root} {...rest}></Component>
}
