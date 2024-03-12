import {
    CalendarOutlined,
    FileTextOutlined,
    FormOutlined,
    HomeOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { Link, Outlet, useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import type { MenuProps } from 'antd';

const { Sider, Content } = Layout;

const AppLayout: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const location = useLocation();
    const [selectedKeys, setSelectedKeys] = useState([location.pathname]);

    useEffect(() => {
        setSelectedKeys([location.pathname]);
    }, [location.pathname]);

    const menuItems: Required<MenuProps>['items'] = [
        {
            key: '/',
            label: <Link to='/'>Главная</Link>,
            icon: <HomeOutlined />,
        },
        {
            key: '/year',
            label: <Link to='/year'>Год</Link>,
            icon: <CalendarOutlined />,
        },
        {
            key: '/form',
            label: <Link to='/form'>Заполнить форму</Link>,
            icon: <FormOutlined />,
        },
        {
            key: '/formdata',
            label: <Link to='/formdata'>Данные формы</Link>,
            icon: <FileTextOutlined />,
        },
    ];

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider
                collapsible
                collapsed={collapsed}
                onCollapse={(value) => setCollapsed(value)}
            >
                <Menu
                    theme='dark'
                    defaultSelectedKeys={[location.pathname]}
                    selectedKeys={selectedKeys}
                    mode='inline'
                    items={menuItems}
                />
            </Sider>
            <Layout>
                <Content style={{ padding: '3rem', background: '#f0f4fa' }}>
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    );
};

export default AppLayout;
