export default {
  namespace: 'products',
  state: 
     [
      { name: 'dva', id: 1, key: 'dva'},
      { name: 'antd', id: 2, key: 'antd'}
    ]
  ,
  reducers: {
    'delete'(state, {payload:id}) {
      console.log(id)
      return state.filter(item => item.id !== id)
    }
  }
}