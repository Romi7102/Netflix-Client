import axios from "axios";

const { token } = JSON.parse(localStorage.getItem("userInfo"));
const headers = { headers: { authorization: token } };

const fetcher = (url) => axios.get(url, headers).then((res) => res.data);

export default fetcher;
