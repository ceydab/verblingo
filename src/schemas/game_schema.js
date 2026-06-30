import { z } from 'zod'

// Loosely matches ids like "game1", "game2", etc. Restricted to
// alphanumerics, hyphens, and underscores to reject garbage/malicious
// input without assuming a fixed naming convention.
export const gameIdParamSchema = z.object({
  gameid: z
    .string()
    .min(1, 'gameid is required')
    .max(100, 'gameid is too long')
    .regex(/^[a-zA-Z0-9_-]+$/, 'gameid contains invalid characters'),
})
