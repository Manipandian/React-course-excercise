import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Search from "./component/Search"
import Countries from "./component/Countries";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filtered, setFiltered] = useState([]);
  let [selectCountry, setSelectedCountry] = useState(false);
  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      setCountries(response.data);
    });
  }, []);
  return(
    <div>
      <Search countries={countries} setFiltered={setFiltered} setSelectedCountry={setSelectedCountry}/>
       <Countries countriesList={filtered} selectCountry={selectCountry} setSelectedCountry={setSelectedCountry}/>
    </div>
  )
};

ReactDOM.render(<App />, document.getElementById("root"));
