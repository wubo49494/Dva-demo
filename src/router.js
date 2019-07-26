import React from 'react'
import { Router, Route, Switch } from 'dva/router'
import IndexPage from './routes/IndexPage'
import Products from './routes/Products'


function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />


        {/* 路由標籤的功能，path 用戶請求哪個路徑，然後 exact 返回給一個組件叫做Products */}
        <Route 
          path="/products" 
          exact component={Products} />
      </Switch>
    </Router>
  )
}

export default RouterConfig
