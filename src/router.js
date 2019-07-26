import React from 'react'
import { Router, Route, Switch } from 'dva/router'
import IndexPage from './routes/IndexPage'

// 首页！！！！组件的首页！！index
// 下面这个 routes 文件夹放的都是各个组件的 首页，比如 User，Commont，Post之类的
import ZujianIndex from './routes/ZujianIndex'

import UsersPage from './routes/UsersPage'


// 路由模块比较简单啦，主要是下面 这个 history  实参就是路径 /# 后面的东西，这里面是有个哈希 #的

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        {/* localhost：8000/#/ */}
        {/* 在/# 后面开始判断是啥， */}
        <Route path="/" exact component={IndexPage} />


        {/* 路由標籤的功能，path 用戶請求哪個路徑，然後 exact 返回給一個組件叫做 Products, 这里是看上面 import 了哪个，主要是组件的首页！！！就是一个组件的首页会出现的 */}
        {/* localhost:8000/#/products */}
        <Route 
          path="/products" 
          exact component={ZujianIndex} />

        <Route
          path="/users"
          exact component={UsersPage} />
      </Switch>
    </Router>
  )
}

export default RouterConfig
