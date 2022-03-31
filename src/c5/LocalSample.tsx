import React from "react";
const enStrings = {
    submit: "Submit",
    cancle: "Cancle"
};
const cnStrings = {
    submit : "提交",
    cancle: "取消"
}
const LocalContext = React.createContext(enStrings);

class LocalProvider extends React.Component {
    state = { local: cnStrings};
    toggleLocale = () => {
        const local = this.state.local === enStrings ? cnStrings : enStrings;
        this.setState({local});
    }
    render(): React.ReactNode {
        return (
            <LocalContext.Provider value = {this.state.local}>
                <button onClick={this.toggleLocale}>
                    切换语言
                </button>
                {this.props.children}
            </LocalContext.Provider>
        );
    }
}
class LocalButtons extends React.Component {
    render(): React.ReactNode {
        return (
            <LocalContext.Consumer>
                {
                    local => (
                        <div>
                            <button>{local.cancle}</button>
                            &nbsp;<button>{local.submit}</button>
                        </div>
                    )
                }
            </LocalContext.Consumer>
        );
    }
}
// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return (
        <div>
            <LocalProvider>
                <div>
                    <br />
                    <LocalButtons></LocalButtons>
                </div>
            </LocalProvider>
        </div>
    );
}