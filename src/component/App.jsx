import React, { Component } from 'react';
import TopNav from './top/TopNav';
import LeftNav from './left/LeftNav';
import Logo from './left/Logo';
import { Row, Col } from 'antd';
import '../css/main.less';

export default class App extends Component {
  
  render() {
  	return <div>
  		<div id="left">
  			<Logo />
  			<LeftNav />
  		</div>
  		<div id="top">
  			<TopNav />
  		</div>
  		<div id="main">
  			 {this.props.children}
  		</div>
  	</div>;
  }	
}

