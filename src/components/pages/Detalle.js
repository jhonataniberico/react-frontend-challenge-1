import React, { useState, useEffect } from 'react';
import { Row, Col, Slider, Image, Card, Avatar, Button  } from 'antd';
import { EditOutlined, ShoppingCartOutlined, SettingOutlined } from '@ant-design/icons';
import '../css/content.css';
import * as Constants from '../../utils/constants';
import axios from 'axios';

const style = { background: '#0092ff', padding: '8px 0' };

const { Meta } = Card;

export default function Detalle(props){
    const [product, setProduct] = useState([]);
    const id_prod = props.match.params.id;

    function fetchData(){
        axios.get(
          Constants.GET_PRODUCT_DETAIL+id_prod
        ).then(resp=>{
          const arr = resp.data;
          console.log(arr);
          setProduct(arr);
        })  
        .catch(error=>{
          console.warn(error);
        });
      }
    
      useEffect(() => {
        fetchData();
    }, []);
    return(
    <div>
        <Row>
            <Col className="gutter-row" span={8}>
                <div>
                    <Image
                    width={400}
                    src={product.image}
                    />
                </div>
            </Col>
            <Col className="gutter-row" span={8}>
                <div style={{padding: '80px 20px 0 0'}}>
                    <h2>{product.title}</h2>
                    <p>{product.description}
                    </p>
                    <h4>{product.category}</h4>
                    <Button type="primary" htmlType="submit">
                    Add to card
                    </Button>
                </div>
            </Col>
        </Row>
    </div>);    
}