import { type SchemaTypeDefinition } from 'sanity'
import productSchema from './cars'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productSchema],
}
