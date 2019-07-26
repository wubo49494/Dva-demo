import React from 'react'
import PropTypes from 'prop-types'
import {Table, Popconfirm, Button} from 'antd'

const ProductList = ({ onDelete, products }) => {
  // 定義表格頭部內容
  const columns = [{
    title: 'Name',
    dataIndex: 'name'
  }, {
    title: 'Actions',
    render: (text, record) => {
      return (
        <Popconfirm 
          // 彈出的氣泡窗口的標題內容
          title="Delete?" 
          // 那個 “ok” 的點擊方法，
          onConfirm={
            // 下面其實就是調用了 onDelete 方法
            () => onDelete(record.id)
            }>
          <Button type='Delete'>Delete</Button>
        </Popconfirm>
      )
    }
  }]

  // 返回 html 內容
  return (
    <Table 
      dataSource={products} 
      columns={columns} 
    />
  )
}

ProductList.propTypes = {
  onDelete: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired
}

export default ProductList