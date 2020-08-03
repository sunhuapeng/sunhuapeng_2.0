/*
 * @Author: sunhuapeng
 * @Date: 2020-03-03 10:30:15
 * @LastEditors: sunhuapeng
 * @LastEditTime: 2020-08-03 08:58:02
 */
// vue.config.js
module.exports = {
    chainWebpack: config => {
      config.module
        .rule('md')
        .test(/\.md/)
        .use('html-loader')
        .loader('html-loader')
        .end()
        .use('markdown-loader')
        .loader('markdown-loader')
        .end()
    }
};
