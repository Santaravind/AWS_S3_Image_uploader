import axios from 'axios';
import React, { useEffect, useState } from 'react';

function AllImage() {
    const [files, setFiles] = useState([]);

    useEffect(() => {
        getAllImages();
    }, []);

    const getAllImages = () => {
        axios.get('http://localhost:8080/api/getall')
            .then((res) => {
                console.log(res.data);
                setFiles(res.data);
            })
            .catch((err) => {
                console.error("Error fetching images:", err);
            });
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-2xl font-bold mb-6 text-center">Image Gallery</h1>
            <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {files.map((img, index) => (
                    <div 
                        key={index} 
                        className="group relative w-72 h-72 bg-white rounded-lg shadow-lg overflow-hidden border border-gray-300"
                    >
                        <img 
                            src={img} 
                            alt={`Uploaded-${index}`} 
                            className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                        />
                       
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AllImage;
