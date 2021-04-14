import React, { useState } from 'react';
import { Layout, Menu, Badge } from 'antd';
import {
    ShoppingCartOutlined,
} from '@ant-design/icons';
import Carrito from '../pages/Carrito'
const { Header } = Layout;

export default function HeaderHome(){
    const [isModalVisible, setIsModalVisible] = useState(false);
    const showCarrito = () => {
        setIsModalVisible(true);
    }
    return(
        <div>
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                    <Menu.Item key="1">Logo</Menu.Item>
                    <Menu.Item key="2">Productos</Menu.Item>
                    <Menu.Item key="3" style={{float: 'right'}}><Badge count={0} onClick={showCarrito}><ShoppingCartOutlined style={{fontSize: '32px', color: '#fff'}} /></Badge></Menu.Item>
                </Menu>
            </Header>
            <Carrito show={isModalVisible} />
        </div>);    
}