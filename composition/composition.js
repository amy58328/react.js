import React from 'react'
import ReactDOM from 'react-dom'

class Com extends React.Component{
	render(){
		return(
			<Block 
				top = {<h1>this is a header</h1>} 
				botton = {<p>this is a button</p>}/>
		);
	}
}

class Block extends React.Component {
	render()
	{
		return(
			<div>
				<div>
					{this.props.top}
				</div>
				<br/>
				<div>
					{this.props.botton}
				</div>
			</div>	
		);
	}
}


export default Com;
