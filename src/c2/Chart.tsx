import React from "react";
import { Button } from 'antd';

import withTimer from "../c3/withTimer";
interface IProps {
   time: Date
}
interface IState {
    message: string[],
    inputMsg: string
}
export class Chart extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        console.log('chart constructor');
        this.state = {message:[], inputMsg: ''};
        // this._handlerChange = this._handlerChange.bind(this);
    }
    _handlerChange(val:string){
        this.setState({ inputMsg: val});
    }
    _handlerSend = () => {
        const text = this.state.inputMsg;
        if(text) {
            const newMessages =  [...this.state.message, text];
            this.setState({
                message: newMessages,
                inputMsg: ''
            });
        }
    }
   render(): React.ReactNode {
       return (
           <div>
               <input type="text" value={ this.state.inputMsg } onChange={(event) => this._handlerChange(event.target.value)} />
               <Button type="primary" onClick={this._handlerSend}>Send</Button>
               <h2>{this.props.time.toLocaleString() }</h2>
           </div>
       );
   }
}

export default withTimer(Chart);