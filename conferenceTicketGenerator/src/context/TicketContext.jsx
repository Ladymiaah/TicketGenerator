// import { createContext, useContext, useState, useEffect } from "react";

// const TicketContext = createContext();

// export const TicketProvider = ({ children }) => {
//   // Load all data from localStorage on initial render
//   const [selectedTicket, setSelectedTicket] = useState(() => {
//     const savedTicket = localStorage.getItem("selectedTicket");
//     return savedTicket ? JSON.parse(savedTicket) : null;
//   });

//   const [ticketCount, setTicketCount] = useState(() => {
//     const savedCount = localStorage.getItem("ticketCount");
//     return savedCount ? Number(savedCount) : 1;
//   });

//   const [attendeeDetails, setAttendeeDetails] = useState(() => {
//     const savedAttendeeDetails = localStorage.getItem("attendeeDetails");
//     return savedAttendeeDetails
//       ? JSON.parse(savedAttendeeDetails)
//       : {
//           name: "",
//           email: "",
//           projectDetails: "",
//         };
//   });

//   const [imageUrl, setImageUrl] = useState(() => {
//     const savedImageUrl = localStorage.getItem("imageUrl");
//     return savedImageUrl || null;
//   });

//   const [uploading, setUploading] = useState(false);
//   const [imageError, setImageError] = useState(null);
//   const [successMessage, setSuccessMessage] = useState(null);

//   // Save selectedTicket and ticketCount to localStorage
//   useEffect(() => {
//     if (selectedTicket) {
//       localStorage.setItem("selectedTicket", JSON.stringify(selectedTicket));
//       localStorage.setItem("ticketCount", ticketCount.toString());
//     }
//   }, [selectedTicket, ticketCount]);

//   // Save attendeeDetails to localStorage
//   useEffect(() => {
//     localStorage.setItem("attendeeDetails", JSON.stringify(attendeeDetails));
//   }, [attendeeDetails]);

//   // Save imageUrl to localStorage
//   useEffect(() => {
//     if (imageUrl) {
//       localStorage.setItem("imageUrl", imageUrl);
//     } else {
//       localStorage.removeItem("imageUrl");
//     }
//   }, [imageUrl]);

//   // Reset all data
//   const resetSelection = () => {
//     setSelectedTicket(null);
//     setTicketCount(1);
//     setAttendeeDetails({
//       name: "",
//       email: "",
//       projectDetails: "",
//     });
//     setImageUrl(null);
//     localStorage.removeItem("selectedTicket");
//     localStorage.removeItem("ticketCount");
//     localStorage.removeItem("attendeeDetails");
//     localStorage.removeItem("imageUrl");
//   };

//   // Handle Image Upload
//   const handleImageUpload = async (file) => {
//     if (!file) {
//       setImageError("Please upload an image.");
//       return;
//     }

//     setUploading(true);
//     setImageError(null);
//     setSuccessMessage(null);

//     const formData = new FormData();
//     formData.append("file", file);
//     formData.append("upload_preset", "avatar_upload_preset");
//     formData.append("cloud_name", "dhtu0gngr");

//     try {
//       const response = await fetch(
//         "https://api.cloudinary.com/v1_1/dhtu0gngr/image/upload",
//         {
//           method: "POST",
//           body: formData,
//         }
//       );

//       if (!response.ok) {
//         throw new Error("Upload failed. Please try again.");
//       }

//       const data = await response.json();
//       setImageUrl(data.secure_url);
//       setSuccessMessage("Image uploaded successfully!");
//     } catch (error) {
//       setImageError("Upload failed. Please try again.");
//     } finally {
//       setUploading(false);
//     }
//   };

//   return (
//     <TicketContext.Provider
//       value={{
//         selectedTicket,
//         ticketCount,
//         setSelectedTicket,
//         setTicketCount,
//         resetSelection,
//         attendeeDetails,
//         setAttendeeDetails,
//         imageUrl,
//         uploading,
//         imageError,
//         successMessage,
//         handleImageUpload,
//       }}
//     >
//       {children}
//     </TicketContext.Provider>
//   );
// };

// export const useTicket = () => {
//   return useContext(TicketContext);
// };

import { createContext, useContext, useState, useEffect } from "react";

const TicketContext = createContext();

export const TicketProvider = ({ children }) => {
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [ticketCount, setTicketCount] = useState(1);
  const [attendeeDetails, setAttendeeDetails] = useState({
    name: "",
    email: "",
    projectDetails: "",
  });

  // Image Upload State
  const [imageUrl, setImageUrl] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [imageError, setImageError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  // Load ticket details from localStorage
  useEffect(() => {
    const savedTicket = localStorage.getItem("selectedTicket");
    const savedCount = localStorage.getItem("ticketCount");

    if (savedTicket) {
      setSelectedTicket(JSON.parse(savedTicket));
      setTicketCount(Number(savedCount) || 1);
    }
  }, []);

  // Save ticket details to localStorage
  useEffect(() => {
    if (selectedTicket) {
      localStorage.setItem("selectedTicket", JSON.stringify(selectedTicket));
      localStorage.setItem("ticketCount", ticketCount.toString());
    }
  }, [selectedTicket, ticketCount]);

  // Select Ticket
  const selectTicket = (ticket) => {
    setSelectedTicket(ticket);
    setTicketCount(1);
  };

  // Update Ticket Count
  const updateTicketCount = (count) => {
    setTicketCount(count);
  };

  // Reset Selection
  const resetSelection = () => {
    setSelectedTicket(null);
    setTicketCount(1);
    localStorage.removeItem("selectedTicket");
    localStorage.removeItem("ticketCount");
  };

  // Handle Image Upload
  const handleImageUpload = async (file) => {
    if (!file) {
      setImageError("Please upload an image.");
      return;
    }

    setUploading(true);
    setImageError(null);
    setSuccessMessage(null);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "avatar_upload_preset");
    formData.append("cloud_name", "dhtu0gngr");

    try {
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/dhtu0gngr/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Upload failed. Please try again.");
      }

      const data = await response.json();
      setImageUrl(data.secure_url);
      setSuccessMessage("Image uploaded successfully!");
    } catch (error) {
      setImageError("Upload failed. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <TicketContext.Provider
      value={{
        selectedTicket,
        ticketCount,
        selectTicket,
        updateTicketCount,
        resetSelection,
        attendeeDetails,
        setAttendeeDetails,
        imageUrl,
        uploading,
        imageError,
        successMessage,
        handleImageUpload,
      }}
    >
      {children}
    </TicketContext.Provider>
  );
};

export const useTicket = () => {
  return useContext(TicketContext);
};
