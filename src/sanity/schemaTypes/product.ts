import { defineField } from "sanity";
const productSchema = defineField(

 {
  name: "product",
  type: "document",
  title: "products",
  fields: [
    { name: "name", type: "string", title: "name" },

    { name: "title", type: "string", title: "Title" },

      { name: "image", type: "image", title: "Image", options: { hotspot: true } },

    // { name: "image", type: "url", title: "Image" },
    { name: "price", type: "number", title: "Price" },

    { name: "stock", type: "string", title: "Stock" },
    { name: "buttonurl", type: "url", title: "Button url" },

    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "title",
        maxLength: 200,
      },
    },
  ],
});

export default productSchema;
