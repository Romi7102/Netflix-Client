import { USER_SIGNIN } from "./Actions";
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
    default:
      return state;
  }
};
