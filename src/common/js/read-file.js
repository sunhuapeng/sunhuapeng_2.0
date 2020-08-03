/*
 * @Author: sunhuapeng
 * @Date: 2020-07-30 13:34:27
 * @LastEditors: sunhuapeng
 * @LastEditTime: 2020-08-03 16:49:43
 */
import axios from "axios";
class ReadFile {
  fileList = [];
  filenameList = [];
  tag = "";
  callback = null;
  constructor() {}
  init(callback) {
    this.fileList = [];
    this.callback = callback;
    this.filenameList = require
      .context("../../../public/md", true, /.(md)$/)
      .keys();
    if (this.filenameList.length !== 0) {
      for (let i = 0; i < this.filenameList.length; i++) {
        let filename = this.filenameList[i];
        let file = filename.slice(2);
        this.getFile(file, i === this.filenameList.length - 1);
      }
    }
  }
  getFile(file, last) {
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
        case: dom.getElementsByClassName("case")[0].innerHTML || "",
        id: dom.getElementsByClassName("id")[0].innerHTML || "",
        fileName: file,
      };
      this.fileList.push(Item);
      this.fileList.sort((a,b)=>{
        return Number(b.date) - Number(a.date)
      })
      if (this.callback) {
        if (last) {
          this.callback(this.fileList);
        }
      }
    });
  }
  getArticleByTag(tag) {
    let articleList = [];
    if (tag) {
      this.fileList.find((item) => {
        const tagArr = item.tag.split("|");
        if (tagArr.indexOf(tag) !== -1) {
          articleList.push(item);
        }
      });
    } else {
      articleList = this.fileList;
    }
    return articleList;
  }
  getArticleById(id) {
    let file = null;
    this.fileList.find((item) => {
      if (item.id === id) {
        file = item;
      }
    });
    return file;
  }
}

export default ReadFile;
