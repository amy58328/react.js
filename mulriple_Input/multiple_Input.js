import React from 'react';

class MI extends React.Component{
  constructor(){
    super();
    this.state = {
      isgoing : false,
      numberofGuests : 0 
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    const target = e.target;
    const value = target.type === 'checkbock'? target.check : target.value;
    alert(target.type)
    const name = target.name;

    this.setState({
      [name] : value
    })
  }

  handleSubmit(){

  }
  render(){
    return(
      <from onSubmit = {this.handleSubmit}>
        <label>
          is going
          <input 
            type ="checkbox" 
            name = "isgoing" 
            check = {this.state.isgoing}
            onChange = {this.handleChange}/>

        </label>

        <br/>

        <label>
          number of guests:
            <input 
              name = "numberofGuests"
              type = "number"
              value = {this.state.numberofGuests}
              onChange = {this.handleChange}
              max = "10"
              min = "0"/>
        </label>

      </from>
    )
  }
}

export default MI