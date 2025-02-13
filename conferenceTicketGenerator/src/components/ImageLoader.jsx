import React, { useState } from "react";
import { MdCloudUpload } from "react-icons/md";
import { useTicket } from "../context/TicketContext";

const ImageUploader = () => {
  const { imageUrl, uploading, imageError, successMessage, handleImageUpload } =
    useTicket();
  const [isDragging, setIsDragging] = useState(false); // State to track drag-over

  const handleFileChange = (file) => {
    if (file) {
      handleImageUpload(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0]; // Get the dropped file
    handleFileChange(file);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="w-full border border-[#0E464F] rounded-xl p-4 mt-5">
        <p className="font-roboto text-base">Upload Profile Photo</p>

        <label
          htmlFor="imageUpload"
          className={`w-full h-55 p-4 mt-5 text-center relative flex justify-center items-center rounded-2xl cursor-pointer bg-[#041E23] ${
            isDragging ? "border-2 border-dashed border-blue-500" : ""
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <input
            id="imageUpload"
            type="file"
            className="hidden"
            accept="image/*"
            onChange={(e) => handleFileChange(e.target.files[0])}
          />

          <div className="w-42 h-full p-4 bg-[#0E464F] text-[#FFFFFF] rounded-3xl flex justify-center items-center">
            {uploading ? (
              <p>Uploading...</p>
            ) : imageUrl ? (
              <img
                src={imageUrl}
                alt="Uploaded"
                className="w-full h-full object-cover rounded-2xl"
              />
            ) : (
              <div>
                <MdCloudUpload className="w-35 h-10" />
                <p>Drag & drop or click to upload</p>
              </div>
            )}
          </div>
        </label>

        {imageUrl && (
          <p className="mt-2 text-blue-500 text-sm break-all">
            Image URL:{" "}
            <a
              href={imageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              {imageUrl}
            </a>
          </p>
        )}

        {successMessage && (
          <p className="mt-2 text-green-500 text-sm">{successMessage}</p>
        )}
        {imageError && (
          <p className="mt-2 text-red-500 text-sm">{imageError}</p>
        )}
      </div>
    </div>
  );
};

export default ImageUploader;
