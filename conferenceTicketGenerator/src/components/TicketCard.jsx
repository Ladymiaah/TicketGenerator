import React from "react";

const TicketCard = () => {
  return (
    <div className="relative w-[350px] bg-[#0d1b2a] text-white p-6 mx-auto rounded-[20px] border border-cyan-500 shadow-[0_0_15px_rgba(0,255,255,0.5)]">
      {/* Outer glowing border effect */}
      <div className="absolute inset-0 border-2 border-cyan-500 rounded-[20px] pointer-events-none"></div>

      {/* Six Circles for Cutout Effect */}
      {/* Top Cutouts */}
      <div className="absolute w-8 h-8 bg-[#0d1b2a] rounded-full border-b-4 border-cyan-500 top-[-10px] left-[50px]"></div>
      <div className="absolute w-8 h-8 bg-[#0d1b2a] rounded-full border-b-4 border-cyan-500 top-[-10px] left-1/2 transform -translate-x-1/2"></div>
      <div className="absolute w-8 h-8 bg-[#0d1b2a] rounded-full border-b-4 border-cyan-500 top-[-10px] right-[50px]"></div>

      {/* Bottom Cutouts */}
      <div className="absolute w-8 h-8 bg-[#0d1b2a] rounded-full border-t-4 border-cyan-500 bottom-[-10px] left-[50px]"></div>
      <div className="absolute w-8 h-8 bg-[#0d1b2a] rounded-full border-t-4 border-cyan-500 bottom-[-10px] left-1/2 transform -translate-x-1/2"></div>
      <div className="absolute w-8 h-8 bg-[#0d1b2a] rounded-full border-t-4 border-cyan-500 bottom-[-10px] right-[50px]"></div>

      {/* Event Name */}
      <h2 className="text-2xl font-bold text-center text-cyan-400 drop-shadow-lg">
        Techember Fest '25
      </h2>

      {/* Location and Date */}
      <p className="text-sm text-center text-gray-300 mt-1">
        📍 04 Rumens road, Ikoyi, Lagos
      </p>
      <p className="text-sm text-center text-gray-300">
        📅 March 15, 2025 | 7:00 PM
      </p>

      {/* Profile Image */}
      <div className="flex justify-center my-4">
        <img
          src="https://via.placeholder.com/100"
          alt="Attendee"
          className="w-24 h-24 rounded-lg border-2 border-cyan-400 shadow-lg"
        />
      </div>

      {/* Ticket Details Section */}
      <div className="bg-[#16202c] p-4 rounded-lg border border-cyan-500 relative">
        {/* Vertical Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-cyan-500"></div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <p className="text-xs text-gray-400">Enter your name</p>
            <p className="text-sm font-semibold text-white">Avi Chukwu</p>
          </div>
          <div>
            <p className="text-xs text-gray-400">Enter your email</p>
            <p className="text-sm font-semibold text-white">User@email.com</p>
          </div>
        </div>
        {/* Divider Line */}
        <div className="border-t border-cyan-500 my-2"></div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <p className="text-xs text-gray-400">Ticket Type:</p>
            <p className="text-sm font-semibold text-white">VIP</p>
          </div>
          <div>
            <p className="text-xs text-gray-400">Ticket for:</p>
            <p className="text-sm font-semibold text-white">1</p>
          </div>
        </div>
        {/* Divider Line */}
        <div className="border-t border-cyan-500 my-2"></div>
        {/* Special Request */}
        <div className="mt-2">
          <p className="text-xs text-gray-400">Special Request?</p>
          <p className="text-sm text-white">
            Nil? Or the users sad story they write...
          </p>
        </div>
      </div>

      {/* Bottom Barcode Section */}
      <div className="relative mt-6 bg-[#16202c] p-4 rounded-lg border border-cyan-500">
        <div className="h-12 bg-white w-full"></div>
        <p className="text-center text-xs text-gray-400 mt-2">
          1 234567 891026
        </p>
      </div>
    </div>
  );
};

export default TicketCard;
