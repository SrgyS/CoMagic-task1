import { Descriptions } from 'antd';
import { useSearchParams } from 'react-router-dom';

export default function FormData() {
    const [searchParams] = useSearchParams();

    const name = searchParams.get('name') || '';
    const email = searchParams.get('email') || '';
    const message = searchParams.get('message') || '';
    return (
        <Descriptions
            title='Данные из формы'
            bordered
            column={1}
            style={{ maxWidth: 600 }}
            labelStyle={{ width: 80 }}
        >
            <Descriptions.Item label='Имя'>{name}</Descriptions.Item>
            <Descriptions.Item label='Email'>{email}</Descriptions.Item>
            <Descriptions.Item label='Сообщение'>{message}</Descriptions.Item>
        </Descriptions>
    );
}
