import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd'

const { Sider } = Layout

class Sidebar extends Component {
  state = {
    collapsed: true
  }

  onCollapse = (collapsed) => {
    this.setState({ collapsed })
  }

  render () {
    return (
      <Sider
        style={{ backgroundColor: '#fff' }}
        collapsible
        collapsed={this.state.collapsed}
        onCollapse={this.onCollapse}
      >
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <Menu.Item key='calendar'>
            <Icon style={{ fontSize: '22px' }} type="calendar" theme="outlined" />
            <span>Calendar</span>
          </Menu.Item>
          <Menu.Item key='notepad'>
            <Icon style={{ fontSize: '22px' }} type="book" theme="outlined" />
            <span>Notepad</span>
          </Menu.Item>
          <Menu.Item key='chat_room'>
            <Icon style={{ fontSize: '22px' }} type="wechat" theme="outlined" />
            <span>Chat Room</span>
          </Menu.Item>
          <Menu.Item key='this_week'>
            <Icon style={{ fontSize: '22px' }} type="schedule" theme="outlined" />
            <span>This Week</span>
          </Menu.Item>
          <Menu.SubMenu title={<span><Icon style={{ fontSize: '22px' }} type='laptop' /><span>Blog</span></span>}>
            <Menu.Item key='articles'>Articles</Menu.Item>
            <Menu.Item key='videos'>Videos</Menu.Item>
            <Menu.Item key='inspiration'>Inspiration</Menu.Item>
            <Menu.Item key='diy'>DIY's</Menu.Item>
          </Menu.SubMenu>
          <Menu.Item key='my_profile'>
            <Icon style={{ fontSize: '22px' }} type="user" theme="outlined" />
            <span>My Profile</span>
          </Menu.Item>
        </Menu>
      </Sider>
    )
  }
}

export default Sidebar
