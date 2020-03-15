import React from 'react';

// *******直接賦予值的寫法*******
// class Props extends React.Component{
// 	render(){
// 		return(
// 			<div>
// 				<p>{this.props.animal1}</p>
// 				<p>{this.props.animal2}</p>
// 			</div>
// 		);
// 	}
// }

// Props.defaultProps = {
// 	animal1 : "dog",
// 	animal2 : "cat"
// }
// 



// *******直接賦予值的寫法*******
class Props extends React.Component{
	constructor(props){
		super(props);
		this.state={
			name:"UnaUna",
			number:"2333"
		}
	}

	render(){
		return(
			<div>
				<Content id = {this.state.name}/>
				<Content id = {this.state.number}/>
			</div>
		);
	}
}

class Content extends React.Component{
	render(){
		return(
			<h1>{this.props.id}</h1>
		)
	}
}
export default Props;