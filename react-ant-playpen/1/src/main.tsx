import React from "react";
import { Form, Input, Icon, Checkbox, Button } from "antd";
import { FormComponentProps } from "antd/lib/form/Form";
import "./main.css";

export interface MainProps {}

const MainComponent: React.FC<MainProps & FormComponentProps> = ({ form }) => {
  const { getFieldDecorator } = form;
  return (
    <div>
      <h1>Form</h1>
      <Form>
        <Form.Item label="Validating" hasFeedback validateStatus="validating">
          {getFieldDecorator("username", {
            rules: [{ required: true, message: "Please input your username!" }]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Username"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "Please input your Password!" }]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="Password"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("remember", {
            valuePropName: "checked",
            initialValue: true
          })(<Checkbox>Remember me</Checkbox>)}
          <a className="login-form-forgot" href="">
            Forgot password
          </a>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
          Or <a href="">register now!</a>
        </Form.Item>
      </Form>
    </div>
  );
};
export default Form.create({ name: "normal_login" })(MainComponent);
