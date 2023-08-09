import React from "react";
import avatar from "../../assets/avatar.png";

const AccountMenu = ({ visible }) => {
  if (!visible) return null;
  return (
    <div className="bg-black w-56 absolute top-14 right-0 py-5 flex-col border-2 broder-gray-800 flex">
      <div className="flex flex-col gap-3">
        <div className="px-3 group/item flex flex-row gap-3 items-center w-full">
          <img className="w-8 rounded-md" src={avatar} />
          <p className=" text-white text-sm group-hover/item:underline">
            Romi Landau
          </p>
        </div>
        <hr className="bg-gray-600 border-0 h-px my-4"/>
        <div onClick={()=>null} className="px-3 text-center text-white text-sm hover:underline"> 
        {/* //! implement */}
            Sign out of netflix
        </div>
      </div>
    </div>
  );
};

export default AccountMenu;
