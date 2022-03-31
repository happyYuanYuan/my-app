import * as React from 'react';

import { FCCounter } from '.';

// eslint-disable-next-line import/no-anonymous-default-export
export default class extends React.Component<{}, { count: number }> {
  state = { count: 0 };

  render() {
    return (
      <FCCounter
        label={'FCCounter'}
        count={this.state.count}
        // onIncrement={() => {
        //   this.setState({ count: this.state.count + 1 });
        // }}
      />
    );
  }
}
