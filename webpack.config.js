/*
 * @Author: sunhuapeng
 * @Date: 2020-07-31 17:33:01
 * @LastEditors: sunhuapeng
 * @LastEditTime: 2020-07-31 17:33:41
 */ 
module:{
  rules:[
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
  ]
},