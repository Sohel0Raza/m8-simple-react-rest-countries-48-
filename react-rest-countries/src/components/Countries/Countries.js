import React, { useEffect, useState } from 'react';
import './Countries.css'
import Country from '../Country/Country';
function Countries() {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries((data)));
    }, []);
    return (
        <div>
            <h2>Hello From Countries</h2>
            <h4>Total Countries: {countries.length}</h4>
            <div className='countries-container'>
            {countries.map(country =><Country 
            country={country}
            key={country.cca3}
            ></Country>)}
            </div>
        </div>
    );
}
export default Countries;