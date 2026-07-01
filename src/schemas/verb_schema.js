import { z } from 'zod'
// --- /get-db payload --------------------------------------------------
// Matches the shape built by prepareVerbs() in the frontend.

// Each entry in `features` filters on exactly one of these top-level
// verb fields.
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

// Validate the nested structures (e.g., Indikativ: { Perfekt: 1 })
const nestedTenseGroup = z.record(z.string(), z.literal(1)).optional();

const tenseSelectionSchema = z.object({
  // Accept the flat required properties
  meaning: z.literal(1).optional(),
  verb: z.literal(1).optional(),

  // Accept the nested categories created by the dots
  Indikativ: nestedTenseGroup,
  Konjunktiv: nestedTenseGroup,
  Imperativ: nestedTenseGroup,
}).catchall(z.literal(1)); // catchall handles any keys that remained flat strings
// Selected-tenses shape: any subset of the known keys mapped to 1.
// const tenseSelectionSchema = z.record(z.enum(TENSE_KEYS), z.literal(1))

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
