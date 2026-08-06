import { defineField, type FieldDefinition } from "sanity";

/** Bypass fragile defineField overloads that break under older TypeScript. */
export function field(definition: FieldDefinition): FieldDefinition {
  return defineField(definition);
}
