import Image from "next/image";
import {
  SearchIcon,
  MenuIcon,
  UserCircleIcon,
  UserIcon,
  GlobeAltIcon,
} from "@heroicons/react/solid";

function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      {/* Left div */}

      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c513.png"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      {/* Middle div */}

      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          className="flex-grow pl-5 outline-none bg-transparent text-sm text-gray-600 placeholder-gray-400"
          type="text"
          placeholder="Start Searching"
        />
        <SearchIcon className="hidden h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:inline-flex md:mx-2" />
      </div>

      {/* Right div */}

      <div className="flex items-center space-x-4 justify-end text-gray-500">
        <p className="hidden md:inline cursor-pointer">Become a Host</p>
        <GlobeAltIcon className="h-6 " />

        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
    </header>
  );
}

export default Header;
