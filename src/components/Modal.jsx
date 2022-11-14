import React, { Component } from 'react'
import { Col, Divider, Row, Modal, Table} from 'antd';

const columns = [
    {
      title: 'id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'alias',
      dataIndex: 'alias',
      key: 'alias',
    },
    {
      title: 'price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'shortDescription',
      dataIndex: 'shortDescription',
      key: 'shortDescription',
    },
    {
      title: 'quantity',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'image',
      dataIndex: 'image',
      key: 'image',
      render:(image =>{
        return <img src={image} alt="" width={60} height={60}/>
      })
    },
  ];
export default class ModalDetail extends Component {

    render() {
        const dataSource = [this.props.item]
        return (
            <div>
                <Modal
                    title="Basic Modal"
                    open={this.props.showModal}
                    // onOk={this.handleOk}
                    okButtonProps={{ style: { display: 'none' } }}
                    onCancel={this.props.closeModal}
                    width={1000}
                >
                    <Table dataSource={dataSource} columns={columns} pagination={false} />;
                </Modal>
            </div>
        )
    }
}
