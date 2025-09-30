'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { Button, Checkbox, ControlledInput } from '@/shared/ui'
import { SignupFormFields, signupSchema } from '../model/signupSchema'

export const SignupForm = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<SignupFormFields>({
    defaultValues: {
      acceptTerms: true,
    },
    resolver: zodResolver(signupSchema),
    mode: 'onBlur',
  })

  const onSubmit: SubmitHandler<SignupFormFields> = data => {
    console.log('Form data: ', data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3>Sign Up</h3>
      <ControlledInput
        type="text"
        placeholder="Epam11"
        label={'Username'}
        errorMessage={errors.username?.message}
        {...register('username')}
      />
      <ControlledInput
        type="email"
        placeholder="Epam@epam.com"
        label={'Email'}
        errorMessage={errors.email?.message}
        {...register('email')}
      />
      <ControlledInput
        type="password"
        placeholder="******************"
        label={'Password'}
        errorMessage={errors.password?.message}
        {...register('password')}
      />
      <ControlledInput
        type="password"
        placeholder="******************"
        label={'Password confirmation'}
        errorMessage={errors.confirmPassword?.message}
        {...register('confirmPassword')}
      />
      <div>
        <Controller
          name="acceptTerms"
          control={control}
          render={({ field: { value, onChange, ...restField } }) => (
            <Checkbox checked={value} onCheckedChange={onChange} {...restField} />
          )}
        />
        <label htmlFor="terms">
          I agree to the <Link href={'/'}>Terms of Service</Link> and{' '}
          <Link href={'/'}>Privacy Policy</Link>
        </label>
      </div>
      {errors.acceptTerms && <div>{errors.acceptTerms.message}</div>}
      <Button type="submit" disabled={isSubmitting || !isValid}>
        Sign Up
      </Button>
    </form>
  )
}
