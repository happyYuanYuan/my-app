import {PureComponent, ReactNode } from "react";

interface IProps {
    value: Object,
    options: {name: string , value: string}[],
    onChange: Function,
    children: any
 }
 interface IState {

 }
export class AdvanceTabSelected extends PureComponent<IProps, IState>{
    state: IState = {};
    render(): ReactNode {
        const { options, value, onChange} = this.props;
        return (
        <div className="tab-selector">
            <ul>
                {
                    options.map( (opt:{value:string, name:string}, index:number) => (
                        <li 
                        key={index}
                        className={`tab-item ${opt.value === value ? 'selected' : ''}`}
                        onClick={()=>onChange(opt.value)}
                        >
                            {opt.name}
                        </li>
                    )
                    )
                }
            </ul>
            <br />
            <br />
            {this.props.value && this.props.children(this.props.value)}
        </div>
        );
    }

}
const colors:{name: string , value: string}[] = [
    { name: 'Red', value: 'red'},
    { name: 'Yellow', value: 'yellow'},
    { name: 'Blue', value: 'blue'},
];
export default class AdvanceTabSelectorSample extends PureComponent {
    state = {
        color: ''
    }
    render() {
        console.log('render' + this.state.color);
        return (
            <div>
                <h3>Select color:</h3>
                <AdvanceTabSelected 
                options={colors}
                value ={this.state.color}
                onChange={(c:string) => this.setState({color:c})}
                >
                    {
                        (color: string) => (
                            <span style={{
                                display: 'inline-block',
                                backgroundColor: color,
                                width: '40px',
                                height: '40px'
                            }}></span>
                        )
                    }
                </AdvanceTabSelected>
            </div>
        );
    }
}