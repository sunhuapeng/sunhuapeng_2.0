/*
 * @Author: sunhuapeng
 * @Date: 2020-03-03 10:30:15
 * @LastEditors: sunhuapeng
 * @LastEditTime: 2020-07-31 16:40:11
 */
// vue.config.js
const API_HOSTNAME = process.env.VUE_APP_API_HOSTNAME;
const API_PORT = process.env.VUE_APP_API_PORT;

module.exports = {
  module: {
    rules: [
      {
        test: /\.md$/,
        use: [
          {
            loader: "html-loader",
          },
          {
            loader: "markdown-loader",
            options: {},
          },
        ],
      },
    ],
  },
};
