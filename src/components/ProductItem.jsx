import React, { Component } from 'react'
import { Card, Button, Typography  } from 'antd';
import { AiOutlineShoppingCart } from "react-icons/ai";
const { Meta } = Card;

export default class ProductItem extends Component {
    
    render() {
        const {item} = this.props
        return (
            <div>
                <Card onClick={()=>this.props.openModal(item)}
                    hoverable
                    style={{
                        width: '100%',
                    }}
                    cover={<img alt="example" src={item.image} />}
                >
                    <Meta title={item.name} description={ item.price + '$'} />
                    <Button 
                        type="primary" 
                        style={{ marginTop: '10px', background:'black', borderColor:'black'}}
                        
                    >
                        add to carts
                        <AiOutlineShoppingCart />
                    </Button>
                </Card>

            </div>
        )
    }
}
