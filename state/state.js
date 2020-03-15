import React from 'react';

class state extends React.Component{
	constructor(){
		super();
		this.state={
			data:
			[
				{
					"name":"dogA",
					"age":"1"
				},
				{
					"name":"dogB",
					"age":"2"
				},
				{
					"name":"dogC",
					"age":"3"
				}
			],
			id:"Animal List"
		}
	}

	render(){
		return (
			<div>
            	<Header title = {this.state.id} />
	            <table>
	               <tbody>
	                  {this.state.data.map((animals,i) => 
	                  <TableRow key = {i} data = {animals} />)}
	               </tbody>
	            </table>
        	</div>
		)
	}
}

class TableRow extends React.Component{
	render(){
		return (
			<tr>
				<td>{this.props.data.name}</td>
				<td>{this.props.data.age}</td>
				
			</tr>
		)
	}
}

class Header extends React.Component{
	render(){
		return (
			<h1>{this.props.title}</h1>
		)
	}
}

class Content extends React.Component{
	render(){
		return (
			<div>
				<h2>Content</h2>
				<p>this is Content</p>
			</div>
		)
	}
}
export default state;