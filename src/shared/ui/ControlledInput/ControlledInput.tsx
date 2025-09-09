'use client'
import clsx from 'clsx'
import { Form } from 'radix-ui'
import * as React from 'react'
import { ChangeEvent, useState } from 'react'

import { EyeClosedIcon, EyeOpenIcon, MagnifyingGlassIcon } from '@/shared/assets'

import styles from './ControlledInput.module.scss'

function ControlledInput({
  errorMessage,
  label,
  disabled,
  onValueChange,
  placeholder,
  type,
  ref,
  ...props
}: React.ComponentProps<typeof Form.Root>) {
  const [showPassword, setShowPassword] = useState(false)

  const endTypeCalc = (elementType: string, passwordVisible: boolean) => {
    if (elementType === 'password' && passwordVisible) {
      return 'text'
    }
    return elementType
  }

  const endType = endTypeCalc(type, showPassword)

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    onValueChange?.(e.target.value)
  }

  const classNames = {
    input: clsx(
      styles.input,
      !!errorMessage && styles.error,
      disabled && styles.disabled,
      type === 'search' && styles.searchButton,
      type === 'search' && styles.search
    ),
    label: clsx(styles.label, !!errorMessage && styles.error, disabled && styles.disabled),
    icon: clsx(styles.icon, !!errorMessage && styles.error, disabled && styles.disabled),
    root: clsx(styles.root, !!errorMessage && styles.error, disabled && styles.disabled),
    message: clsx(styles.errorMessage, !!errorMessage && styles.error),
    iconButton: clsx(styles.iconButton, type === 'search' ? styles.searchButton : styles.eyeButton),
  }

  return (
    <Form.Root className={classNames.root}>
      <Form.Field className={clsx(styles.field)} name="email">
        <Form.Label className={classNames.label}>{label}</Form.Label>
        <div className={clsx(styles.divContainer)}>
          <Form.Control asChild={true}>
            <input
              onChange={() => handleChange}
              className={classNames.input}
              type={endType}
              placeholder={placeholder}
              disabled={disabled}
              ref={ref}
              {...props}
            />
          </Form.Control>
          {type === 'password' && (
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
          {type === 'search' && (
            <button
              type={'button'}
              onClick={() => {}}
              className={classNames.iconButton}
              disabled={disabled}
            >
              <MagnifyingGlassIcon className={classNames.icon} />
            </button>
          )}
        </div>
        {!!errorMessage && (
          <Form.FormMessage className={classNames.message}>{errorMessage}</Form.FormMessage>
        )}
      </Form.Field>
    </Form.Root>
  )
}

export { ControlledInput }
