import "./App.css";
import Country from "./components/CountryContainer";
import "tailwindcss/tailwind.css";
import { useConvertKtoC } from "./helpers/kToC";
import useGetData from "./hooks/useGetData";
const cities = require("./helpers/cities.json");

function App() {
  const { apiData } = useGetData();
  const currentCity = cities.find(
    (city) => city.name.toLowerCase() === apiData?.name.toLowerCase()
  );
  console.log(currentCity);
  console.log(cities);
  console.log(apiData);
  let unix_timestamp = apiData?.dt;

  const date = new Date(unix_timestamp * 1000);
  const hours = date.getHours();
  const minutes = "0" + date.getMinutes();
  const seconds = "0" + date.getSeconds();

  // Will display time in 10:30:23 format
  const formattedTime =
    hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);
  const mainTemp = useConvertKtoC(apiData?.main?.temp);
  const minTemp = useConvertKtoC(apiData?.main?.temp_min);
  const maxTemp = useConvertKtoC(apiData?.main?.temp_max);
  const feelsLike = useConvertKtoC(apiData?.main?.feels_like);

  console.log(formattedTime);
  return (
    <div className="flex flex-wrap flex-col">
      <span className="flex w-96 h-[50px]">
        <img
          src={`https://www.countryflags.io/${apiData?.sys?.country}/shiny/64.png`}
          alt="test"
          className="object-cover"
        />
      </span>
      <Country countryName={apiData?.name} />
      <span>
        Cloudiness {apiData?.clouds?.all}%{" "}
        <img
          src={`http://openweathermap.org/img/wn/${apiData?.weather[0].icon}@2x.png`}
          alt="clouds"
        />
      </span>
      <span className="text-white">measurement time {formattedTime}</span>
      <span className="text-white">main temp {mainTemp}</span>
    </div>
  );
}

export default App;
