import Vector from "../assets/Vector.png";
import Line from "../assets/Line 5.png";
import Ticz from "../assets/ticz.png";

function Navbar() {
  return (
    <div className="w-full md:max-w-6xl h-[76px] mt-2 mb-10 mx-auto rounded-[24px] border border-[#197686] flex flex-wrap md:flex-nowrap items-center justify-between px-4 sm:px-8 md:px-16 py-2">
      {/* Logo Section */}
      <div className="flex items-center gap-2">
        <img
          src={Vector}
          alt="vector"
          className="w-[40px] h-[36px] rounded-[12px] p-[6px_8px]"
        />
        <img src={Ticz} alt="ticz" className="w-[43.79px] h-[22.62] " />
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex gap-8 text-[#FFFFFF]">
        <p className="font-[JejuMyeongjo] text-[18px]">Events</p>
        <p className="font-[JejuMyeongjo] text-[18px]">My Tickets</p>
        <p className="font-[JejuMyeongjo] text-[18px]">About Project</p>
      </div>

      {/* Ticket Button */}
      <button className="w-[169px] h-[52px] rounded-[12px] bg-[#FFFFFF] border border-gray-300 flex items-center justify-center gap-[8px] px-6">
        <p className="text-black font-[JejuMyeongjo] font-normal text-[18px] whitespace-nowrap">
          MY TICKET
        </p>
        <img src={Line} alt="line" className="w-[16px] h-[16px] rounded-full" />
      </button>

      {/* Mobile Menu Placeholder (Optional) */}
      <div className="md:hidden">
        {/* Add a hamburger menu icon here for mobile */}
        <button className="text-white">☰</button>
      </div>
    </div>
  );
}

export default Navbar;
