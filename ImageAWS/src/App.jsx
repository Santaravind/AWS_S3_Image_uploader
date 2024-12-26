import { Route, Router, Routes } from "react-router-dom"
import Header from "./component/Header"
import ImageByName from "./component/ImageByName"
import ImageUploader from "./component/ImageUploader"
import ImageByEmpID from "./component/ImageByEmpID"



function App() {
  

  return (
    <>

<Header/>
<Routes>
  
  <Route path="/" element={<ImageUploader/>} />
  <Route path="/ImageByName" element={<ImageByName/>} />
  <Route path="/ImageByEmpID" element={<ImageByEmpID/>} />


 
  </Routes>
   
   

   
    

    </>
  )
}

export default App
