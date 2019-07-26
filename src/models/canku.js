export default {
  // 这个 namespace 是命名空间的，名字，是对仓库里面的内容一个统称，这里原来是 products，我们改下
  namespace: 'namespace-products',

  // state 就是这个命名空间的 数据 
  state: 
     [
      { name: 'dva', id: 1, key: 'dva'},
      { name: 'antd', id: 2, key: 'antd'},
      { name: '3333', id: 3, key: 'xuyaode'}
    ],


  // reducers 就是简单理解为 调用 auction ，里面会放很多方法，也就是 mutation , 然后这些方法都是针对当前和这个命名空间所设定的.
  reducers: {

    // 删除方法，第一个参数是 本model仓库的 state 内容，第二个参数一般带这个 {payload: id}, 到时候谁调用和这个方法 必然会带一个 {payload：id值} 来
    'delete'(state, {payload:id}) {
      console.log(id)
      return state.filter(item => item.id !== id)
    }
  }
}