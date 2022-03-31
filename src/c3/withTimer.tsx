import React from "react";

export default function withTimer(WrappedComponent: any) {
    return class extends React.Component {
        timerID: any;
        state = { time: new Date()};
        componentDidMount() {
            this.timerID = setInterval(() => this.tick(), 1000);
        }

        componentWillUnmount() {
            clearInterval(this.timerID);
        }

        tick() {
            this.setState({
                time: new Date()
            })
        }
        render(): React.ReactNode {
            return <WrappedComponent time={this.state.time } {...this.props}/>
        }
    }
}