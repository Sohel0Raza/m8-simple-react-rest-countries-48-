import React from 'react';
import './Country.css'
const Country = (props) => {
    const {area, population, capital, name, flags, region} = props.country;
    return (
        <div className='country'>
            <img src={flags.png} alt="" />
            <h3>Country Name: {name.common}</h3>
            <h5>Capital Name: {capital}</h5>
            <p>Total Population: {population} </p>
            <p>Region: {region}</p>
            <p><small>Area: {area}</small></p>
        </div>
    );
};

export default Country;