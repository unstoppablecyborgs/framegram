import { SignupForm } from '@/features/auth/signup'
import styles from './SignupPage.module.scss'

export default function Signup() {
  return (
    <main className={styles.page}>
      <SignupForm />
    </main>
  )
}
