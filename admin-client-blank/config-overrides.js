const {override, fixBabelImports, addLessLoader} = require('customize-cra');


module.exports = override(
    // antd 按需打包：babel-plugin-import实现
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    addLessLoader({
            javascriptEnabled: true,
            modifyVars: {'@primary-color': '#1DA57A'},
    }),
);
