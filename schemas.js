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

// --- /get-db payload --------------------------------------------------
// Matches the shape built by prepareVerbs() in the frontend.

// Each entry in `features` filters on exactly one of these top-level
// verb fields. NOTE: there is currently a frontend bug where the
// "separable: true" case sends the key "separable:" (with a trailing
// colon) instead of "separable" -- flagging here since it means that
// particular filter silently matches no documents. The schema below
// validates against the *correct* key; once the frontend bug is fixed,
// requests will pass validation as expected. Until then, that specific
// malformed payload will be rejected with a 400 rather than silently
// querying for a meaningless field.
const featureItemSchema = z
  .object({
    regular: z.boolean().optional(),
    reflexive: z.boolean().optional(),
    separable: z.boolean().nullable().optional(),
    root_change: z.boolean().optional(),
  })
  .strict()
  .refine((obj) => Object.keys(obj).length === 1, {
    message: 'Each feature object must contain exactly one filter key',
  })

export const featuresSchema = z.array(featureItemSchema).nonempty()

// The 13 known mongo projection paths whichTense() can produce, plus
// the "meaning"/"verb" fields it adds when any tense is selected.
const TENSE_KEYS = [
  'Indikativ.Präsens',
  'Indikativ.Präteritum',
  'Indikativ.Perfekt',
  'Indikativ.Plusquam',
  'Indikativ.Futur I',
  'Indikativ.Futur II',
  'Konjunktiv.Konjunktiv I',
  'Konjunktiv.Konjunktiv II',
  'Konjunktiv.Perfekt',
  'Konjunktiv.Plusquam',
  'Konjunktiv.Futur I',
  'Konjunktiv.Futur II',
  'Imperativ.Präsens',
  'meaning',
  'verb',
]

// Selected-tenses shape: any subset of the known keys mapped to 1.
const tenseSelectionSchema = z.record(z.enum(TENSE_KEYS), z.literal(1))

// Fallback shape sent when no tense checkbox is selected.
const noTenseSelectedSchema = z
  .object({
    regular: z.literal(0),
    root_change: z.literal(0),
    separable: z.literal(0),
    reflexive: z.literal(0),
  })
  .strict()

export const tensesSchema = z.union([tenseSelectionSchema, noTenseSelectedSchema])

export const getDbBodySchema = z.object({
  features: featuresSchema,
  tenses: tensesSchema,
})
 