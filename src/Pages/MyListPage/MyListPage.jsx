import React, { useContext, useEffect } from "react";
import { Store } from "../../Context/StoreProvider";
import ContentCard from "../../Components/ContentCard/ContentCard";
import { useNavigate } from "react-router-dom";

const MyListPage = () => {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;
  const userList  = userInfo ? userInfo.userList : [];
  console.log(userList);
  const navigate = useNavigate()

  useEffect(()=>{
    console.log('useEffect');
    if(!userInfo){
      navigate('/login');
    }
  }, [state]);

  return (
    <>
      <div className=" h-32"></div>
      <h1 className="text-white text-2xl mx-10 lg:mx-15" >My List</h1>
      <div className="grid grid-cols-5 gap-2 mt-4 mx-10 lg:mx-16 relative">
        {userList.length > 0 ? userList?.map((c) => <ContentCard key={c._id} content={c}></ContentCard>) : (<p className="text-white text-xl col-span-5">Add Series and Movies to your list in order to see them here :)</p>)}
      </div>
    </>
  );
};

export default MyListPage;
