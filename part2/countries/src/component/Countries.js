import React, {useState, useEffect} from "react";
import axios from "axios";


const WeatherSpec = (props) => {
    const isEmpty = (obj) => {
        let name;
        for(name in obj) { return false}
        return true;
    }

    if ( !(isEmpty(props.weatherData)) ) {
    return (
        <div>
        <div>Temparature: {props.weatherData.current.temperature}</div>
        <div><img src={props.weatherData.current.weather_icons[0]} alt="weather icon"/></div>
        <div>Wind speed {props.weatherData.current.wind_speed} mph direction {props.weatherData.current.wind_dir}</div>
        </div>
    )
    } else {
        return <div>Data Not Available</div>
    }
}


const CountrySpec = (props) => {
    const [weatherData, setWeatherData] = useState({});


    useEffect( () => {
        axios.get("http://api.weatherstack.com/current?access_key=" + process.env.REACT_APP_WEATHER_API_KEY + "&query=" + props.countryData.capital).then( (response) => {
            console.log(process.env.REACT_APP_WEATHER_API_KEY);
            console.log(response.data);
            setWeatherData(response.data);
        })
     }, [props.countryData.capital, setWeatherData])
    return (
        <div>
            <h2>{props.countryData.name}</h2>
            <br/>
            <div>Capital {props.countryData.capital}</div>
            <div>Population {props.countryData.population}</div>
            <br/>
            <h2>Languages</h2>
            {
                props.countryData.languages.map( (language, index) => (
                <div key={index}>{language.name}</div>
                ))
            }
            <br/>
            <img src={props.countryData.flag} alt="flag" height="42" width="42"/>
            <br/>
            <div>Weather in {props.countryData.capital}</div>
                <WeatherSpec weatherData={weatherData}/>
            </div>
    )
}

const Countries = (props) => {
    const [countryDatas, setCountryData] = useState({});
    const chooseCountry = (country) => {
       props.setSelectedCountry(true);
       setCountryData(country)
    }

    if (props.countriesList.length >= 10) {
        return <div>Too many matches , specify another filter</div>
    } else if (props.countriesList.length === 1 || props.selectCountry) {
        let countryData = props.countriesList[0];
        countryData = props.selectCountry ? countryDatas : props.countriesList[0];
        return <CountrySpec countryData={countryData}/>
    } else {
        return (
                <div>
                {
                    props.countriesList.map( (country) => { 
                        return (
                            <div key={country.name}>{country.name}  <button onClick={chooseCountry.bind(null, country)} >Select</button></div>
                        )
                    })  
                }
                </div>
            )
        } 
}

export default Countries;