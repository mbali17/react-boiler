// @flow strict-local
import type { JsonSchema } from '../src/shared/json-validation';
declare module 'ajv' {
  declare export type AjvError = {
    schemaPath: string,
    message: string,
  };

  declare module.exports: ({ removeAdditional?: boolean | 'all' }) => ({
    validate<T>(JsonSchema, T): boolean,
    errors: Array<AjvError>,
  })
}
