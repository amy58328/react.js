import {combineReducers} from 'redux';
import {PLUS,MINUS} from './action.js';

//初始資料
const initialData = {
	value : 0
}

function calculator(state = initialData, action)
{
	switch(action.type)
	{
		//add()
		case PLUS:
			console.log("++");
				return Object.assign({}, state,{
					value : state.value + action.num
				});

		// sub()
		case MINUS:
			console.log("--");
				return Object.assign({}, state,{
					value : state.value - action.num
				});
		//else
		default:
			return state;
	}
}

//當action 有很多種的時候 combineReducers 合併
// 為了讓store有明確得Redcer可以回應
const calculatorApp = combineReducers({
	calculator
});

export default calculatorApp;