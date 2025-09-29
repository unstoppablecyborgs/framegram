'use client'
import clsx from 'clsx'
import * as React from 'react'
import { ComponentProps, useState } from 'react'

import { EyeClosedIcon, EyeOpenIcon, MagnifyingGlassIcon } from '@/shared/assets'

import styles from './ControlledInput.module.scss'

type Props = ComponentProps<'input'> & {
  errorMessage?: string
  label?: string
}

function ControlledInput({ errorMessage, label, disabled, type, className, ...props }: Props) {
  const [showPassword, setShowPassword] = useState(false)

  const isPasswordType = type === 'password'
  const isSearchType = type === 'search'

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
          className={clsx(
            styles.input,
            type === 'search' && styles.search,
            type === 'password' && styles.password,
            disabled && styles.disabled,
            !!errorMessage && styles.error,
            className
          )}
          type={isPasswordType && showPassword ? 'text' : type}
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
              <EyeOpenIcon className={styles.icon} />
            ) : (
              <EyeClosedIcon className={styles.icon} />
            )}
          </button>
        )}
        {isSearchType && (
          <MagnifyingGlassIcon
            className={clsx(styles.iconButton, styles.search, disabled && styles.disabled)}
          />
        )}
      </div>
      {!!errorMessage && <span className={styles.errorMessage}>{errorMessage}</span>}
    </div>
  )
}

export { ControlledInput }
