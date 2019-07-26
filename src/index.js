import dva from 'dva';
import './index.css';

// 1. Initialize
// const app = dva();
const app = dva()
// 新建app

// 2. Plugins  這個應該是插件
// app.use({});

// 3. Model   
// app.model(require('./models/example').default);

// 這裡很關鍵，這裡主要是存儲一個倉庫的地方，這個倉庫名叫做 products，注意這裡是加載文件名！！！ 文件名！！！
// 現在改成 canku, 第一步 ok，现在我去canku文件看看
app.model(require('./models/canku').default)
app.model(require('./models/users').default)



// 4. Router
app.router(require('./router.js').default);

// 上面是加载路由，看完model仓库可以过来看看啦



// 5. Start
app.start('#root');


