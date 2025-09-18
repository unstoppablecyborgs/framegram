'use client'
import clsx from 'clsx'
import * as React from 'react'
import { ChangeEvent, ComponentProps, useState } from 'react'

import { EyeClosedIcon, EyeOpenIcon, MagnifyingGlassIcon } from '@/shared/assets'

import styles from './ControlledInput.module.scss'

type Props = ComponentProps<'input'> & {
  errorMessage?: string
  label?: string
  onChange?: (value: string) => void
  type: string
}

function ControlledInput({
  errorMessage,
  label,
  disabled,
  placeholder,
  onChange,
  type,
  className,
  ref,
  ...props
}: Props) {
  const [showPassword, setShowPassword] = useState(false)

  const isPasswordType = type === 'password'
  const isSearchType = type === 'search'

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    onChange?.(e)
  }

  const classNames = {
    input: clsx(
      styles.input,
      type === 'search' && styles.search,
      type === 'password' && styles.password,
      className
    ),
    label: clsx(styles.label),
    icon: clsx(styles.icon),
    root: clsx(styles.root),
    message: clsx(styles.errorMessage),
    iconButton: clsx(
      styles.iconButton,
      type === 'search' ? styles.search : styles.eyeButton,
      disabled && styles.disabled
    ),
    divContainer: styles.divContainer,
  }

  return (
    <div className={classNames.root}>
      {label && <label className={classNames.label}>{label}</label>}
      <div className={classNames.divContainer}>
        <input
          onChange={handleChange}
          className={classNames.input}
          type={isPasswordType && showPassword ? 'text' : type}
          placeholder={placeholder}
          disabled={disabled}
          {...props}
        />
        {isPasswordType && (
          <button
            type={'button'}
            onClick={() => setShowPassword(!showPassword)}
            className={classNames.iconButton}
            disabled={disabled}
          >
            {showPassword ? (
              <EyeOpenIcon className={classNames.icon} />
            ) : (
              <EyeClosedIcon className={classNames.icon} />
            )}
          </button>
        )}
        {isSearchType && <MagnifyingGlassIcon className={classNames.iconButton} />}
      </div>
      {!!errorMessage && <span className={classNames.message}>{errorMessage}</span>}
    </div>
  )
}

export { ControlledInput }
