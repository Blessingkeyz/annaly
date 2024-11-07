import { FaMoneyBillWave, FaClock, FaCalendarDay } from "react-icons/fa"; // Using icons for features

const Features = () => {
  return (
    <section className="bg-blue-700 text-white pt-12">
      <div className="container ml-auto grid  grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Features Text */}
        <div className="grid text-left justify-center">
          <h1 className="text-6xl leading-tight font-bold mb-4">
            Features & <br />
            <span className="text-yellow-300">Benefits</span>
          </h1>
          <p className="mb-14 text-xl">
            Your go-to for rapid delivery, ensuring your
            <br /> satisfaction at the speed of light.
          </p>
          {/* List of Features */}
          <ul className="space-y-2 text-xl">
            <li className="flex items-center">
              <FaClock className=" mr-3" />
              Get your delivery in 48 hours
            </li>
            <li className="flex items-center">
              <FaMoneyBillWave className=" mr-3" />
              Cash On Delivery available
            </li>
            <li className="flex items-center">
              <FaCalendarDay className=" mr-3" />
              7-days easy return
            </li>
          </ul>
        </div>

        {/* Features Image */}
        <div>
          <img
            src="/dispatch.png"
            alt="Delivery Features"
            className="ml-auto min-w-full rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
