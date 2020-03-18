import React from 'react';

const scaleName ={
	cm:'公分',
	m:'公尺'
}
class CM extends React.Component{
	render(){
		// 紀錄傳入的參數是 cm or m
		const scale = this.props.scale;

		return(
			<fieldset>
				<legend>{scaleName[scale]}</legend>
				<input 
					type="text" 
					value = {this.props.length} 
					onChange = {this.props.onLength}/>
			</fieldset>
		)
	}
}

function doConvert(unit,convert)
{
	//parseFloat 字串數字 參數如果不是數字回傳NaN
	const input = parseFloat(unit);
	if(isNaN(input)) // 判斷不是數字回傳空白
	{
		return '';
	}

	// 換算單位
	const output = convert(input);
	// 回傳string狀態的答案
	return output.toString();
}

function toCentermeter(n){
	return n*100;
}

function toMeter(n)
{
	return n/100;
}
class Caculator extends React.Component{
	constructor(){
		super();
		this.state ={
			length : "",
			scale : "cm"
		}
		this.handleCentermemterChange = this.handleCentermemterChange.bind(this);
		this.handleMeterChange = this.handleMeterChange.bind(this)
	}
	handleCentermemterChange(e){
		this.setState({
			// 更新長度跟狀態
			length : e.target.value,
			scale : 'cm'
		});
	}

	handleMeterChange(e){
		this.setState({
			length : e.target.value,
			scale : 'm'
		});
	}


	render()
	{
		// 紀錄長度
		const length = this.state.length;
		// 記錄長度
		const scale = this.state.scale;
		// 如果是更改M 則呼喚 m to cm
		const centermeter = scale ==='m'? doConvert(length,toCentermeter):length;
		// 如果是更改CM 則呼喚 cm to m
		const meter =  scale ==='cm' ? doConvert(length,toMeter):length;


		return(
			// 傳狀態、長度、以及更改的是哪個表格
			<fieldset>
				<CM scale = 'cm' length = {centermeter} onLength = {this.handleCentermemterChange}/>
				<br />
				<CM scale = 'm' length = {meter} onLength = {this.handleMeterChange}/>
			</fieldset>
		)
	}
}
export default Caculator;
