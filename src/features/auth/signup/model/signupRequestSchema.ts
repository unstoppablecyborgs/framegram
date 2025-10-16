import { signupSchema } from './signupSchema'

export const signupRequestSchema = signupSchema
  .pick({ username: true, email: true, password: true })
  .transform(data => ({
    userName: data.username,
    email: data.email,
    password: data.password,
  }))
