import useSWR from "swr";
import fetcher from "../libs/Fetcher";

const useFeaturedContent = (type = "") => {
  const { data, error, isLoading } = useSWR("/content/featured/" + type , fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  return {
    data,
    error,
    isLoading,
  };
};

export default useFeaturedContent;
