import { z } from 'zod'

export const termsSchema = z.literal(
  true,
  'You must agree to the Terms of Service and Privacy Policy'
)
