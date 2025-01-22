// import { defineField } from "sanity";
// const productSchema = defineField(

//  {
//   name: "product",
//   type: "document",
//   title: "products",
//   fields: [
//     { name: "name", type: "string", title: "name" },

//     { name: "title", type: "string", title: "Title" },

//       { name: "image", type: "image", title: "Image", options: { hotspot: true } },

//     // { name: "image", type: "url", title: "Image" },
//     { name: "price", type: "number", title: "Price" },

//     { name: "days", type: "string", title: "Days" },
//     { name: "buttonurl", type: "url", title: "Button url" },

//     {
//       name: "slug",
//       type: "slug",
//       title: "Slug",
//       options: {
//         source: "title",
//         maxLength: 200,
//       },
//     },
//   ],
// });

// export default productSchema;

const carSchema = {
  name: 'car',
  type: 'document',
  title: 'Car',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Car Name',
    },
    {
      name: "slug",
      type: 'slug',
      title: 'slug',
      options: {
        source: "name"
      }
    },
    {
      name: 'brand',
      type: 'string',
      title: 'Brand',
      description: 'Brand of the car (e.g., Nissan, Tesla, etc.)',
    },
    {
      name: 'type',
      type: 'string',
      title: 'Car Type',
      description: 'Type of the car (e.g., Sport, Sedan, SUV, etc.)',
    },
    {
      name: 'fuelCapacity',
      type: 'string',
      title: 'Fuel Capacity',
      description: 'Fuel capacity or battery capacity (e.g., 90L, 100kWh)',
    },
    {
      name: 'transmission',
      type: 'string',
      title: 'Transmission',
      description: 'Type of transmission (e.g., Manual, Automatic)',
    },
    {
      name: 'seatingCapacity',
      type: 'string',
      title: 'Seating Capacity',
      description: 'Number of seats (e.g., 2 People, 4 seats)',
    },
    {
      name: 'pricePerDay',
      type: 'string',
      title: 'Price Per Day',
      description: 'Rental price per day',
    },
    {
      name: 'originalPrice',
      type: 'string',
      title: 'Original Price',
      description: 'Original price before discount (if applicable)',
    },
    {
      name: 'tags',
      type: 'array',
      title: 'Tags',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
      description: 'Tags for categorization (e.g., popular, recommended)',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Car Image',
      options: {
        hotspot: true
      }
    }
  ],
};

export default carSchema;
