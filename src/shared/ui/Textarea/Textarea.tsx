import clsx from 'clsx'
import * as React from 'react'

import styles from './Textarea.module.scss'

function Textarea({ className, ...props }: React.ComponentProps<'textarea'>) {
  return <textarea data-slot="textarea" className={clsx(styles.textarea, className)} {...props} />
}

export { Textarea }
