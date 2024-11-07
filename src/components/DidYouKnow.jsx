const DidYouKnow = () => {
  return (
    <section className="bg-gray-100  py-12">
      <div className="container space-x-12  mx-auto md:flex ">
        {/*  Image */}
        <div className="md:w-1/2 ">
          <img
            src="/know.png"
            alt="Delivery Features"
            className=" min-w-full rounded-lg"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-6xl text-blue-800 font-bold mb-4">
            Did You Know?
          </h2>
          <p className="text-gray-600 max-w-md text-xl  mb-6">
            At WorldMart, we’re not just another shopping destination; we’re
            your gateway to a world of convenience and quality. We strive to
            redefine your shopping experience. Founded on the principle of
            customer satisfaction and innovation, we strive to redefine your
            shopping experience.
          </p>
          <button className="bg-blue-800 text-white px-6 py-3 rounded-md  hover:bg-blue-700">
            Explore
          </button>
        </div>
      </div>
    </section>
  );
};

export default DidYouKnow;
