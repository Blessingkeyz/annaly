import Logo from "/logo.png";

const Header = () => {
  return (
    <header className="bg-white">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
        {/* Logo */}
        <div className="mt-3">
          <img src={Logo} alt="WM Logo" className="h-20" />
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center space-x-6 bg-blue-600 text-white px-16 py-2 rounded-full">
          {/* Navigation Links */}
          <nav className="flex space-x-6 lg:space-x-9">
            <a href="#" className="hover:bg-blue-700">
              Home
            </a>
            <a href="#" className="hover:underline">
              About Us
            </a>
            <a href="#" className="hover:underline">
              Fashion
            </a>
            <a href="#" className="hover:underline">
              Offers
            </a>
            <a href="#" className="hover:underline">
              Services
              <i className="fas fa-caret-down ml-2"></i>
            </a>
          </nav>
        </div>
        <div className="flex space-x-6 ">
          <div className="flex space-x-3">
            {/* Search Icon */}
            <button className="hover:text-gray-300">
              <i className="fas fa-search"></i>
            </button>
            {/* Cart Icon */}
            <button className="hover:text-gray-300">
              <i className="fas fa-shopping-cart"></i>
            </button>
          </div>
          <div>
            {/* Login Button */}
            <a
              href="#"
              className="flex items-center w-36 justify-center bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700"
            >
              <i className="fas fa-user mr-2"></i>
              Login
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
