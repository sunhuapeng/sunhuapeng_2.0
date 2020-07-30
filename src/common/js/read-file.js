/*
 * @Author: sunhuapeng
 * @Date: 2020-07-30 13:34:27
 * @LastEditors: sunhuapeng
 * @LastEditTime: 2020-07-30 15:10:15
 */
import axios from "axios";
class ReadFile {
  fileList = [];
  tag = "";
  constructor(tag) {
    this.tag = tag;
    const filenameList = require.context("../../../public/md", true, /.(md)$/).keys();
    if( filenameList.length!==0 ) {
      filenameList.forEach((filename) => {
        let file = filename.slice(2);
        this.getFile(file);
      });
    }
  }
  getFile(file) {
    axios.get(`md/${file}`).then((res) => {
      let Item,
        dom = document.createElement("div");
      dom.innerHTML = res.data;
      // 标签分为：前端,设计，笔记，小记，美文
      Item = {
        // 文章名称
        name: dom.getElementsByClassName("name")[0].innerHTML || "",
        // 文章标签
        tag: dom.getElementsByClassName("tag")[0].innerHTML || "",
        // 文章作者
        author: dom.getElementsByClassName("author")[0].innerHTML || "",
        // 文章日期
        date: dom.getElementsByClassName("date")[0].innerHTML || "",
        // 文章链接
        reprint: dom.getElementsByClassName("reprint")[0].innerHTML || "",
        // 文章简介
        brief: dom.getElementsByClassName("brief")[0].innerHTML || "",
        // 文章图片
        coverPng: dom.getElementsByClassName("coverPic")[0].innerHTML || "",
        // 文章案例
        case: dom.getElementsByClassName("case")[0] || "",
        id: dom.getElementsByClassName("id")[0] || "",
        fileName: file,
      };
      this.fileList.push(Item);
    });
  }
}

export default ReadFile;
