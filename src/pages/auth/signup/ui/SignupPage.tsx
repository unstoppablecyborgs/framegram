'use client'

import { SignupForm, SignupFormFields, signupRequestSchema } from '@/features/auth/signup'
import { useSignupMutation } from '@/shared/api'
import { ENV } from '@/shared/config'
import styles from './SignupPage.module.scss'

export default function Signup() {
  const [signupMutation] = useSignupMutation()

  const onSubmit = async (data: SignupFormFields, reset: () => void) => {
    const requestData = signupRequestSchema.parse(data)

    try {
      await signupMutation({
        ...requestData,
        baseUrl: `${ENV.NEXT_PUBLIC_APP_URL}auth/email-confirm`,
      }).unwrap()

      reset()
    } catch (error) {
      console.error('Ошибка регистрации:', error)
    }
  }

  return (
    <main className={styles.page}>
      <SignupForm onSubmit={onSubmit} />
    </main>
  )
}
