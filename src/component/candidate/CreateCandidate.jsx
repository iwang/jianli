import React from 'react';
import { Form, Input, Button, Checkbox, Select, Radio, Row, Col, Tooltip, Icon, InputNumber } from 'antd';

export default class CreateCandidate extends React.Component {
	render() {
		const formItemLayout = {
	      labelCol: { span: 4},
	      wrapperCol: { span: 6 },
	    };

	    const Option = Select.Option;
		return (
			<Form horizontal>
				<Form.Item
			      label="添加到职位："
			       {...formItemLayout}>
			      <Select id="select" placeholder="请选择职位" style={{ width: 200 }} >
			        <Option value="jack">jack</Option>
			        <Option value="lucy">lucy</Option>
			        <Option value="disabled" disabled>disabled</Option>
			        <Option value="yiminghe">yiminghe</Option>
			      </Select>
			    </Form.Item>

				<Form.Item
		          {...formItemLayout}
		          label="姓名：">
		          <Input placeholder="请输入候选人姓名" />
		        </Form.Item>
		       
		        <Form.Item
		          label="性别："
		          {...formItemLayout}>
		          <Radio.Group>
		            <Radio.Button value="1">男</Radio.Button>
		            <Radio.Button value="2">女</Radio.Button>
		          </Radio.Group>
		        </Form.Item>

		         <Form.Item label="居住地："
		          {...formItemLayout}>
		          <Input placeholder="请输入候选人住址" />
	        	 </Form.Item>

	        	 <Form.Item label="邮箱："
		          {...formItemLayout}>
		          <Input placeholder="请输入候选人邮箱" />
	        	 </Form.Item>

	        	 <Form.Item label="年龄："
		          {...formItemLayout}>
		          <InputNumber min={15} max={80} />
		         </Form.Item>

		         <Form.Item label="手机："
		          {...formItemLayout}>
		          <Input />
		         </Form.Item>

		         <Form.Item label="工作经验："
		          {...formItemLayout}>
		          <InputNumber min={0} max={40} />
		         </Form.Item>

		         <Form.Item label="学历："
			       {...formItemLayout}>
			      <Select id="select" placeholder="请选择学历" style={{ width: 200 }} >
			        <Option value="1">本科</Option>
			        <Option value="2">硕士</Option>
			        <Option value="3">博士</Option>
			        <Option value="4">本科以下</Option>
			      </Select>
			    </Form.Item>

			</Form>
		);
	}
}
