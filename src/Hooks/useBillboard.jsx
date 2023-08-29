import useSWR from "swr";
import fetcher from "../libs/Fetcher";

const useBillboard = (type = "all") => {
  const { data, error, isLoading } = useSWR("/content/random/" + type, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false
  });
  
  return {
    data,
    error,
    isLoading,
  };
};

export default useBillboard;
