import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Avatar, message  } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import '../css/content.css';
import axios from 'axios';
import * as Constants from '../../utils/constants';
import {
    Link
} from "react-router-dom";

const { Meta } = Card;
const success = () => {
    message.success('Producto agregado al carrito');
};

export default function Home(){
    const [listItems, setListItems] = useState([]);

    function fetchData(){
        axios.get(
          Constants.GET_PRODUCTS
        ).then(resp=>{
          const arr = resp.data;
          console.log(arr);
          setListItems(arr);
        })  
        .catch(error=>{
          console.warn(error);
        });
      }
    
      useEffect(() => {
        fetchData();
    }, []);

    const arr_prods = [];
    const addToCart = (title, price) => {
        arr_prods.push({ 'title': title, 'price': price });
        console.log(arr_prods);
        localStorage.setItem('productos_glob', JSON.stringify(arr_prods));
        success();
    }

    return(
    <div>
        <Row gutter={[16, 24]}>
            {
                listItems.map((items) =>
                    <Col className="gutter-row" span={6} key={items.id}>
                        <div>
                                <Card
                                    hoverable
                                    style={{ width: 240 }}
                                    cover={
                                        <Link to={"/detalle/"+items.id}><img
                                        alt="example"
                                        src={items.image}
                                        style={{width:'100%', maxWidth: '240px', height:'250px', objectFit: 'contain'}}
                                    /></Link>
                                    }
                                    actions={[
                                    <h4>${items.price}</h4>,
                                    <a onClick={() => addToCart(items.title, items.price)}><ShoppingCartOutlined key="edit" /></a>,                        
                                    ]}
                                >
                                    <Meta
                                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                    title={items.title}
                                    />
                                </Card>
                        </div>
                    </Col>
                    )
            }
        </Row>
    </div>);    
}