import { Button } from '@mui/material';
import React, { Component } from 'react'
import { Country } from './country';

export class Countries extends Component {
    
    constructor () {
        super();
        this.state = {
            countries: []
        }
    }

    componentDidMount() {
        this.getCountries();
    }

    getCountries () {
        fetch("https://restcountries.com/v2/all")
        .then(response => response.json())
        .then(data => {
            this.setState({ countries: data });
        })
        .catch(error => console.log(error));
    }

    delete = name => {
        let newState = {...this.state};
        newState.countries = newState.countries.filter(
            country => country.name !== name
        )
        this.setState(newState);
    }

    render() {
        return (
            <div>
                <h3>Paises</h3>
                 
                {
                    this.state.countries.map((country, index) => (
                        <Country 
                            name={country.name} 
                            onDelete={this.delete}
                            key={index}/>
                    ))
                }
            </div>
        )
    }
}

export default Countries;