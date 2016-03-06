import React from 'react';
import { Menu, Icon } from 'antd';
import { hashHistory } from 'react-router'

export default class TopNav extends React.Component {

	getInitState() {
    	return {
	      current: 'mail'
	    };
	}

	constructor(props) {
	    super(props);
	    this.state = this.getInitState();
	}

	handleClick(e) {
	    console.log('click ', e);
	    hashHistory.push(e.key);
	    this.setState({
	      current: e.key
	    });
	  }

	  render() {
	  	console.log(this.state);
	    return (
	      <Menu onClick={evt=>this.handleClick(evt)}
	        selectedKeys={[this.state.current]}
	        theme={this.state.theme}
	        mode="horizontal">
	        <Menu.Item key="home">
	          <Icon type="home" />主页
	        </Menu.Item>
	        <Menu.Item key="candidate/create">
	          <Icon type="user" />创建候选人
	        </Menu.Item>
	        <Menu.Item key="/job/create">
	          <Icon type="eye-o" />创建
	        </Menu.Item>
	        <Menu.SubMenu title={<span><Icon type="setting" />导航 - 子菜单</span>}>
	          <Menu.ItemGroup title="分组1">
	            <Menu.Item key="setting:1">选项1</Menu.Item>
	            <Menu.Item key="setting:2">选项2</Menu.Item>
	          </Menu.ItemGroup>
	          <Menu.ItemGroup title="分组2">
	            <Menu.Item key="setting:3">选项3</Menu.Item>
	            <Menu.Item key="setting:4">选项4</Menu.Item>
	          </Menu.ItemGroup>
	        </Menu.SubMenu>
	        <Menu.Item key="alipay">
	          <a href="http://www.alipay.com/" target="_blank">导航四 - 链接</a>
	        </Menu.Item>
	      </Menu>
	    );
	  }
}
