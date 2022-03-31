import React from "react";
import { createStore, combineReducers, bindActionCreators} from "redux";

function run() {
    //state
    const initialState = { count: 0};
    //reducer1
    const counter = (state = initialState, action:any) => {
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
    //reducer2
    const todos = (state = {}) => state;

    //create store
    const store = createStore(combineReducers({counter, todos}));

    function plusOne() {
        return { type: "PLUS_ONE"};
    }
    function minusOne() {
        return { type: "MINUS_ONE"};
    }
    function customCount(count: number) {
        return { type: "CUSTOM_COUNT", playload: { count }}
    }
    let plusOne2 = bindActionCreators(plusOne, store.dispatch);
    //监控
    store.subscribe(() => console.log(store.getState()));
    plusOne2();
    plusOne2();
    // store.dispatch(plusOne());
    store.dispatch(minusOne());
    store.dispatch(customCount(5));
}
// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
    <div>
        <button onClick={run}>Run</button>
        <p>* 打开控制台查看</p>
    </div>
);