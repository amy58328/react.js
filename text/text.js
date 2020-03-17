import React from 'react';

class Text extends React.Component{
	constructor(){
		super();
		this.state = {
			value : "Please Enter Your Name"
		}
		this.handleChange = this.handleChange.bind(this);
    	this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleSubmit(event)
	{
		alert('A name was submitted');
	}

	handleChange(event){
		this.setState({value : event.target.value});
		event.preventDefault();
	}
	render(){
		return(
			<form onSubmit={this.handleSubmit}>
				<label>
					name:
					<input type="text" value = {this.state.value} onChange = {this.handleChange}/>
					// <textarea type="text" value = {this.state.value} onChange = {this.handleChange}/>

				</label>
				<p>{this.state.value}</p>
				<input type="submit" value="Submit"/>
			</form>

		)
	}
}

export default Text;