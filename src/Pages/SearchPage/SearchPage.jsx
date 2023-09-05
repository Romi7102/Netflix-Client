import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import useSearch from "../../Hooks/useSearch";
import { useLocation } from "react-router-dom";
import axios from "axios";
import ContentCard from "../../Components/ContentCard/ContentCard";
import NetflixSpinner from "../../Components/NetflixSpinner/NetflixSpinner";

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const { search } = useLocation();
  console.log(search);
  const searchParams = new URLSearchParams(search);
  console.log(query);
  const { data, error, isLoading } = useSearch(query);

  useEffect(() => {
    setQuery(searchParams.get("q"));
  }, [search, searchParams]);

  return (
    <>
      <div className=" h-36"></div>
      {isLoading != true && <h1 className="text-white text-2xl mx-10 lg:mx-15">Showing search results for "{query}":</h1>}
      <div className="grid grid-cols-5 gap-2 mt-4 mx-10 lg:mx-16 relative">
        {isLoading ? (
          <NetflixSpinner/>
        ) : error ? (
          <h1>Error!!!</h1>
        ) : data && (
          data.contents.map((c) => <ContentCard key={c._id} content={c}></ContentCard>)
        )}
      </div>
    </>
  );
};

export default SearchPage;
