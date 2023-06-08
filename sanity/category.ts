import { type } from "os";
import { defineType, defineField } from "sanity";
export const category = defineType({
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Category",
      type: "string",
    }),
  ],
});
