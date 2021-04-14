import React, {useState} from 'react';
import { Modal, Row, Col  } from 'antd';
import '../css/content.css';

export default function Carrito(props){
    const [isModalVisible, setIsModalVisible] = useState(false);
    console.log("props_show: "+props.show);
    const arr_prods  = localStorage.getItem('productos_glob');
    const getItems = JSON.parse(arr_prods);

    const handleOk = () => {
        console.log('sale');
        //setIsModalVisible(false);
      };
    
      const handleCancel = () => {
        console.log('sale');
       // setIsModalVisible(false);
      };

      const listItems = getItems.map((items) =>
        <div>
            <Row>
                <Col span={12}>
                    <p>{items.title}</p>
                </Col>
                <Col span={12}>
                    <p style={{textAlign:'right'}}>Price: ${items.price}</p>
                </Col>
            </Row>
        </div>
     );

     function total(){
        var suma = 0;
        if(getItems.length != 0){
            getItems.forEach (function(numero){
                suma += numero.price;
            });
            return suma;
     }
    }

    return(
    <div>
        <Modal title="Shop card list" visible={props.show} onOk={handleOk} onCancel={handleCancel}>
        <div>
        {
           listItems
        }
        </div>
        <h4>Total: ${total()}</h4>
        </Modal>
    </div>);    
}