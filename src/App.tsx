import React from 'react';
import './App.css';
import { Button, Radio, Space } from 'antd';
import Clock from './c1/Clock';
import {
  HomeOutlined,
} from '@ant-design/icons';

function App() {
  return (
    <div className="App">
      <Radio.Group value='large'>
          <Radio.Button value="large">Large</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="small">Small</Radio.Button>
        </Radio.Group>
     <Button type="primary">Primary Button</Button>
      <Clock name={'clock'} center='ddd'></Clock>
      <Space>
       <HomeOutlined />
      </Space>
    </div>
  );
}

export default App;
