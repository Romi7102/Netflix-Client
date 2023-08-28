import useSWR from "swr";
import fetcher from "../libs/Fetcher";

const useBillboard = (type) => {
  const { data, error, isLoading } = useSWR("/content/" + type, fetcher, {
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
