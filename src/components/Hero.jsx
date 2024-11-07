const Hero = () => {
  return (
    <section className="pt-8">
      <div className="container  mx-auto items-center justify-items-center">
        {/* Hero Text */}
        <div className="text-center">
          <h1 className="text-4xl text-blue-900 font-extrabold mb-4">
            Fulfill Your Shopping
            <br /> Dreams with World Mart
          </h1>
          <p className="mb-6 text-gray-600">
            Dive into a world of endless possibilities as you explore our
            curated collections <br /> tailored to your unique style. From
            everyday essentials to timeless classics, <br /> we’ve got you
            covered. Enjoy seamless browsing.
          </p>

          {/* CTA Buttons */}
          <div className="space-x-4">
            <button className="bg-blue-800 text-white px-6 py-3 rounded-md hover:bg-blue-700">
              View Products
            </button>
            <button className="bg-white text-blue-800 px-6 py-3 border-solid border-blue-700 rounded-md hover:bg-gray-300">
              Exciting Offers
            </button>
          </div>
        </div>
      </div>

      {/* Hero Image
      <div className="flex ">
        <div className="flex  justify-between ">
          <img
            src="/cart.png"
            alt="Shopping Dream Image"
            className="mx-auto w-full "
          />
          <img
            src="/man.png"
            alt="Shopping Guy Image"
            className="mx-auto  w-full "
          />
        </div>
        <div className="rounded-lg ml-auto text-white bg-blue-800 w-max">
          <div className=" ">
            <span className="opacity-5 rotate-90 ">WORLD MART</span>
            <br />
            <span className="opacity-45 rotate-90">WORLD MART</span>
            <br />
            <span className="opacity-70 rotate-90">WORLD MART</span>
            <br />
            <span className="opacity-100 rotate-90">WORLD MART</span>
          </div>
        </div>
      </div> */}
      <div className="flex justify-between items-center relative">
        {/* Cart Image */}
        <div className="w-1/2">
          <img src="/cart.png" alt="Shopping Dream Image" className="mx-auto" />
        </div>

        {/* Man Image */}
        <div className="relative w-1/2">
          <img
            src="/man.png"
            alt="Shopping Guy Image"
            className="absolute bottom-0 right-20 transform -translate-y-8"
          />
        </div>

        {/* Rotated Text Box */}
        <div className="flex justify-end h-full">
          <div className="relative bg-blue-800 text-white p-4">
            <div className="absolute top-1/2 transform -translate-y-1/2 right-0 flex flex-col items-center">
              <span className="transform rotate-90 text-opacity-5 text-3xl mb-2">
                WORLD MART
              </span>
              <span className="transform rotate-90 text-opacity-45 text-3xl mb-2">
                WORLD MART
              </span>
              <span className="transform rotate-90 text-opacity-70 text-3xl mb-2">
                WORLD MART
              </span>
              <span className="transform rotate-90 text-opacity-100 text-3xl">
                WORLD MART
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
