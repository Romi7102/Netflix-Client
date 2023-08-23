import React, { useContext } from "react";
import avatar from "../../assets/avatar.png";
import { useNavigate } from "react-router-dom";
import { Store } from "../../Context/StoreProvider";
import { USER_SIGNOUT } from "../../Reducers/Actions";

const AccountMenu = ({ visible }) => {
  if (!visible) return null;
  const navigate = useNavigate();
  const { state , dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;

  const signOutHandler = async () => {
    await ctxDispatch({type: USER_SIGNOUT})
    navigate('/login');
  };
  return (
    <div className="bg-black w-56 absolute top-14 right-0 py-5 flex-col border-2 broder-gray-800 flex">
      <div className="flex flex-col gap-3">
        <div className="px-3 group/item flex flex-row gap-3 items-center w-full">
          <img className="w-8 rounded-md" src={avatar} />
          <p className=" text-white text-sm group-hover/item:underline">
            {userInfo.username}
          </p>
        </div>
        <hr className="bg-gray-600 border-0 h-px my-4" />
        <div
          onClick={signOutHandler}
          className="px-3 text-center text-white text-sm hover:underline"
        >
          Sign out of netflix
        </div>
      </div>
    </div>
  );
};

export default AccountMenu;
