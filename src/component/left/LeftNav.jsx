import React from 'react';
import { Collapse } from 'antd';

export default class LeftNav extends React.Component {
	render() {
		return (
			<Collapse accordion>
			    <Collapse.Panel header={'待审核'} key="1">
			      <ul>
			      	<li>张三</li>
			      	<li>李四</li>
			      	<li>王五</li>
			      </ul>
			    </Collapse.Panel>
			    <Collapse.Panel header={'最近浏览'} key="2">
			       <ul>
			      	<li>张三</li>
			      	<li>李四</li>
			      	<li>王五</li>
			      </ul>
			    </Collapse.Panel>
			    <Collapse.Panel header={'跟踪'} key="3">
			      <ul>
			      	<li>张三</li>
			      	<li>李四</li>
			      	<li>王五</li>
			      </ul>
			    </Collapse.Panel>
			  </Collapse>
		);
	}
}
