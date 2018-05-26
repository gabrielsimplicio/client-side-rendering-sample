import * as React from 'react';
import { Link } from 'react-router-dom';

import { Layout, Menu } from 'antd';

const Header = ({ pathname }) => (
  <Layout.Header className="header">
    <div className="logo" />
    <Menu
      theme="dark"
      mode="horizontal"
      style={{ lineHeight: '64px' }}
    >
      <Menu.Item key="1">
        <Link to='/'>Home</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to='/sobre'>Sobre</Link>
      </Menu.Item>
    </Menu>
  </Layout.Header>
)

export default Header
