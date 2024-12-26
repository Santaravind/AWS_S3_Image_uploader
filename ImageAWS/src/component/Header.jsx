import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header class="bg-gray-800 text-white">
  <nav class="container mx-auto flex items-center justify-between p-4">
  
    <div class="flex items-center">
      <a href="#" class="flex items-center space-x-2 text-xl font-semibold">
        <img
          src= ""
          alt="Logo"
          class="h-8 w-20"
        />
        {/* <span>Galas IT Solutions</span> */}
      </a>
    </div>

  
     <div class="hidden space-x-6 md:flex">
       <Link to="/" class="hover:text-indigo-400">ImageUpload</Link>
      <Link to="/ImageByName" class="hover:text-indigo-400">FintImage</Link>
      <Link to="/ImageByEmpID" class="hover:text-indigo-400">yourImage</Link>
      <Link to="/hr" class="hover:text-indigo-400">HR</Link>
      <Link to="/getdata" class="hover:text-indigo-400">All Users </Link>
      <Link to="/calendar" class="hover:text-indigo-400">Calendar</Link> 
      <a href="#" class="hover:text-indigo-400">Meeting</a>
      <a href="#" class="hover:text-indigo-400">Document</a> 
     
      
      </div>

      </nav> 
      
   

    
    
     
    
    </header>
  )
}

export default Header
