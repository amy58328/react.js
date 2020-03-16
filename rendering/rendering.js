import React from 'react';

// if判斷句
class Greeting extends React.Component{
	render(){
		var tt = 1;
		if(tt == 1)
		{
			return (
				<h1>this is 1</h1>
			)
		}
		return(
			<h1>else</h1>
		)
	}
}



export default Greeting