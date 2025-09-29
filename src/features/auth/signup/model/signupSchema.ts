import { z } from 'zod'
import { emailSchema, passwordSchema } from '@/shared/auth'
import { termsSchema } from './termsSchema'
import { usernameSchema } from './usernameSchema'

export const signupSchema = z
  .object({
    username: usernameSchema,
    email: emailSchema,
    password: passwordSchema,
    confirmPassword: z.string(),
    acceptTerms: termsSchema,
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'Passwords must match',
    path: ['confirmPassword'],
  })

export type SignupFormFields = z.infer<typeof signupSchema>
