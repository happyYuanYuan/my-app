import React from "react";

interface IProps {
    name: string,
    age?: string | number | undefined;
    center: string | undefined;
}
interface IState {
    date: Date;
}
export default class Clock extends React.Component<IProps, IState> {
    timeId: NodeJS.Timer | undefined;
    constructor(props: IProps) {
        super(props);
        this.state  = {date: new Date()};
        console.log('Clock constructored', this.state);
    }
    componentDidMount() {
        console.log('Clock componentDidMount');
        this.timeId = setInterval(() => this.tick(), 1000);
    }
    componentWillUnmount() {
        console.log('Clock componentWillUnmount');
        this.timeId && clearInterval(this.timeId);
    }
    /**
     * 
     * @param {*} prevProps 
     * @param {*} prevState 
     * @param {*} prevScrollHeight  来自getSnapshotBeforeUpdate返回值
     */
    componentDidUpdate(prevProps:any, prevState:any, prevScrollHeight:any) {
        console.log('Clock componentDidUpdate');
        console.log(prevProps, prevState, prevScrollHeight);
    }
    getSnapshotBeforeUpdate() {
        return {age: 19};
    }
    tick() {
        this.setState({
            date: new Date()
        });
    }
    render() {
        return (
            <div>
                <h3> Hello , world~</h3>
                <h5> It is {this.state.date.toLocaleTimeString()}</h5>
            </div>
        );
    }
 }