import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.less'

import App from "./app";
import storageUtils from "./utils/storageUtils";
import memoryUtils from "./utils/memoryUtils";

// 读取local中保存user, 保存到内存中
const user = storageUtils.getUser()
memoryUtils.user = user

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);

