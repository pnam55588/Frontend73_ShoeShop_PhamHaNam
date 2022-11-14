import React, { Component } from 'react'
import ProductItem from './ProductItem'
import { Col, Row, Divider } from 'antd';
export default class ProductList extends Component {
    renderProducts = () => {
        const { productsData,openModal } = this.props
        return productsData?.map(item =>{
            return <Col span={7}><ProductItem openModal={openModal} item={item} key={item.id}/></Col>
        })
    }
    render() {
        return (
            <div >
                <Row justify="space-around">
                    {this.renderProducts()}
                </Row>

            </div>
        )
    }
}
