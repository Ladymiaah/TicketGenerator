import { MdCloudUpload } from "react-icons/md";
import { useTicket } from "../context/TicketContext";

const ImageUploader = () => {
  const { imageUrl, uploading, imageError, successMessage, handleImageUpload } =
    useTicket();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      handleImageUpload(file);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="w-full border border-[#0E464F] rounded-xl p-4 mt-5">
        <p className="font-roboto text-base">Upload Profile Photo</p>

        <label
          htmlFor="imageUpload"
          className="w-full h-55 p-4 mt-5 text-center relative flex justify-center items-center rounded-2xl cursor-pointer bg-[#041E23]"
        >
          <input
            id="imageUpload"
            type="file"
            className="hidden"
            accept="image/*"
            onChange={handleFileChange}
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
