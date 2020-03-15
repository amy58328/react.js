import React from 'react';

class nest extends React.Component{
	constructor(){
		super();
		this.state={
			"name":"UnaUna"
		}
	}

	render(){
		return (
			<div>
				<Header/>
				<Content/>
				<p>by {this.state.name}</p>
			</div>

		)
	}
}

class Header extends React.Component{
	render(){
		return (
			<h1>Header</h1>
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
export default nest;