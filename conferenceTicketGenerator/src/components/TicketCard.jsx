import React from "react";

const TicketCard = () => {
  return (
    <div className="h-[40rem] w-full flex justify-center items-center my-[3.5rem]">
      <div className="relative h-full">
        <img src="/Subtract.png" className="h-full" />
        <div className="absolute inset-0 flex flex-col">
          <div className="!basis-[50%] p-7">
            <div className="border-[#24A0B5] border h-full w-full rounded-2xl p-3 flex flex-col justify-center">
              <div className="space-y-1 text-center">
                <p className="font-rage text-center text-[2.2rem]">
                  Techember Fest ”25
                </p>
                <p className="text-[0.62rem]">
                  📍 04 Rumens road, Ikoyi, Lagos
                </p>
                <p className="text-[0.62rem]">📅 March 15, 2025 | 7:00 PM</p>
              </div>

              {/* image */}
              <div className="my-[1rem] flex justify-center">
                <div className="w-[8.8rem] h-[8.8rem] rounded-lg border-[4px] border-[#24A0B580]"></div>
              </div>

              {/* table */}

              <div className="rounded-xl border-[#24A0B580] border p-1 bg-[#08343C]">
                <div className="flex items-center">
                  <div className="basis-[50%] border-r border-[#12464E] p-2">
                    <p className="text-[0.56rem] opacity-[33%]">
                      Enter your name
                    </p>
                    <p className="text-[0.6rem] font-bold">Avi Chukwu</p>
                  </div>
                  <div className="flex-1 p-2">
                    <p className="text-[0.56rem] opacity-[33%]">
                      Enter your email *
                    </p>
                    <p className="text-[0.6rem] font-bold">User@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center border-b border-[#12464E]">
                  <div className="basis-[50%] border-r border-[#12464E] p-2 border-t">
                    <p className="text-[0.56rem] opacity-[33%]">Ticket Type:</p>
                    <p className="text-[0.6rem] font-bold">VIP</p>
                  </div>
                  <div className="flex-1 p-2 border-t border-[#12464E]">
                    <p className="text-[0.56rem] opacity-[33%]">Ticket for :</p>
                    <p className="text-[0.6rem] font-bold">1</p>
                  </div>
                </div>

                <div className="p-2">
                  <p className="text-[0.56rem] opacity-[33%]">
                    Special request?
                  </p>
                  <p className="text-[0.6rem] font-bold">
                    Nil ? Or the users sad story they write in there gets this
                    whole space, Max of three rows
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6">
            <div className="h-full w-full">
              <img src="/BarCode.png" alt="barcode" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
