// import ProgressBar from "../components/progressbar";
// import { useTicket } from "../context/TicketContext";

// function TicketReadypage() {
//   const { attendeeDetails, selectedTicket, imageUrl } = useTicket();

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-[#041E23] text-[#FFFFFF]">
//       <div className="w-[750px] border border-[#0E464F] rounded-3xl p-6 mt-10 mb-10 bg-[#052228]">
//         <ProgressBar title="Ready" currentStep={3} totalSteps={3} />
//         <div className="mt-5 text-center">
//           <h1 className="font-Alatsi text-[32px]">Your Ticket is Booked!</h1>
//           <p className="font-Roboto text-base">
//             You can download or check your email for a copy
//           </p>
//         </div>

//         {/* Ticket Card */}
//         <div className="relative flex items-center bg-[#0F2D34] text-white w-full h-[200px] rounded-xl shadow-lg p-4 border border-gray-500 mt-6">
//           {/* Left Section - Image/QR Code */}
//           <div className="bg-white p-2 rounded-lg">
//             {imageUrl ? (
//               <img
//                 src={imageUrl}
//                 alt="Uploaded"
//                 className="w-20 h-20 object-cover rounded-lg"
//               />
//             ) : (
//               <div className="w-20 h-20 bg-gray-300"></div> // Placeholder if no image
//             )}
//           </div>

//           {/* Middle Section - Ticket Info */}
//           <div className="flex flex-col flex-grow px-4">
//             <h2 className="text-[36px] font-['Road_Rage'] leading-tight">
//               Techember Fest '25
//             </h2>
//             <p className="font-Roboto text-sm flex items-center">
//               📍 04 Rumens Road, Ikoyi, Lagos
//             </p>
//             <p className="font-Roboto text-sm flex items-center mb-2">
//               📅 March 15, 2025 | 7:00 PM
//             </p>

//             <p className="text-xs text-[#d9d9d9] bg-[#0E464F] mt-1 rounded-xl px-3 py-1 inline-block">
//               Ticket for 1 entry only
//             </p>
//           </div>

//           {/* Ticket Type Badge */}
//           <div className="absolute -top-2 left-14 bg-[#C4A07C] text-[#1C1C1C] px-3 py-1 text-xs font-bold rotate-12 shadow-md">
//             REG
//           </div>

//           {/* Right Section - Perforated Edge */}
//           <div className="absolute right-0 top-0 h-full w-20 bg-[#0F2D34] flex items-center justify-center border-l border-dashed border-gray-500">
//             <div className="flex flex-col items-center -rotate-90">
//               <p className="text-[24px] font-['Road_Rage'] text-center">
//                 Techember Fest '25
//               </p>
//               <div className="w-full h-[1px] bg-gray-400 my-2"></div>{" "}
//               {/* Divider Line */}
//               <p className="text-[10px] font-Roboto text-center">
//                 <strong>User Name:</strong> {attendeeDetails.name}
//               </p>
//               <p className="text-[10px] font-Roboto text-center">
//                 <strong>Email:</strong> {attendeeDetails.email}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default TicketReadypage;

import ProgressBar from "../components/progressbar";

import TicketCard from "../components/TicketCard"; // Import TicketCard
import ButtonGroup from "../components/ButtonGroup";

function TicketReadypage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#041E23] text-[#FFFFFF] md:max-w-6xl mx-auto w-full rounded-lg">
      <div className="border border-[#0E464F] rounded-3xl p-6 mt-10 mb-10 bg-[#052228]">
        <ProgressBar title="Ready" currentStep={3} totalSteps={3} />
        <div className="mt-5 text-center">
          <h1 className="font-Alatsi text-[32px]">Your Ticket is Booked!</h1>
          <p className="font-Roboto text-base">
            You can download or check your email for a copy ii
          </p>
        </div>

        {/* Ticket Card Component */}
        <TicketCard />
        <ButtonGroup
          onCancelClick={() => {}}
          onNextClick={() => {}}
          cancelText="Back"
          nextText="Download Ticket"
        />
      </div>
    </div>
  );
}

export default TicketReadypage;
