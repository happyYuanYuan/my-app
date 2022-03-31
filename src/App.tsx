// import { Provider } from 'react-redux';
import { Button } from 'antd';
import React from 'react';
import './App.css';
// import LayoutContainer from './layout/LayoutContainer'
// import store, { history } from './store';
// import Clock from './c1/Clock';
import Chart from './c2/Chart';
import AdvanceTabSelected from './c4/AdvanceTabSelected';
import LocalSample from './c5/LocalSample';
import PureRedux from './c6/PureRedux';
import CounterSample from './c7/Counter';
const ThemeContext = React.createContext('light');

function App() {
  return (
    <div>
      <ThemeContext.Provider value='dark'>
        <ThemeButton></ThemeButton>
        {/* <Clock name={'wendy'} center={undefined} ></Clock> */}
        <Chart></Chart>
        <AdvanceTabSelected></AdvanceTabSelected>
      </ThemeContext.Provider>
      <LocalSample></LocalSample>
      <PureRedux></PureRedux>
      <CounterSample></CounterSample>
    </div>
    // <LayoutContainer></LayoutContainer>
    // <Provider store={store}>
    //     <ConnectedRouter history={history}>
    //       <Home />
    //     </ConnectedRouter>
    //   </Provider>
  );
}
function ThemeButton(props:any) {
  return (
    <ThemeContext.Consumer>
      {theme => <Button {...props} theme={theme}>我是按钮{theme}</Button>}
    </ThemeContext.Consumer>
  );
}
export default App;
