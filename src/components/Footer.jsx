const Footer = () => {
  return (
    <footer className="  py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* First Column: About */}
        <div className="ml-12">
          {/* Logo */}
          <img src="/logo.png" alt="WM Logo" className="h-20 ml-5" />
          <p>
            Shop with World Mart <br /> For quality products
          </p>
        </div>

        {/* Second Column: Useful Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Useful Links</h3>
          <ul className="space-y-4">
            <li>
              <a href="#" className="hover:text-gray-400">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Blogs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* Third Column: Menu */}
        <div>
          <h3 className="text-xl font-bold mb-4">Main Menu</h3>
          <ul className="space-y-4">
            <li>
              <a href="#" className="hover:text-gray-400">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Offers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Products
              </a>
            </li>
          </ul>
        </div>

        {/* Fourth Column: Contact */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <a href="mailto:worldmart@gmail.com">worldmart@gmail.com</a>
          <p className="mt-4">
            <a href="tel:+64958248966">+64 958 248 966</a>
          </p>
          <div className="mt-4 space-x-4">Social media</div>
        </div>
      </div>

      <div className="text-center mt-8 space-x-4 text-sm text-gray-400">
        <a href="#" className="hover:text-gray-400">
          <i className="fa-brands fa-facebook"></i>
        </a>
        <a href="#" className="hover:text-gray-400">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="#" className="hover:text-gray-400">
          <i className="fa-brands fa-twitter"></i>
        </a>
        <a href="#" className="hover:text-gray-400">
          <i className="fa-brands fa-youtube"></i>
        </a>
        <span>Copyright © 2023 Dscode | All rights reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
