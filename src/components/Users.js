import { Button, Form, Input, notification } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import userServices from "../services/userServices";

const Users = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const handlePost = async (data) => {
    const user = {
      name: data.name,
      email: data.email,
      mobile: data.mobile,
      message: data.message,
    };
    form.resetFields();
    openNotificationWithIcon();
    dispatch(userServices.create(user));
  };

  const openNotificationWithIcon = () => {
    notification["success"]({
      message: "User Added",
      description: "This User is Added Successfully",
    });
  };

  return (
    <div>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        layout="vertical"
        onFinish={handlePost}
        autoComplete="off"
        form={form}
      >
        <Form.Item
          label="Username"
          name="name"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="E-mail"
          name="email"
          rules={[{ required: true, message: "Please input your E-mail!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Mobile"
          name="mobile"
          rules={[{ required: true, message: "Please input your Mobile!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Message"
          name="message"
          rules={[{ required: true, message: "Please input your Message!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Users;
