'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { Controller, useForm } from 'react-hook-form'
import { Button, Checkbox, ControlledInput } from '@/shared/ui'
import { SignupFormFields, signupSchema } from '../model/signupSchema'
import styles from './SignupForm.module.scss'

type Props = {
  onSubmit: (data: SignupFormFields, reset: () => void) => void
}

export const SignupForm = ({ onSubmit }: Props) => {
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isValid, isSubmitting },
  } = useForm<SignupFormFields>({
    defaultValues: {
      acceptTerms: true,
    },
    resolver: zodResolver(signupSchema),
    mode: 'onBlur',
  })

  return (
    <form onSubmit={handleSubmit(data => onSubmit(data, reset))} className={styles.form}>
      <h3 className={styles.title}>Sign Up</h3>
      <ControlledInput
        type="text"
        placeholder="Epam11"
        label={'Username'}
        errorMessage={errors.username?.message}
        {...register('username')}
        className={styles.input}
      />
      <ControlledInput
        type="email"
        placeholder="Epam@epam.com"
        label={'Email'}
        errorMessage={errors.email?.message}
        {...register('email')}
        className={styles.input}
      />
      <div className={styles.input}>
        <ControlledInput
          type="password"
          placeholder="******************"
          label={'Password'}
          errorMessage={errors.password?.message}
          {...register('password')}
        />
      </div>
      <div className={styles.confirmPasswordInput}>
        <ControlledInput
          type="password"
          placeholder="******************"
          label={'Password confirmation'}
          errorMessage={errors.confirmPassword?.message}
          {...register('confirmPassword')}
        />
      </div>
      <div className={styles.termsInput}>
        <div className={styles.terms}>
          <Controller
            name="acceptTerms"
            control={control}
            render={({ field: { value, onChange, ...restField } }) => (
              <Checkbox id="terms" checked={value} onCheckedChange={onChange} {...restField} />
            )}
          />
          <label htmlFor="terms">
            I agree to the <Link href={'/auth/terms-of-service'}>Terms of Service</Link> and{' '}
            <Link href={'/auth/privacy-policy'}>Privacy Policy</Link>
          </label>
        </div>
        {errors.acceptTerms && (
          <span className={styles.termsError}>{errors.acceptTerms.message}</span>
        )}
      </div>
      <Button
        type="submit"
        fullWidth={true}
        disabled={isSubmitting || !isValid}
        className={styles.signupButton}
      >
        Sign Up
      </Button>
      <p>Do you have an account?</p>
      <Button variant="textButton" fullWidth={true} asChild={true} className={styles.signinLink}>
        <Link href={'/'}>Sign In</Link>
      </Button>
    </form>
  )
}
