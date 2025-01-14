// import Link from 'next/link';
// import Image from 'next/image';
// import { client } from '@/sanity/lib/client';
// import imageUrlBuilder from '@sanity/image-url';

// interface Ibooks {
//   name: string;
//   title: string;
//   image: any;  // image is an object now
//   _id: string;
//   stock: string;
//   slug: { current: string };
//   price: number;
// }

// const builder = imageUrlBuilder(client); // create the image URL builder

// function urlFor(source: any) {
//   return builder.image(source).url(); // returns the image URL
// }

// export default async function Hero() {
//   // Fetch data from Sanity CMS for multiple products
//   const res: Ibooks[] = await client.fetch(`
//     *[_type == "product"][0..3]{  // Fetching first 4 products
//       price,
//       name,
//       _type,
//       _id,
//       image,
//       title,
//       slug{current}
//     }
//   `);

//   console.log(res);

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-4xl font-bold text-center mb-10">Our Products</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {res.map((data) => (
//           <div
//             key={data._id}
//             className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105"
//           >
//             {/* Image Section */}
//             {data.image && data.image.asset ? (
//               <Image
//                 src={urlFor(data.image).toString()} // Use the URL from image URL builder
//                 alt={data.title || 'Product Image'}
//                 layout="fill"
//                 className="object-cover"
//                 priority
//               />
//             ) : (
//               <div className="h-64 bg-gray-200 flex items-center justify-center">
//                 <p>No Image Available</p>
//               </div>
//             )}

//             {/* Product Info Section */}
//             <div className="p-4">
//               <h2 className="text-lg font-semibold text-gray-800">{data.title}</h2>
//               <p className="text-gray-600 text-sm mb-2">{data.name}</p>
//               <p className="text-sm font-medium text-green-600 mb-2">
//                 {data.stock === 'In Stock' ? 'In Stock' : 'Out of Stock'}
//               </p>
//               <p className="text-lg font-bold text-gray-900 mb-4">${data.price}</p>
//               <Link href={`/product/${data.slug.current}`}>
//                 <span className="block bg-blue-500 text-white text-center py-2 rounded hover:bg-blue-600">
//                   View Details
//                 </span>
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


import Link from 'next/link';
import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import imageUrlBuilder from '@sanity/image-url';

interface Ibooks {
  name: string;
  title: string;
  image: any;  // Make sure to avoid using 'any' for better type safety
  _id: string;
  stock: string;
  slug: { current: string };
  price: number;
}

const builder = imageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source).url(); 
}

export default async function Hero() {
  const res: Ibooks[] = await client.fetch(`
    *[_type == "product"][0..3]{
      price,
      name,
      _type,
      _id,
      image,
      title,
      slug{current}
    }
  `);

  // console.log(res);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {res.map((data) => (
          <div
            key={data._id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transition-all transform hover:scale-105 duration-300 ease-in-out"
          >
            {/* Image Section */}
            {data.image && data.image.asset ? (
              <div className="relative w-full h-48"> 
                <Image
                  src={urlFor(data.image).toString()}
                  alt={data.title || 'Product Image'}
                  width={660}  // Adjust width as per your design
                  height={204} // Adjust height as per your design
                  className="object-cover rounded-t-lg"
                  priority
                />
              </div>
            ) : (
              <div className="h-48 bg-gray-200 flex items-center justify-center rounded-t-lg">
                <p className="text-center text-gray-600">No Image Available</p>
              </div>
            )}

            {/* Product Info Section */}
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{data.title}</h2>
              <p className="text-gray-600 text-sm mb-3">{data.name}</p>
              <p className="text-sm font-medium text-green-600 mb-3">
                {data.stock === 'In Stock' ? 'In Stock' : 'Out of Stock'}
              </p>
              <p className="text-lg font-bold text-gray-900 mb-5">${data.price}</p>
              <Link href={`/product/${data.slug.current}`}>
                <span className="block text-center py-3 px-6 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300">
                  View Details
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
