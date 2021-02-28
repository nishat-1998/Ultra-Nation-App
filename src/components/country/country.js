import React from 'react';

const country = (props) => {

    //console.log(props);
    const {name,population,region,flag}=props.country;
    const flagStyle={height:'50px'}
    const countryStyle={ border: '3px solid gray',margin: '10px',padding:'10px'}
    //console.log(props);
    const handleAddCountry= props.handleAddCountry;
    return (
        <div style={countryStyle}>
            <h4>Name:{name}</h4>
            <img style={flagStyle} src={flag} alt=""/>
            <p>Population:{population}</p>
            <p><small>Region:{region}</small></p>
            <button onClick={() =>handleAddCountry(props.country)}>Add Country</button>
        </div>
    );
};

export default country;