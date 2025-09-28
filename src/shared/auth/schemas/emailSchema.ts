import { z } from 'zod'

export const emailSchema = z.email('The email must match the format example@example.com')
