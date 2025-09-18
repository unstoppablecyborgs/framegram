'use client'

import clsx from 'clsx'
import { CloseIcon } from '@/shared/assets'
import styles from './Alert.module.scss'

type AlertVariant = 'error' | 'success'

type Props = React.ComponentProps<'div'> & {
  variant?: AlertVariant
  onClose: () => void
}

function Alert({ children, className, variant = 'error', onClose, ...restProps }: Props) {
  return (
    <div
      data-slot="alert"
      role="alert"
      className={clsx(styles.root, styles[variant], className)}
      {...restProps}
    >
      <div>
        {variant === 'error' && <span className={styles.errorTitle}>Error!</span>}
        {children}
      </div>
      <button
        type="button"
        aria-label="Close"
        title="Close"
        className={styles.closeButton}
        onClick={onClose}
      >
        <CloseIcon aria-hidden={true} />
      </button>
    </div>
  )
}

export { Alert }
