import Image from "next/image";

const Header = () => {
  return (
    <header className="w-full h-auto bg-gray-100 py-4 px-4 text-center font-medium text-gray-700 shadow">
      <div className="flex items-center justify-center space-x-6">
        {/* Image */}
        <Image src="/command.png" alt="command" width={40} height={40} />

        {/* Header Text */}
        <div className="flex items-center space-x-6">
          <span className="text-lg md:text-xl font-bold text-gray-800">
            Wireframe Dashboard - Detail Car peresent by Maryam Saleem
          </span>

          {/* Last Updated Text */}
          <span className="text-sm md:text-base font-normal text-gray-600">
            Last Updated: 8 Aug 2022
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
