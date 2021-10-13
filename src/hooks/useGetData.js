import { useEffect, useState } from "react";

const useGetData = () => {
  const [apiData, setApiData] = useState();
  const API_KEY = "c48b971c93f7ed823b8e64202099d72e";
  //   const url = `https://api.darksky.net/forecast/${API_KEY}/27.933136599999997,30.819937799999998`;
  useEffect(() => {
    const fetchData = async () => {
      await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=London&appid=${API_KEY}`
      )
        .then((response) => response.json())
        .then((data) => setApiData(data));
    };
    if (true) {
      fetchData();
    }
  }, []);
  return {
    apiData,
  };
};

export default useGetData;
