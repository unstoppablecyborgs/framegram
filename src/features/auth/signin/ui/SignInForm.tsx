'use client'

import Link from 'next/link'
import { useSignInForm } from '@/features/auth/signin/lib/useSignInForm'
import { GithubIcon, GoogleIcon } from '@/shared/assets'
import { Button } from '@/shared/ui/Button'
import { ControlledInput } from '@/shared/ui/ControlledInput'
import s from './SignInForm.module.css'

export const SignInForm = () => {
  const { register, handleFieldFocus, handleSubmit, errors, authError } = useSignInForm()

  return (
    <div className={s.signInForm}>
      <h1>Sign In</h1>
      <div className={s.icons}>
        <Link href={'/'}>
          <GoogleIcon className={s.icon} />
        </Link>
        <Link href={'/'}>
          <GithubIcon className={s.icon} />
        </Link>
      </div>

      <form onSubmit={handleSubmit} className={s.form}>
        <ControlledInput
          {...register('email')}
          onFocus={() => handleFieldFocus('email')}
          type={'email'}
          placeholder={'Epam@epam.com'}
          label={'Email'}
          className={s.email}
          errorMessage={errors.email?.message}
        />
        <ControlledInput
          {...register('password')}
          onFocus={() => handleFieldFocus('password')}
          type={'password'}
          placeholder={'**********'}
          label={'Password'}
          errorMessage={errors.password?.message || authError}
        />
        <Link href={'/'} className={s.forgotPasswordLink}>
          Forgot password
        </Link>
        <Button fullWidth={true} type="submit">
          Sign in
        </Button>
      </form>
      <p className={s.account}>Don't have an account?</p>
      <Button fullWidth={true} variant={'textButton'}>
        Sign Up
      </Button>
    </div>
  )
}
