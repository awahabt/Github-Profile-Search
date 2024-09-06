import React from 'react'
import { FaGithub } from "react-icons/fa";


const Navbar = () => {
  return (
    <div className=" flex items-center gap-2">
      <FaGithub className="h-6 w-6 text-white"/>
      <p className="text-2xl font-bold flex items-center gap-2 text-white">Github <span className="text-gray-400 font-normal text-sm"> | Search by Username</span></p>
    </div>
  )
}

export default Navbar
