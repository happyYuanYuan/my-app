import * as React from 'react';

import FCCounterUsage from '../components/fc-counter.usage';
import FCSpreadAttributesUsage from '../components/fc-spread-attributes.usage';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <section>
      <FCCounterUsage />
      <FCSpreadAttributesUsage />
    </section>
  );
};