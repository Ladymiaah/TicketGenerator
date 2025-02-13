import { MdLocationOn } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useTicket } from "../context/TicketContext";
import ProgressBar from "../components/progressbar";
import ButtonGroup from "../components/ButtonGroup";
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
    { type: "REGULAR ACCESS", price: "Free", numberAval: "20/52" },
    { type: "VIP ACCESS", price: "$50", numberAval: "20/52" },
    { type: "VVIP ACCESS", price: "$150", numberAval: "20/52" },
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
    <div className="w-full min-h-screen flex items-center justify-center mt-10 text-white px-4">
      <div className="w-full max-w-4xl border border-[#0E464F] rounded-3xl p-6 md:p-12">
        <ProgressBar title="Ticket Selection" currentStep={1} totalSteps={3} />

        <div className="w-full bg-[#08252B] border border-[#0E464F] rounded-3xl p-6 mt-6">
          <div className="flex flex-col items-center">
            {/* Event Title & Location */}
            <div className="w-full border border-[#0E464F] rounded-xl p-4 text-center bg-[#07373F]">
              <h1 className="text-4xl md:text-5xl font-['Road_Rage']">
                Techember Fest '25
              </h1>
              <p className="mt-2 text-sm md:text-base font-Roboto">
                Join us for an unforgettable experience at <br /> Zamt Fiesta!
                Secure your spot now.
              </p>
              <div className="flex items-center justify-center mt-3 text-sm space-x-2">
                <MdLocationOn className="text-red-500" size={20} />
                <span className="text-sm md:text-base font-Roboto font-normal leading-[24px] whitespace-nowrap">
                  04 Rumens Road, Ikoyi, Lagos | Mar 15, 2025 | 7:00pm
                </span>
              </div>
            </div>

            {/* Divider */}
            <div className="w-full h-1 bg-[#0E464F] mt-5"></div>

            {/* Ticket Selection */}
            <div className="w-full max-w-md mt-5">
              <h2 className="text-base md:text-lg font-Roboto">
                Select Ticket Type
              </h2>
              <div className="w-full bg-[#052228] border border-[#07373F] rounded-xl p-4 mt-3">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {tickets.map((ticket, index) => (
                    <button
                      key={index}
                      className={`relative w-full h-[110px] p-4 border border-[#0E464F] rounded-lg transition-colors ${
                        selectedTicket?.type === ticket.type
                          ? "bg-[#197686] text-white"
                          : "bg-transparent"
                      }`}
                      onClick={() => selectTicket(ticket)}
                    >
                      <p className="text-xl font-semibold">{ticket.price}</p>
                      <h3 className="text-base font-normal">{ticket.type}</h3>
                      <p className="text-sm">{ticket.numberAval}</p>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Ticket Count Dropdown */}
            {selectedTicket && (
              <div className="mt-5 w-full max-w-md">
                <label className="text-sm">Number of Tickets</label>
                <select
                  className="w-full h-12 rounded-lg p-4 border border-[#07373f] bg-[#052228] text-white"
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

            {/* Error Message */}
            <ErrorMessage message={error} onClose={() => setError("")} />

            {/* Button Group */}
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

// import { useState } from "react";
// import { MdLocationOn } from "react-icons/md";

// const TicketSelection = () => {
//   const tickets = [
//     { type: "REGULAR ACCESS", price: "Free", numberAval: 20 },
//     { type: "VIP ACCESS", price: "$50", numberAval: 20 },
//     { type: "VVIP ACCESS", price: "$150", numberAval: 20 },
//   ];

//   const [selectedTicket, setSelectedTicket] = useState(null);

//   const handleTicketClick = (ticket) => {
//     setSelectedTicket(ticket);
//   };

//   const handleGenerateTicket = () => {
//     if (selectedTicket) {
//       console.log("Generated Ticket:", selectedTicket);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
//       <div className="w-96 border border-[#1e484d] rounded-3xl p-6 mt-10 mb-10">
//         <div className="flex justify-between">
//           <header className="text-xl font-semibold">Ticket Selection</header>
//           <p className="text-sm text-gray-400">Step 1/3</p>
//         </div>

//         <div className="flex flex-col items-center">
//           <div className="w-full border border-[#1e484d] rounded-xl p-4 mt-5 text-center">
//             <h1 className="italic text-2xl">Techember Fest '25</h1>
//             <p className="mt-2 text-sm">
//               Join us for an unforgettable experience at Zamt Fiesta! Secure
//               your spot now.
//             </p>
//             <div className="flex items-center justify-center mt-3 text-sm">
//               <MdLocationOn className="text-red-500 mr-1" size={20} />
//               <span>
//                 23 Heritage, Ojodu. Lagos State | Mar 15, 2025 | 7:00pm
//               </span>
//             </div>
//           </div>

//           <div className="border-t border-[#1e484d] mt-5 w-full"></div>

//           <h2 className="text-lg mt-5">Select Ticket Type</h2>

//           <div className="grid grid-cols-2 gap-2 mt-3 w-full">
//             {tickets.map((ticket, index) => (
//               <button
//                 key={index}
//                 className={`w-full h-16 p-4 border border-[#1e484d] rounded-lg flex justify-between items-center transition-colors ${
//                   selectedTicket?.type === ticket.type
//                     ? "bg-[#327075] text-white"
//                     : "bg-transparent"
//                 }`}
//                 onClick={() => handleTicketClick(ticket)}
//               >
//                 <div>
//                   <h3 className="text-sm font-semibold">{ticket.type}</h3>
//                   <p className="text-xs">{ticket.price}</p>
//                 </div>
//                 <span className="text-sm">{ticket.numberAval}</span>
//               </button>
//             ))}
//           </div>

//           <button
//             className="mt-6 bg-[#327075] hover:bg-[#265d5e] text-white font-bold py-2 px-4 rounded-lg w-full disabled:bg-gray-500"
//             disabled={!selectedTicket}
//             onClick={handleGenerateTicket}
//           >
//             {selectedTicket
//               ? `Generate ${selectedTicket.type} Ticket`
//               : "Select a Ticket"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TicketSelection;
