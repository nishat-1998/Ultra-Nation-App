import React ,{useEffect,useState}from 'react';
import {useParams} from 'react-router-dom';
const CountryDetail = () => {
    const {countryName}= useParams() ;  
    const [country,setCountry]=useState({});
    console.log(country);

    useEffect(() =>{
      const url =`https://restcountries.eu/rest/v2/name/${countryName}`;
fetch(url)
.then(res=> res.json())
.then(data => setCountry(data[0]));
    }, [])
    return (
        <div>
          <p>Country Detail: {countryName}</p> 
          <h2>{country.name}</h2>
          <h4>Capital:{country.capital}</h4>
          <h5>Region: {country.region}</h5>
          <h5>Area: {country.area}</h5> 
          <p>Population:{country.population}</p>
          <p><small>TimeZone:{country.timezones}</small></p>
          
        </div>
    );
};

export default CountryDetail;