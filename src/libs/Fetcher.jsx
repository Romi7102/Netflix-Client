import axios from "axios";

export const getHeaders = () => {
  const userInfo = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;
  const headers = userInfo && { headers: { authorization: userInfo.token } };
  return headers;
};

const fetcher = async (url) => {
  try{
    const headers = getHeaders();
    const res = await axios.get(url,headers);
    return res.data
  }catch(err){
    console.log(err);
  }

};

export default fetcher;
