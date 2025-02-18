import { defineType, defineField } from "sanity";

export const product = defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      validation: (rule) => rule.required(),
      type: "string",
    }),
    defineField({
      name: "quantity",
      title: "Quantity",
      validation: (rule) => rule.required(),
      type: "number",
    }),
    defineField({
      name: "inventory",
      title: "Inventory",
      validation: (rule) => rule.required(),
      type: "number",
    }),
    defineField({
      name: "description",
      type: "text",
      validation: (rule) => rule.required(),
      title: "Description",
    }),
    defineField({
      name: "productImage",
      type: "image",
      validation: (rule) => rule.required(),
      title: "Product Image",
    }),
    defineField({
      name: "price",
      type: "number",
      validation: (rule) => rule.required(),
      title: "Price",
    }),
    defineField({
      name: "tags",
      type: "array",
      title: "Tags",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "dicountPercentage",
      type: "number",
      title: "Discount Percentage",
    }),
    defineField({
      name: "isNew",
      type: "boolean",
      title: "New Badge",
    }),
    defineField({
        name: "slug",
        type: "slug",
        title: "Slug",
        validation: (rule) => rule.required(),
        options: {
          source: "title", // Slug automatically generate hoga title se
          maxLength: 200,
          slugify: (input) =>
            input
              .toLowerCase()
              .replace(/\s+/g, "-") // Spaces ko "-" me convert karega
              .slice(0, 200),
        },
      }),           
    // defineField({
    //   name: "slug",
    //   title: "Slug",
    //   type: "slug",
    //   options: {
    //     source: "title", // Automatically generate slug from the title field
    //     maxLength: 200, // Maximum length for the slug
    //     slugify: (input) =>
    //       input
    //         .toLowerCase()
    //         .replace(/\s+/g, "-") // Replace spaces with -
    //         .slice(0, 200), // Limit to 200 characters
    //   },
    //   validation: (rule) => rule.required(), // Make slug required
    // }),
  ],
});