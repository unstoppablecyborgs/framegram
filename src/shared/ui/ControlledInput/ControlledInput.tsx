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

  return (
    <div className={clsx(styles.root, disabled && styles.disabled, !!errorMessage && styles.error)}>
      {label && (
        <label
          className={clsx(
            styles.label,
            disabled && styles.disabled,
            !!errorMessage && styles.error
          )}
        >
          {label}
        </label>
      )}
      <div className={styles.divContainer}>
        <input
          onChange={handleChange}
          className={clsx(
            styles.input,
            type === 'search' && styles.search,
            type === 'password' && styles.password,
            disabled && styles.disabled,
            !!errorMessage && styles.error,
            className
          )}
          type={isPasswordType && showPassword ? 'text' : type}
          placeholder={placeholder}
          disabled={disabled}
          {...props}
        />
        {isPasswordType && (
          <button
            type={'button'}
            onClick={() => setShowPassword(!showPassword)}
            className={clsx(styles.iconButton, styles.eyeButton, disabled && styles.disabled)}
            disabled={disabled}
          >
            {showPassword ? (
              <EyeOpenIcon className={clsx(styles.icon)} />
            ) : (
              <EyeClosedIcon className={clsx(styles.icon)} />
            )}
          </button>
        )}
        {isSearchType && (
          <MagnifyingGlassIcon
            className={clsx(styles.iconButton, styles.search, disabled && styles.disabled)}
          />
        )}
      </div>
      {!!errorMessage && <span className={clsx(styles.errorMessage)}>{errorMessage}</span>}
    </div>
  )
}

export { ControlledInput }
