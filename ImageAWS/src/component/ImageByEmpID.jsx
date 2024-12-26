import axios from 'axios';
import React, { useState } from 'react'

function ImageByEmpID() {
  const [fileName, setFileName] = useState("");
  const [EmpId, setEmpId] = useState("");
  const [imageData, setImageData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (event) => {
    
    //console.log(event.target.value);
    setEmpId(event.target.value);
  };

  // Function to get file name using EmpId
  const getFileName = () => {
    if (EmpId) {
      axios.get(`http://localhost:8080/database/filebyempId/${EmpId}`)
        .then((res) => {
          //console.log(res.data);
          setFileName(res.data); 
        })
        .catch((err) => {
          setError("Failed to fetch file name. Please check your EmpId.");
          console.error("Error fetching file name:", err);
        });
    } else {
      setError("Please enter a valid EmpId.");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    setError(""); 

    // Ensure filename is not empty
    if (fileName) {
      axios
        .get(`http://localhost:8080/api/${fileName}`)
        .then((res) => {
          setImageData(res.data);
          setEmpId("");
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
      <h3 className="text-2xl font-semibold text-center mb-6">Get Image by Your EmpId</h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="text" className="block text-lg font-medium text-gray-700">Your EmpId</label>
          <input
            type="text"
            id="text"
            onChange={handleChange}
            value={EmpId}
            placeholder="Enter your Id "
            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        
        <div className="flex justify-between">
          <button
            type="button"
            onClick={getFileName}
            className="w-1/3 py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Get File
          </button>

          <button
            type="submit"
            disabled={loading}
            className={`w-1/3 py-2 px-4 rounded-md text-white font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'}`}
          >
            {loading ? "Loading..." : "Submit"}
          </button>
        </div>
      </form>
          {/* Display the fetched file name */}
      {fileName && (
        <div className="mt-6 text-center">
          <h4 className="text-lg font-semibold">File Name:</h4>
          <p className="mt-2 text-gray-700">{fileName}</p>
        </div>
      )}
      {error && <p className="mt-4 text-red-500 text-center">{error}</p>}
        

      {imageData && (
        <div className="mt-6 text-center">
          <h4 className="text-xl font-semibold">Your Image :</h4>
         
          <img
            src={imageData}
            alt="Fetched Image"
            className="mt-4 max-w-full h-auto rounded-lg shadow-md"
            style={{ width: "450px"  }}
          />
        </div>
      )}
    </div>
  );
}

export default ImageByEmpID
