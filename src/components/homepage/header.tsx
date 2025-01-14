import Image from "next/image";

const Header = () => {
  return (
    <header className="w-full bg-gray-100 py-4 px-4 shadow">
      {/* Container for content */}
      <div className="flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0">
        {/* Image */}
        <div className="flex-shrink-0">
          <Image src="/command.png" alt="command" width={40} height={40} />
        </div>

        {/* Header Text */}
        <div className="flex-1 text-center md:text-left whitespace-normal">
          <span className="block text-sm md:text-lg font-bold text-gray-800">
            Wireframe Dashboard - Detail Car presented by Maryam Saleem
          </span>
          <span className="block text-xs md:text-sm font-normal text-gray-600">
            Last Updated: 8 Aug 2022
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
