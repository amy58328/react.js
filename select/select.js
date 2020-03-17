import React from 'react';

class Select extends React.Component{
	constructor(){
		super();
		this.state = {
			value : "init value"
		}
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(e){
		this.setState({value : e.target.value});
	}	

	handleSubmit(e){
		alert('you choose' + this.state.value)
		e.preventDefault();
	}
	render()
	{
		return(
			<form onSubmit = {this.handleSubmit} >
				<label>
					<select value = {this.state.value} onChange = {this.handleChange}>
					<option value = "classmate A">classmate A</option>
					<option value = "classmate B">classmate B</option>
					<option value = "classmate C">classmate C</option>
					<option value = "classmate D">classmate D</option>
					</select>
				</label>
				<p>you choose {this.state.value}</p>
				<input type='submit' value = 'Sumbit'/>
			</form>
		)
	}
}

export default Select;