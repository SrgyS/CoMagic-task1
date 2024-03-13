import { Card, Grid, Space, Typography } from 'antd';

import CustomButton from './Button/CustomButton';
import { useState } from 'react';

const { useBreakpoint } = Grid;
const { Title, Paragraph } = Typography;
function YearControl() {
    const currentYear = new Date().getFullYear();

    const [year, setYear] = useState(currentYear);
    const [count, setCount] = useState(0);

    const increaseYear = () => {
        setYear((prevYear) => prevYear + 1);
        setCount((count) => count + 1);
    };
    const screens = useBreakpoint();
    const resetYear = () => {
        setYear(currentYear);
        setCount(0);
    };
    const resetBtnText =
        count === 0 ? 'Сейчас установлен текущий год' : 'Сбросить';

    return (
        <Card style={{ maxWidth: 600, margin: '0 auto' }}>
            <Space direction='vertical' style={{ width: '100%' }}>
                <Title level={screens['xs'] ? 4 : 3}>
                    Текущий год {currentYear}
                </Title>
                <Paragraph>
                    Вы можете изменить текущий год: <strong>{year}</strong>
                </Paragraph>
                <Paragraph style={{ fontStyle: 'italic' }}>
                    На пути в будущее: нажми +, чтобы сделать шаг вперёд!
                </Paragraph>
                <Space
                    direction={screens['xs'] ? 'vertical' : 'horizontal'}
                    wrap
                >
                    <CustomButton
                        onClick={increaseYear}
                        isActive={year !== currentYear}
                        defaultText='+'
                        activeText='увеличен на'
                    >
                        {count}
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
