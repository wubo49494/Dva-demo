import React from 'react'
import { connect } from 'dva'
import ProductList from '../components/ProductList'

// const Products = (props) => (
//   <h2>List of Products</h2>
// )

const Products = ({ dispatch, products }) => {

  function handleDelete(id) {
    console.log(id)
    // dispatch 像是一個提交，
    dispatch({
      type: 'products/delete',
      payload: id
    })
  }

  return (
    <div>
      <h2>List of Products</h2>
      {/* 標準的組件， onDelete和products 是要傳過去的 props 那邊肯定有要接收這兩個的 */}
      <ProductList 
        onDelete={handleDelete}
        products={products}
      />
    </div>
  )
}

// export default Products
export default connect(({ products }) => ({
  products
}))(Products)