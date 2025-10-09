import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { SignInInputs, signInSchema } from '@/features/auth/signin/model/signInSchema'
import { useLoginMutation } from '@/shared/api/auth'

type ErrorApi = {
  status: number
  data: {
    statusCode: number
    error: string
    messages: string
  }
}

export const useSignInForm = () => {
  const [login] = useLoginMutation()

  const router = useRouter()

  const [authError, setAuthError] = useState<string>('')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    clearErrors,
  } = useForm<SignInInputs>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(signInSchema),
    mode: 'onTouched',
    reValidateMode: 'onBlur',
  })

  const handleFieldFocus = (fieldName: keyof SignInInputs) => {
    if (errors[fieldName]) {
      clearErrors(fieldName)
    }
    if (authError) {
      setAuthError('')
    }
  }

  const onSubmit: SubmitHandler<SignInInputs> = async data => {
    try {
      const res = await login(data).unwrap()
      if (res.accessToken) {
        const token = res.accessToken
        localStorage.setItem('accessToken', token)
        router.replace('/')
        reset()
      }
    } catch (err: unknown) {
      const error = err as ErrorApi
      if (error.data?.statusCode === 400) {
        setAuthError('The email or password are incorrect. Try again please')
      } else if (error.data?.statusCode === 401) {
        setAuthError(error.data?.error)
      } else {
        setAuthError('An error occurred. Please try again.')
      }
    }
  }

  return {
    register,
    handleFieldFocus,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    authError,
  }
}
