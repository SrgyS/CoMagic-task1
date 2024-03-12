import { Card, Space, Typography } from 'antd';

import CustomButton from './Button/CustomButton';
import { useState } from 'react';

const { Title, Paragraph } = Typography;
function YearControl() {
    const currentYear = new Date().getFullYear();

    const [year, setYear] = useState(currentYear);
    const [count, setCount] = useState(0);

    const increaseYear = () => {
        setYear((prevYear) => prevYear + 1);
        setCount((count) => count + 1);
    };

    const resetYear = () => {
        setYear(currentYear);
        setCount(0);
    };
    const resetBtnText =
        count === 0 ? 'Сейчас установлен текущий год' : 'Сбросить';

    return (
        <Card style={{ maxWidth: 600, margin: '0 auto' }}>
            <Space direction='vertical' style={{ width: '100%' }}>
                <Title level={3}>Текущий год {currentYear}</Title>
                <Paragraph>
                    Вы можете изменить текущий год: <strong>{year}</strong>
                </Paragraph>
                <Paragraph style={{ fontStyle: 'italic' }}>
                    На пути в будущее: нажми +, чтобы сделать шаг вперёд!
                </Paragraph>
                <Space>
                    <CustomButton
                        onClick={increaseYear}
                        isActive={year !== currentYear}
                    >
                        + {count}
                    </CustomButton>
                    <CustomButton
                        disabled={year === currentYear}
                        onClick={resetYear}
                    >
                        {resetBtnText}
                    </CustomButton>
                </Space>
            </Space>
        </Card>
    );
}

export default YearControl;
