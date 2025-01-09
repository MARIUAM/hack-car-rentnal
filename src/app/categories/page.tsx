import BookingSection from "@/components/booking";
import PopularCars from "@/components/card1";

const Categories = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="flex-1 p-6 space-y-6">
        <div className="mb-8">
          <BookingSection />
        </div>
        <PopularCars />
      </div>
    </div>
  );
};

export default Categories;
