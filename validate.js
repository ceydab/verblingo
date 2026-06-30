/**
 * Returns Express middleware that validates `req[source]` against a Zod
 * schema. On failure, responds 400 with the validation issues. On
 * success, replaces req[source] with the parsed (and coerced) value.
 */
export function validate(schema, source = 'body') {
  return (req, res, next) => {
    const result = schema.safeParse(req[source])
    if (!result.success) {
      return res.status(400).json({
        error: 'Validation failed',
        details: result.error.flatten(),
      })
    }
    req[source] = result.data
    next()
  }
}