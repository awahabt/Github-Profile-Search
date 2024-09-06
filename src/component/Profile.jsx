import React, { useEffect, useState } from 'react'
import axios from "axios"
import { GoPeople } from "react-icons/go";
import { RiGitRepositoryLine } from "react-icons/ri";
import { IoLocationOutline } from "react-icons/io5";

const Profile = ({input}) => {
      const [data, setData] = useState("");
  
      useEffect(()=>{
          axios
          .get(`https://api.github.com/users/${input}`)
          .then((resp)=>
          setData(resp.data))
          .catch((error)=>console.log(`Error ${error}`));
      }, [input]);



  return (
    <div className="bor-gray w-full px-5 py-5 bg-[#010409] rounded-lg  ">
      <div className="flex gap-8  ">
        <div>
          <img src={data.avatar_url} alt="user-Image" className="bor-gray h-24 w-24 rounded-full" />
        </div>
        <div>
          <p className="font-bold text-2xl text-white text-wrap max-w-[250px]">{data.name}</p>
          <p className="text-gray-400 text-sm mb-4 ">@{data.login}</p>
          <p className="flex items-center gap-2 font-semibold text-white">
            <RiGitRepositoryLine />
            {data.public_repos}
          </p>
          <div className="flex items-center gap-2 text-white ">
            <GoPeople />
            <p>{data.following} following</p> <span> | </span>
            <p>{data.followers} followers</p>
          </div>
          <p className="flex items-center gap-2 text-gray-400  ">
            <IoLocationOutline /> {data.location}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
