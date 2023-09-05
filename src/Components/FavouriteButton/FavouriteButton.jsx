import React, { useEffect, useState, useContext } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { Store } from "../../Context/StoreProvider";
import {
  ADD_TO_FAVOURITES,
  REMOVE_FROM_FAVOURITES,
} from "../../Reducers/Actions";
import { getHeaders } from "../../libs/Fetcher";
import axios from "axios";

const FavouriteButton = ({ content }) => {
  const [isFavourite, setIsFavourite] = useState(false)
  const { state, dispatch : ctxDispatch } = useContext(Store);
  const { userInfo } = state;
  const userList  = userInfo ? userInfo.userList : []
  const idList = userList.map(item => item._id);

  const HandleFavourite = async () => {
      const headers = getHeaders();
    try{
        const res = await axios.post('/users/list' , { content : content._id} , headers)
        if(isFavourite){
            await ctxDispatch({type: REMOVE_FROM_FAVOURITES, payload: content})
            setIsFavourite(false);
        }else{
            await ctxDispatch({type: ADD_TO_FAVOURITES, payload: content})
            setIsFavourite(true);
        }

    }catch(err){
        console.log(err);
    }
  };

  useEffect(()=>{
    if(idList.includes(content._id)){
        setIsFavourite(true);
    }else{
        setIsFavourite(false);
    }
  }, [state , userInfo, userList])

  return (
    <div className="cursor-pointer group/item w-6 h-6 lg:w-8 lg:h-8 border-white border-2 rounded-full flex justify-center items-center transition hover:border-neutral-300 ml-2 bg-white hover:bg-neutral-300 text-black gap-3"
    onClick={HandleFavourite}>
      {isFavourite ? (<AiOutlineMinus size={30}/>) : (<AiOutlinePlus size={30}/>) }
    </div>
  );
};

export default FavouriteButton;