import { Divider, Grid, Typography } from 'antd';

const { Title, Text, Paragraph } = Typography;
const { useBreakpoint } = Grid;

export default function Home() {
    const screens = useBreakpoint();
    return (
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
            <Title level={screens['xs'] ? 4 : 2}>
                Первое задание на стажировке в компании CoMagic
            </Title>
            <Paragraph>
                Это простое React приложение, созданное без использования state
                менеджеров, только с помощью хуков useState и useEffect.
            </Paragraph>
            <Divider />
            <Title level={screens['xs'] ? 5 : 3}>Функциональность</Title>
            <Paragraph>
                В разделе "Год" отображается текущий год и предоставляется
                возможность его изменения путем нажатия на кнопку{' '}
                <Text code>+</Text>. При нажатии на кнопку текущий год
                увеличивается на 1 год. Кнопка меняет цвет и текст внутри себя
                при нажатии. При нажатии на <Text code>Сброс</Text>{' '}
                устанавливается текущий год.
            </Paragraph>
            <Paragraph>
                Раздел "Заполнить форму" содержит форму с полями ввода, в том
                числе текстовым полем и кнопкой отправки. Форма обрабатывает
                введенные данные и после отправки отображает их в новом окне
                "Данные формы".
            </Paragraph>
            <Paragraph>
                Приложение использует <Text code>React Router</Text> для
                создания нескольких страниц и возможности перехода между ними.
            </Paragraph>
        </div>
    );
}
