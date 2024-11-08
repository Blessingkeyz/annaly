import footerImg from "/footerimg.jpg";

const Footer = () => {
  return (
    <footer className="bg-[#051d40]">
      <div className="flex px-10 py-20 justify-center items-center">
        <div className="">
          <p className="text-[#f1945B]   text-[79.8px] leading-tight">
            ANNALY TRADE <br /> CAPITAL
          </p>
          <p className="text-[#4bd1fb] text-[34px] ">Connect with us</p>
          <div>
            <i className="fas text-2xl mr-5 fa-globe my-10 text-white"></i>
            <a
              href="https://app.atcapital.us"
              className="text-[#ff6100] text-2xl"
            >
              https://app.atcapital.us
            </a>
          </div>
          <div>
            <i className="fas text-2xl mr-5 fa-envelope  text-white mb-10"></i>
            <a
              href="mailto:support@atcapital.us"
              className="text-[#ff6100] text-2xl"
            >
              support@atcapital.us
            </a>
          </div>
        </div>

        {/* image*/}
        <div className=" block">
          <img src={footerImg} alt="footerimg" className="w-[500px]" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
