const testimonials = [
  {
    name: "Bob",
    feedback:
      "World Mart has truly changed the way I shop online. The variety of products is astonishing, and the prices are unbeatable. Whether I'm looking for electronics, clothing, I always find exactly what I need.",
    image: "/bob.png",
  },
  {
    name: "Charlie",
    feedback:
      "As a frequent online shopper, I've tried many platforms, but none compare to World Mart. The user interfaceis intuitive and easy to navigate, making it simple to find what i'm looking for.",
    image: "/charlie.png",
  },
  {
    name: "John",
    feedback:
      "I've been a loyal customer of World Mart for years, and for good reason. The sheer variety of products available is astounding, and I love that I can find everything I need in one place.",
    image: "/john.png",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl text-blue-700 font-bold ">Testimonials</h2>
        <p className=" text-blue-700 font-semibold mb-8">
          This is what our customers say about World Mart!
        </p>
        <div className="flex ">
          <img
            src={testimonials[0].image}
            style={{ width: "200px" }}
            alt={`${testimonials[0].name}'s photo`}
            className="  mr-4"
          />
          <div className="w-3/5 h-2/6 -ml-5 rounded-r-full pl-5 pr-16 pb-10 pt-6 mt-9 text-white bg-blue-700">
            <div className="flex text-left mb-2">
              <div className="font-bold text-2xl ">{testimonials[0].name}</div>
            </div>
            <p className="text-left">{testimonials[0].feedback}</p>
          </div>
        </div>

        {/* charlie */}
        <div className="flex justify-end -mr-5 ">
          <div className="w-3/5 h-2/6 -ml-5 rounded-l-full pl-16 pr-5 pb-9 pt-6 mt-9 text-white bg-blue-700">
            <div className="flex text-left mb-2">
              <div className="font-bold text-2xl ">{testimonials[1].name}</div>
            </div>
            <p className="text-left">{testimonials[1].feedback}</p>
          </div>
          <img
            src={testimonials[1].image}
            style={{ width: "200px" }}
            alt={`${testimonials[1].name}'s photo`}
            className="  mr-4"
          />
        </div>

        <div className="flex ">
          <img
            src={testimonials[2].image}
            style={{ width: "200px" }}
            alt={`${testimonials[2].name}'s photo`}
            className="  mr-4"
          />
          <div className="w-3/5 h-2/6 -ml-5 rounded-r-full pl-5 pr-16 pb-9 pt-6 mt-9 text-white bg-blue-700">
            <div className="flex text-left mb-2">
              <div className="font-bold text-2xl ">{testimonials[2].name}</div>
            </div>
            <p className="text-left">{testimonials[2].feedback}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
