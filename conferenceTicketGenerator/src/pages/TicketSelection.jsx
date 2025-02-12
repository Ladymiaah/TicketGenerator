import { MdLocationOn } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useTicket } from "../context/TicketContext";
import ProgressBar from "../components/progressbar";
import ButtonGroup from "../components/button_group";
import { useState } from "react";

const ErrorMessage = ({ message, onClose }) => {
  if (!message) return null;
  return (
    <div className="mt-3 p-2 bg-red-500 text-white text-sm rounded-md">
      {message}
      <button className="ml-3 text-white font-bold" onClick={onClose}>
        ✖
      </button>
    </div>
  );
};

const TicketSelection = () => {
  const navigate = useNavigate();
  const {
    selectedTicket,
    ticketCount,
    selectTicket,
    updateTicketCount,
    resetSelection,
  } = useTicket();

  const tickets = [
    { type: "REGULAR ACCESS", price: "Free", numberAval: 20 },
    { type: "VIP ACCESS", price: "$50", numberAval: 20 },
    { type: "VVIP ACCESS", price: "$150", numberAval: 20 },
  ];

  const [error, setError] = useState("");

  const handleGenerateTicket = () => {
    if (!selectedTicket) {
      setError("Please select a ticket type before proceeding.");
      return;
    }
    navigate("/AttendeeDetails");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#041E23] text-[#FFFFFF]">
      <div className="w-170 border border-[#0E464F] rounded-3xl p-6 mt-10 mb-10">
        <ProgressBar title="Ticket Selection" currentStep={1} totalSteps={3} />
        <div className="w-155 bg-[#052228] border border-[#0E464F] rounded-3xl p-6 mt-10 mb-10">
          <div className="flex flex-col items-center">
            <div className="w-full border border-[#0E464F] rounded-xl p-4 mt-5 text-center">
              <h1 className=" text-[62px] font-['Road_Rage']">
                Techember Fest '25
              </h1>
              <p className="mt-2 text-base font-Roboto">
                Join us for an unforgettable experience at <br /> Zamt Fiesta!
                Secure your spot now.
              </p>
              <div className="flex items-center justify-center mt-3 text-sm">
                <MdLocationOn className="text-red-500 mr-1" size={20} />
                <span text-base font-Roboto>
                  23 Heritage, Ojodu. Lagos State | Mar 15, 2025 | 7:00pm
                </span>
              </div>
            </div>

            <div className="w-full h-1 bg-[#0E464F]  mt-5"></div>
            <h2 className="text-base font-Roboto mt-5">Select Ticket Type</h2>
            <div className="w-full border border-[#0E464F] rounded-xl p-4 mt-5 text-center">
              <div className="grid grid-cols-2 gap-2 mt-3 w-full">
                {tickets.map((ticket, index) => (
                  <button
                    key={index}
                    className={`relative w-full h-16 p-3 border border-[#0E464F] rounded-lg flex justify-between items-center transition-colors ${
                      selectedTicket?.type === ticket.type
                        ? "bg-[#197686] text-white"
                        : "bg-transparent"
                    }`}
                    onClick={() => selectTicket(ticket)}
                  >
                    <div>
                      <h3 className="text-sm font-semibold">{ticket.type}</h3>
                      <p className="text-xs text-[#FFFFFF]">
                        {ticket.numberAval} left!
                      </p>
                    </div>
                    <span
                      className={`px-3 py-1 text-sm rounded-lg ${
                        selectedTicket?.type === ticket.type
                          ? "bg-[#07373F] text-[#FFFFFF] border border-[#0E464F]"
                          : "bg-[#07373F] text-white border border-[#24A0B5]"
                      }`}
                    >
                      {ticket.price}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {selectedTicket && (
              <div className="mt-5 w-full">
                <label className="text-sm">Number of Tickets</label>
                <select
                  className="w-full p-2 border border-[#0E464F] rounded-md bg-[#07373F] text-white"
                  value={ticketCount}
                  onChange={(e) => updateTicketCount(Number(e.target.value))}
                >
                  {[...Array(selectedTicket.numberAval)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
              </div>
            )}

            <ErrorMessage message={error} onClose={() => setError("")} />

            <ButtonGroup
              onCancelClick={resetSelection}
              onNextClick={handleGenerateTicket}
              cancelText="Cancel"
              nextText="Next"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketSelection;
