import Link from 'next/link'
import { ArrowBackIcon } from '@/shared/assets'
import styles from './index.module.scss'

export function AuthSharedLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className={styles.main}>
      <div className="container">
        <Link href="/auth/signup" className={styles.link}>
          <ArrowBackIcon />
          Back to Sign Up
        </Link>
        {children}
      </div>
    </main>
  )
}
