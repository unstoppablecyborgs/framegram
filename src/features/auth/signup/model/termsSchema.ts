import { z } from 'zod'

export const termsSchema = z
  .boolean()
  .refine(val => val === true, 'You must accept the terms & conditions')
