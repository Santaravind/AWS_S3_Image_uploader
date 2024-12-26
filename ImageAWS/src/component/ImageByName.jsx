import React, { useState } from "react";
import axios from "axios";

function ImageByName() {
  const [fileName, setFileName] = useState("");
  const [imageData, setImageData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (event) => {
    setFileName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    setError(""); // Clear previous error

    // Ensure filename is not empty
    if (fileName) {
      axios
        .get(`http://localhost:8080/api/${fileName}`)
        .then((res) => {
          setImageData(res.data);
        })
        .catch((err) => {
          setError("Failed to fetch the image. Please check the file name.");
          console.error("Error fetching image data:", err);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setError("File name cannot be empty.");
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-8">
      <h3 className="text-2xl font-semibold text-center mb-6">Get Image by FileName</h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="text" className="block text-lg font-medium text-gray-700">File Name</label>
          <input
            type="text"
            id="text"
            onChange={handleChange}
            value={fileName}
            placeholder="Enter your fileNname"
            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 px-4 rounded-md text-white font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'}`}
          >
            {loading ? "Loading..." : "Submit"}
          </button>
        </div>
      </form>

      {error && <p className="mt-4 text-red-500 text-center">{error}</p>}

      {imageData && (
        <div className="mt-6 text-center">
          <h4 className="text-xl font-semibold">Your Image :</h4>
         
          <img
            src={imageData}
            alt="Fetched Image"
            className="mt-4 max-w-full h-auto rounded-lg shadow-md"
            style={{ width: "550px"  }}
          />
        </div>
      )}
    </div>
  );
}

export default ImageByName;
