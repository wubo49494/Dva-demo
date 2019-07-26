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

// 這裡很關鍵，這裡主要是存儲
app.model(require('./models/products').default)

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
