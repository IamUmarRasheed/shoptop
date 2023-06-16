import { type } from "os";
import { defineType, defineField } from "sanity";
export const category = defineType({
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 100,
        slugify: (input: string) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 100),
      },
    },
    defineField({
      name: "name",
      title: "Category",
      type: "string",
    }),
  ],
});
