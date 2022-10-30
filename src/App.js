import React from 'react'
import { Layout } from 'antd'

import HeaderBar from './components/HeaderBar/HeaderBar'
import Sidebar from './components/Sidebar/Sidebar'
import Workspace from './components/Workspace/Workspace'

import 'antd/dist/antd.min.css'

const { Content } = Layout

const App = () => (
  <Layout>
    <HeaderBar />
    <Layout>
      <Sidebar />
      <Content
        style={{
          padding: '20px 20px'
        }}
      >
        <Workspace />
      </Content>
    </Layout>
  </Layout>
);

export default App;