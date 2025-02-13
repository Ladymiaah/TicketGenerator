import ProgressBar from "../components/progressbar";

import TicketCard from "../components/TicketCard"; // Import TicketCard
import ButtonGroup from "../components/ButtonGroup";
import { useNavigate } from "react-router-dom";

function TicketReadypage() {
  const navigate = useNavigate();

  const handleBackButton = () => {
    navigate("/");
    window.location.reload();
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#041E23] text-[#FFFFFF] md:max-w-3xl mx-auto w-full rounded-lg">
      <div className="border border-[#0E464F] rounded-3xl p-6 mt-10 mb-10 bg-[#052228] ">
        <ProgressBar title="Ready" currentStep={3} totalSteps={3} />
        <div className="mt-5 text-center">
          <h1 className="font-Alatsi text-[32px]">Your Ticket is Booked!</h1>
          <p className="font-Roboto text-base">
            You can download or check your email for a copy
          </p>
        </div>

        {/* Ticket Card Component */}
        <TicketCard />
        <ButtonGroup
          onCancelClick={handleBackButton}
          onNextClick={() => {}}
          cancelText="Book Another Ticket"
          nextText="Download Ticket"
        />
      </div>
    </div>
  );
}

export default TicketReadypage;
