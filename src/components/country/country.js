import React from 'react';
import {Link} from 'react-router-dom';
//import CountryDetail from '../CountryDetail/CountryDetail';

const country = (props) => {

    //console.log(props);
    const {name,flag}=props.country;
    const flagStyle={height:'50px'}
    const countryStyle={ border: '3px solid gray',margin: '10px',padding:'10px'}
    //console.log(props);
    const handleAddCountry= props.handleAddCountry;
    return (
        <div style={countryStyle}>
            <h4>Name:{name}</h4>
            <img style={flagStyle} src={flag} alt=""/>
            <h6><Link to={`/country/${name}`}>
                <button>Show Detail of:{name}</button>
                </Link></h6>
            <button onClick={() =>handleAddCountry(props.country)}>Add Country</button>
            
        </div>
    );
};

export default country;