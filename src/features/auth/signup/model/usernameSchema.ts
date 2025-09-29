import { z } from 'zod'

export const usernameSchema = z
  .string()
  .min(6, 'Minimum number of characters 6')
  .max(30, 'Maximum number of characters 30')
  .regex(/^[a-zA-Z0-9_-]+$/, 'Username may only contain letters, numbers, underscores, and hyphens')
