import Link from 'next/link';
import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import imageUrlBuilder from '@sanity/image-url';
import { FaHeart, FaUser, FaCarSide, FaCogs } from 'react-icons/fa'; // Import icons

interface IProduct {
  capacity: string;
  name: string;
  title?: string; // Optional if not fetched directly
  image: {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
  _id: string;
  stock?: string; // Optional if not fetched directly
  slug?: { current: string }; // Optional
  price: number;
  type?: string; // Add type if available
  fuelCapacity?: string; // Add fuelCapacity if available
  transmission?: string; // Add transmission if available
  seatingCapacity?: string; // Add seatingCapacity if available
  favorite?: boolean; // Add favorite if available
}

const builder = imageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source).url();
}

export default async function Hero() {
  const res: IProduct[] = await client.fetch(`
    *[_type == "car"][12...16]{
  _id,
  _type,
  _rev,
  _createdAt,
  _updatedAt,
  name,
  brand,
  seatingCapacity,
  originalPrice,
  type,
  pricePerDay,
  tags,
  transmission,
  fuelCapacity,
  image{
    _type,
    asset{
      _ref,
      _type
    }
  }
}

  `);

  return (
    <div className="max-w-screen-xl mx-auto px-6 py-8 bg-gray-50">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">Recommended Cars</h2>
        <Link href="/categories" className="text-blue-600 hover:underline">
          View All
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {res.map((product) => (
          <div
            key={product._id}
            className="border rounded-lg p-6 shadow-md bg-white hover:shadow-lg transition-shadow"
          >
            {/* Product Header */}
            {/* Product Header */}
<div className="flex justify-between items-start">
  <h3 className="text-lg font-semibold">{product.title}</h3>
  <button className="hover:text-red-500 transition-colors duration-200">
    <FaHeart
      className={`text-2xl ${
        product.favorite
          ? 'text-red-500' // Keep it red if favorite
          : 'text-gray-300 hover:text-red-500' // Gray by default, red on hover
      }`}
    />
  </button>
</div>
<p className="text-sm text-gray-500 mb-4">{product.type}</p>
            {/* Product Image */}
            {product.image && product.image.asset ? (
              <div className="relative w-full h-40">
                <Image
                  src={urlFor(product.image).toString()}
                  alt={product.title || 'Product Image'}
                  fill
                  className="object-contain"
                />
              </div>
            ) : (
              <div className="h-40 bg-gray-200 flex items-center justify-center rounded-lg">
                <p className="text-center text-gray-600">No Image Available</p>
              </div>
            )}

            {/* Product Details */}
            <div className="flex justify-between items-center mt-4">
              <div className="flex space-x-2 text-gray-600">
                <div className="flex items-center space-x-1">
                  <FaCarSide />
                  <span>{product.fuelCapacity || 'N/A'}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <FaCogs />
                  <span>{product.transmission || 'N/A'}</span>
                </div>
                <div className="flex items-center">
                  <FaUser />
                  <span>{product.capacity || 'N/A'}</span>
                </div>
              </div>
            </div>

            {/* Product Price and Rent Button */}
            <div className="mt-6 flex justify-between items-center">
              <p className="text-lg font-semibold">${product.price}</p>
              <Link href={`/product/${product.name}`}>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                  Rent Now
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}