import React, { useState } from 'react'
import axiox from 'axios'
import axios from 'axios';
import AllImage from './AllImage';
function ImageUploader() {
    const [selectedFile, setselectedFile] = useState(null);
    const [files, setfiles] = useState([]);
    const [messageStatus, setmessageStatus] = useState(false);
    const [uploading, setuploading] = useState(false);


    const [uploadedSrc, setuploadedSrc] = useState("");

    const handalonchange=(event)=>{
    const file=event.target.files[0];

    console.log(file);

    if (file.type==='image/png'||file.type==='image/jpeg'||file.type==='') {
        setselectedFile(file);
        }else{
            alert("Select only image !!!")
            setselectedFile(null);
        }
   
    };
 
    const formSubmit=(event)=>{
        event.preventDefault();

        if (selectedFile) {
            //image upload
            uplploadImageToServer();   

        } else {
            alert("Select image first!!");   
        }

    };

    //function to upload image to server 

    const uplploadImageToServer=()=>
    {
        const URL='http://localhost:8080/api/upload'
        const formData = new FormData();

        formData.append("file", selectedFile);

        axios.post(URL,formData)  
            .then((res)=>{console.log(res.data)
            setuploadedSrc(res.data);
           // messageStatus(true);
        })
            .catch().finally(
               // setmessageStatus(false),
                setuploading(false)
            );

    }

  return (
    <div className='main flex justify-center '>
        <div className='rounded-md   w-1/3 p-4 m-4 border bg-gray-200'>
        <h1  className='text-3xl'>Image Uploader</h1>
        <div className='form_container mt-3 '>

            <form action="file" onSubmit={formSubmit}>
              <div className='flex flex-col gap-y-2'>
                <label htmlFor="file"> Select image</label>
                <input onChange={handalonchange} type="file" id='file' />
              </div>
             <div className='flex justify-end '>
                <button type='submit' className='border m-2 p-2 rounded-lg  text-white  hover:text-red-500 hover:bg-yellow-100 bg-blue-600 '>Upload</button>
                <button type='reset' className='border m-2 p-3 rounded-lg  text-white  hover:text-red-500 hover:bg-yellow-100 bg-red-600 '>Clear</button>
             </div>
            </form>
            </div>
            {/* {uploaded image view} */}

           
           <div className='uploaded_view '>
                <img  className='h-[300px] mt-4 rounded shadow ' src={uploadedSrc} alt="" />
            </div>
            <div className=''>
            </div>
           

        </div>
        <AllImage/> 
    </div>
  )
}

export default ImageUploader
