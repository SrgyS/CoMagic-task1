import { Button, Form, Input } from 'antd';

import React from 'react';
import { useNavigate } from 'react-router-dom';

type FormValues = {
    name: string;
    email: string;
    TextArea: string;
};

const AppForm: React.FC = () => {
    const navigate = useNavigate();
    const onFinish = (values: FormValues) => {
        const searchParams = new URLSearchParams();
        searchParams.append('name', values.name);
        searchParams.append('email', values.email);
        searchParams.append('message', values.TextArea);
        console.log(searchParams.toString());

        navigate(`/formdata?${searchParams.toString()}`);
    };

    return (
        <Form
            onFinish={onFinish}
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 16 }}
            variant='filled'
            style={{ maxWidth: 600 }}
        >
            <Form.Item
                label='Имя'
                name='name'
                rules={[
                    { required: true, message: 'Заполните поле!' },
                    { min: 3, message: 'Минимальная длина 3 символа!' },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label='email'
                name='email'
                rules={[
                    { required: true, message: 'Заполните поле!' },
                    { type: 'email', message: 'Введите корректный email!' },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label='Сообщение'
                name='TextArea'
                rules={[
                    { required: true, message: 'Заполните поле!' },
                    { min: 3, message: 'Минимальная длина 3 символа!' },
                ]}
            >
                <Input.TextArea />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
                <Button type='primary' htmlType='submit'>
                    Отправить
                </Button>
            </Form.Item>
        </Form>
    );
};

export default AppForm;
