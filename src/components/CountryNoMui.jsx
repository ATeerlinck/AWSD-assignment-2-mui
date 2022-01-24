import React, { Component } from 'react';


class Country extends Component {
  state = {
    name: this.props.country.name,
    gold: this.props.country.gold
  }
  handleIncrement = () =>{
    //const country = this.state.countries.find(c => c.id === countryId);
    //console.log("hey");
    this.setState({ gold: this.state.gold+1 })
  }
  handleDecrement = () =>{
    //const country = this.state.countries.find(c => c.id === countryId);
    //console.log("hi");
    this.setState({ gold: this.state.gold-1 })
  }
    render() { 
      //const { onIncrement, onDecrement, country } = this.props;
        return (
                <div className='Country' style={{width: '400px', margin: 'auto'}}>
                    { this.state.gold }
                    <input type="button" style={{ cursor:'pointer', display: 'inline' }} onClick={ this.handleIncrement } value={"+"} />  
                    <input type="button" disabled={this.state.gold <= 0 ? true : false} style={{ cursor:'pointer', display: 'inline' }} onClick={ this.handleDecrement }value={"-"} />  
                    { this.state.name }
                </div>
        );
    }
}
 
export default Country;