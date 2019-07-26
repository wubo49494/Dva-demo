import React from 'react'

// 下面这个是从 dva 里面拿那个 connect 功能
import { connect } from 'dva'



import ProductList from '../components/ProductList'


// 这里是首页的主体，现在是const 到es6 一般会用 class 来 class XXX extends XXX之类的
// 返回最下面的 export default 之类肯定也是导出这表单列表 主体本质上是一个方法/构造函数，里面带着两个参数 dispatch 和 products
const IndexZhuti = ({ dispatch, shujuSource }) => {

  function handleDelete(id) {
    console.log(id)
    // dispatch 像是一個提交，里面的type表示是哪个model的命名空间！是命名空间，不是仓库的文件名，是namespace,  需要注意的是 dispatch 是在组件 connect Models以后，通过 props 传入的。
    // payload 装载，载荷，默认用这个来装数据
    dispatch({
      type: 'nameProducts/delete',
      zhuangzai: id
    })
  }

  return (
    <div>
      <h2>表单列表</h2>
      {/* 标准的組件， onDelete和products 是要傳過去的 props 那邊肯定有要接收這兩個的 */}
      <ProductList 
        onDelete={handleDelete}
        products={shujuSource}
      />
    </div>
  )
}

// export 表单列表
// 下面是难点，首先是 connect 连接，把 products 的数据放到
// 使用connect方法将model和组建绑定(注意使用的时候应该使用es6的箭头函数来绑定或者传入一个函数)，这样组件就可以使用model里面的数据同时model也可以接受组件dispatch过来的action
// export default connect(从 model 的 state 中获取数据)(要将数据绑定到哪个组件)
// 其中，connect（函数）（）
// 其中， 函数 =  （） => ({})
// 其中， 这里 =   （{命名空间}）=> ({ 变量：命名空间的数据 })

var a = connect(
  ({ nameProducts }) => ({
    shujuSource: nameProducts
  })
)(IndexZhuti)


// connect()(类)，这个方法调用之后是一个跟model双向绑定后的东西，所以要么直接导出，要么接收后再导出，
export default a