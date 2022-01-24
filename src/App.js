import React, { Component } from 'react';
import './App.css';
import Country from './components/Country';
import CountryNoMui from './components/CountryNoMui';

class App extends Component {
  state = {
    countries: [
      { id: 1, name: 'United States', gold: 2 },
      { id: 2, name: 'China', gold: 3 },
      { id: 3, name: 'Germany', gold: 0 },
    ]
  }
  render() { 
    return ( 
      <div className="App">
        <header className="App-header">
          GOLD MEDALS
        </header>
        {this.state.countries.map(country =>
          <Country 
            key={ country.id } 
            country={ country } />
        )}
        {this.state.countries.map(country =>
          <CountryNoMui 
            key={ country.id } 
            country={ country } />
        )}
      </div>
     );
  }
}

export default App;
