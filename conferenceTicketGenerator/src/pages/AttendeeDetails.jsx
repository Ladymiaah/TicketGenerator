import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTicket } from "../context/TicketContext"; // Import context
import ProgressBar from "../components/progressbar";
import ImageUploader from "../components/ImageLoader";
import ButtonGroup from "../components/button_group";

const AttendeeDetailsPage = () => {
  const navigate = useNavigate();
  const { attendeeDetails, setAttendeeDetails, selectedTicket, imageUrl } =
    useTicket();
  const [errors, setErrors] = useState({});

  const handleBackButton = () => {
    navigate("/");
  };

  const handleTicketReady = () => {
    const newErrors = {};

    if (!attendeeDetails.name.trim()) newErrors.name = "Name is required";
    if (!attendeeDetails.email.trim()) newErrors.email = "Email is required";
    if (!attendeeDetails.projectDetails.trim())
      newErrors.projectDetails = "Project details are required";
    if (!imageUrl) newErrors.image = "Please select an image"; // Check if image is selected

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    navigate("/TicketReady");
  };

  const getButtonText = () => {
    if (!selectedTicket) return "Get A Ticket";
    return selectedTicket.type === "REGULAR ACCESS"
      ? "Get My Free Ticket"
      : `Get My ${selectedTicket.type}`;
  };

  const handleInputChange = (e) => {
    setAttendeeDetails({ ...attendeeDetails, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Clear error when user types
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#041E23] text-[#FFFFFF]">
      <div className="w-170 border border-[#0E464F] rounded-3xl p-6 mt-10 mb-10">
        <ProgressBar title="Attendee Details" currentStep={2} totalSteps={3} />
        <div className="w-155 bg-[#052228] border border-[#0E464F] rounded-3xl p-6 mt-10 mb-10">
          <ImageUploader />
          {/* Image Upload Error Message */}
          {errors.image && (
            <p className="text-red-500 text-sm">{errors.image}</p>
          )}

          <form className="rounded-lg text-white space-y-4 w-full max-w-lg">
            {/* Name Input */}
            <div>
              <label className="block text-sm mb-2 mt-5">Enter your name</label>
              <input
                type="text"
                name="name"
                value={attendeeDetails.name}
                onChange={handleInputChange}
                className={`w-full border rounded-xl h-[40px] px-3 ${
                  errors.name ? "border-red-500" : "border-[#0E464F]"
                }`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-sm mb-2">Enter your email *</label>
              <input
                type="email"
                name="email"
                value={attendeeDetails.email}
                onChange={handleInputChange}
                className={`w-full border rounded-xl h-[40px] px-3 ${
                  errors.email ? "border-red-500" : "border-[#0E464F]"
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>

            {/* Project Details Textarea */}
            <div>
              <label className="block text-sm mb-2">About the project</label>
              <textarea
                name="projectDetails"
                value={attendeeDetails.projectDetails}
                onChange={handleInputChange}
                className={`w-full border rounded-xl h-[100px] px-3 py-2 ${
                  errors.projectDetails ? "border-red-500" : "border-[#0E464F]"
                }`}
              />
              {errors.projectDetails && (
                <p className="text-red-500 text-sm">{errors.projectDetails}</p>
              )}
            </div>
          </form>

          <ButtonGroup
            onCancelClick={handleBackButton}
            onNextClick={handleTicketReady}
            cancelText="Back"
            nextText={getButtonText()}
          />
        </div>
      </div>
    </div>
  );
};

export default AttendeeDetailsPage;
