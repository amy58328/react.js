import React from 'react';

class list extends React.Component{
	render(){
		const number = [1,2,3,4,5];
		const listItem = number.map((number) => 
			<Listnumber key = {number.toString()} value = {number}/>
		)

		return(
			<ol>{listItem}</ol>
		)
	}
}

class Listnumber extends React.Component{
	render(){
		return(
			<li>{this.props.value}</li>
		)
	}
}

export default list;