import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTicket } from "../context/TicketContext";
import ProgressBar from "../components/progressbar";
import ImageUploader from "../components/ImageLoader";
import ButtonGroup from "../components/ButtonGroup";

const AttendeeDetailsPage = () => {
  const navigate = useNavigate();
  const { attendeeDetails, setAttendeeDetails, selectedTicket, imageUrl } =
    useTicket();
  const [errors, setErrors] = useState({});

  const handleBackButton = () => {
    navigate("/");
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validateName = (name) => name.trim().includes(" ");

  const handleTicketReady = () => {
    const newErrors = {};

    if (!attendeeDetails.name.trim()) {
      newErrors.name = "Name is required";
    } else if (!validateName(attendeeDetails.name)) {
      newErrors.name = "Please enter Your Fullname";
    }

    if (!attendeeDetails.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(attendeeDetails.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!attendeeDetails.projectDetails.trim()) {
      newErrors.projectDetails = "Project details are required";
    }

    if (!imageUrl) {
      newErrors.image = "Please select an image";
    }

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
    setErrors({ ...errors, [e.target.name]: "" });
  };

  return (
    <div className="flex md:max-w-6xl  mx-auto min-h-screen bg-[#041E23] text-[#FFFFFF] px-4 md:px-10">
      <div className="w-full border border-[#0E464F] rounded-lg p-4 md:p-6 lg:p-10 mt-10 mb-10 ">
        <ProgressBar title="Attendee Details" currentStep={2} totalSteps={3} />
        <div className="w-full bg-[#052228] border border-[#0E464F] rounded-3xl p-4 md:p-6 mt-6">
          <ImageUploader />
          {errors.image && (
            <p className="text-red-500 text-sm">{errors.image}</p>
          )}
          <form className="rounded-lg text-white space-y-4 w-full">
            <div>
              <label className="block text-sm mb-2">Enter your name</label>
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
                placeholder="hello@avioflagos.io"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>
            <div>
              <label className="block text-sm mb-2">About the project</label>
              <textarea
                name="projectDetails"
                value={attendeeDetails.projectDetails}
                onChange={handleInputChange}
                className={`w-full border rounded-xl h-[100px] px-3 py-2 ${
                  errors.projectDetails ? "border-red-500" : "border-[#0E464F]"
                }`}
                placeholder="Textarea"
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
