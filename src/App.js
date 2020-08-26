import React from 'react';

import Layout from './hoc/Layout/Layout';
import Devices from './containers/Devices';

const  app = (props) => {
  return (
    <Layout>
      <Devices />
    </Layout>
  );
}

export default app;
