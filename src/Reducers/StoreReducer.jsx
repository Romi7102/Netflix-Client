import { USER_SIGNIN , USER_SIGNOUT, ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES } from "./Actions";
import axios from "axios";

export const StoreReducer = (state, { type, payload }) => {
  switch (type) {
    case USER_SIGNIN: {
      localStorage.setItem("userInfo", JSON.stringify(payload));
      return { ...state, userInfo: payload };
    }

    case USER_SIGNOUT: {
      localStorage.removeItem("userInfo");
      return { ...state, userInfo: null };
    }
    
    case ADD_TO_FAVOURITES:{
      const { userInfo } = state;
      const { userList } = userInfo;

      const newList = [...userList , payload]
      localStorage.setItem("userInfo", JSON.stringify({...userInfo , userList: newList}));
      return { ...state, userInfo: {...userInfo , userList: newList} };
    }
    
    case REMOVE_FROM_FAVOURITES:{
      const newList = state.userInfo.userList.filter(c => c._id != payload._id);
      const newUserInfo = {...state.userInfo , userList: newList}
      console.log(newUserInfo);
      localStorage.setItem("userInfo", JSON.stringify(newUserInfo));
      return { ...state, userInfo: newUserInfo };
    }
    default:
      return state;
  }
};
