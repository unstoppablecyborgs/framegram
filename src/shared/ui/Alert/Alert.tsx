'use client'

import clsx from 'clsx'
import { useEffect, useState } from 'react'

import { Typography } from '@/shared/ui'

import styles from './Alert.module.scss'

export type AlertVariants = 'error' | 'succeeded'

type Props = {
  variant: AlertVariants
  autoHideDuration?: number
  message: string
}

export const Alert = (props: Props) => {
  const { message, variant, autoHideDuration = 6000 } = props

  const [isVisible, setVisible] = useState(true)

  const onClose = () => {
    setVisible(false)
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setVisible(false)
    }, autoHideDuration)
    return () => {
      clearTimeout(timeoutId)
    }
  }, [autoHideDuration])

  return (
    isVisible && (
      <div className={clsx(styles.container)}>
        <div
          className={clsx(
            styles.alert,
            variant === 'error' && styles['alertError'],
            variant === 'succeeded' && styles['alertSucceeded']
          )}
        >
          <Typography className={styles.alertDescription}>{message}</Typography>
          <svg
            className={styles.close}
            onClick={onClose}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    )
  )
}
