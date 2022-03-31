import { Button } from "antd";
import React from "react";
import { connect, Provider } from "react-redux";
import { bindActionCreators, createStore } from "redux";
// 初始化 state
const initialState = {count :0};
// reducer
const counter = ( state = initialState,  action:any) => {
    switch(action.type) {
        case "PLUS_ONE":
            return { count: state.count + 1};
        case "MINUS_ONE":
            return { count: state.count - 1};
        case "CUSTOM_COUNT":
            return { count: state.count + action.playload.count};
        default:
            break;
    }
    return state;
}
// create store
const store = createStore(counter);

// action creator
function plusOne() {
    return { type: 'PLUS_ONE'};
}
function minusOne() {
    return { type: 'MINUS_ONE'}
}
function customCount(count: number) {
    return { type: 'CUSTOM_COUNT', playload: {count: count}}
}
interface IProps {
    count: number,
    plusOne: any,
    minusOne: any,
    customCount: any
}
export class Counter extends React.Component<IProps> {
    render() {
        const {count, plusOne, minusOne, customCount} = this.props;
        return (
            <div className="counter">
                <Button type="primary" onClick={minusOne}>-</Button>
                <span style={{display: 'inline-block'}}>{count}</span>
                <Button type="primary" onClick={plusOne}>+</Button>
                加多少<input type="number" onChange={(e) => {e.target.value && customCount( parseInt(e.target.value))}} /> 
            </div>
        );
    }
}
// 将store中的count 传入props
function mapStateToProps(state:any) {
    return {
        count: state.count
    }
}
// 将
function mapDispatchToProps(dispatch:any) {
    return bindActionCreators({plusOne, minusOne, customCount}, dispatch);
}
const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter);

export default class CounterSample extends React.Component{
    render() {
        return (
            <Provider store = {store}>
                <ConnectedCounter></ConnectedCounter>
            </Provider>
        )
    }
}