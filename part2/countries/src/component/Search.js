import React from "react";

const Search = (props) => {
  const searchCountries = (event) => {
    const countryList = [];
    props.countries.forEach((country) => {
      if (country.name.indexOf(event.target.value) !== -1) {
        countryList.push(country);
      }
    });
    props.setFiltered(countryList);
    props.setSelectedCountry(false);
  };

  return (
    <div>
      Find countries:
      <input onChange={searchCountries}></input>
    </div>
  );
};

export default Search;
