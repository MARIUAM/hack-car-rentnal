import Image from "next/image";
import { FaStar } from "react-icons/fa";

const Reviews = () => {
  const reviews = [
    {
      name: "Alex Stanton",
      role: "CEO at Bukalapak",
      date: "21 July 2022",
      review:
        "We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
      rating: 5,
      avatar: "/profill.png",
    },
    {
      name: "Skylar Dias",
      role: "CEO at Amazon",
      date: "20 July 2022",
      review:
        "We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
      rating: 5,
      avatar: "/profilee.png",
    },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <button className="bg-blue-600 text-white text-sm font-medium w-8 h-8 rounded-md flex items-center justify-center">
            13
          </button>
          <h2 className="text-2xl font-bold">Reviews</h2>
        </div>
        <span className="bg-blue-100 text-blue-600 text-sm font-medium px-3 py-1 rounded-full">
          {reviews.length}
        </span>
      </div>
      <div className="space-y-6">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row md:items-start gap-4"
          >
            <Image
              src={review.avatar}
              alt={`${review.name}'s avatar`}
              width={50}
              height={50}
              className="rounded-full"
            />
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-lg">{review.name}</h3>
                  <p className="text-sm text-gray-500">{review.role}</p>
                </div>
                <span className="text-sm text-gray-400">{review.date}</span>
              </div>
              <p className="text-gray-700 mt-2">{review.review}</p>
              <div className="flex items-center mt-2">
                {[...Array(review.rating)].map((_, i) => (
                  <FaStar
                    key={i}
                    className="text-yellow-600 hover:text-yellow-800 transition-colors duration-200"
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="mt-6 text-blue-600 hover:underline flex items-center mx-auto">
        Show All <span className="ml-1">▼</span>
      </button>
    </div>
  );
};

export default Reviews;
