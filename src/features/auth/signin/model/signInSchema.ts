import * as z from 'zod/v4'

export const signInSchema = z.object({
  email: z.email({ error: 'The email must match the format example@example.com' }),
  password: z.string().min(1, 'Password is required'),
})

export type SignInInputs = z.infer<typeof signInSchema>
