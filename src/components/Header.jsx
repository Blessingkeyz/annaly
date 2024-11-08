import headerImg from "/headerimg.jpeg";

const Header = () => {
  return (
    <header className="bg-[#051d40]">
      <div className="flex justify-center items-center">
        <div className="ml-10">
          <h1 className="text-white mb-12 font-bold text-7xl">ANNALY</h1>
          <p className="text-[#f1945B] -mt-8 mb-12 text-[79.8px]">
            TRADE CAPITAL
          </p>
          <p className="text-[#f1945B] text-[34px] italic">
            A Leading Diversified Capital Manager
          </p>
        </div>

        {/* image*/}
        <div className=" hidden md:block">
          <img src={headerImg} width={""} alt="people" />
        </div>
      </div>
    </header>
  );
};

export default Header;
