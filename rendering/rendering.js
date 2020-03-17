import React from 'react';

// if判斷句
class rendering extends React.Component{
	constructor(){
		super();
		this.state = {
			isLogin : false
		}
	}
	render(){
		let button = null;

		// if-else條件式
		// if(this.state.isLogin)
		// {
		// 	button = <LogOutButton / >
		// }
		// else
		// {
		// 	button = < LogInButton / >
		// }

		// 條件運算子
		button = this.state.isLogin? <LogOutButton / > :< LogInButton / >
		return (
			<div>
				<Greeting isLogin={this.state.isLogin}/>
				{button}
			</div>
		)
	}
}

class Greeting extends React.Component{
	render()
	{
		if(this.props.isLogin ==  true)
		{
			return(
				<h1>Welcome back!</h1>
			)
		}
		else
		{
			return(
				<h1>Please log in </h1>
			)
		}
		
	}
}


class LogInButton extends React.Component{
	render(){
		return(
			<button>
				Log In 
			</button >
		)
	}
}


class LogOutButton extends React.Component{
	render(){
		return(
			<button>
				Log Out
			</button >
		)
	}
}


export default rendering