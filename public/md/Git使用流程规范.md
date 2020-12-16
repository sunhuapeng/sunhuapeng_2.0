<html>
    <p class="name" style="display:none;">Git使用流程规范</p>
</html>
<html>
    <p class="tag" style="display:none;">前端</p>
</html>
<html>
    <p class="coverPic" style="display:none;">http://chuantu.xyz/t6/741/1605704186x1033347913.jpg</p>
</html>
<html>
   <p class="reprint" style="display:none;"></p>
</html>
<html>
   <p class="case" style="display:none;"></p>
</html>
<html>
    <p class="author" style="display:none;">孙华鹏</p>
</html>
<html>
    <p class="date" style="display:none;">1605704213421</p>
</html>
<html>
    <p style="display:none">获取时间戳Date.parse(new Date());</p>
</html>
<html>
    <p class="id" style="display:none;">1605704213421</p>
</html>
<html>
    <p class="brief" style="display:none;">GIT使用规范的意义:提高团队整体的交流和运作效率，使用规范 能够独立部署的工程使用master和dev两个主干分支,master分支对应线上版本,dev分支对应开发版本; 作为依赖库使用的工作只需要一个master分支...</p>
</html>


### Git使用流程规范

##### 第一步：将仓库代码拉取到本地

> 克隆远程仓库地址

``` bash
git clone git@gitlab.uniubi.com:sunhuapeng/git_play.git
```



> 更新master分支代码

```bash
git checkout dev
```



> 创建本地分支

```bash
git checkout -b my-branch 	
```

***本地分支命名规范：`feat_shp_v1.1.1 `***

feat：分支标的

shp：自己分支的标识

v：当前分支为某个版本号



##### 第二步：提交



> 将修改的文件添加到暂存区

``` bash
git add -A
```

```bash
git add .
```

add 命令 -A将添加所有修改过的文件，包括未跟踪文件



> 取消添加的文件

取消全部添加的文件

```bash
git reset
```

取消某一个添加的文件

```bash
git reset 某个文件名
```



> 提交到本地仓库

```bash
git commit -am '提交信息'
```



> 取消本地提交

撤回到暂存区

```bash
git reset --soft HEAD^
```

撤回到挂起的更改

```bash
git reset HEAD^
```



> 查看已提交内容

```bash
git diff --staged 某个节点
```



> 拉取远端合并分支的代码

```bash
git pull origin dev --rebase
```

***建议使用`git pull --rebase` ，禁止直接使用 `git pull`***

两者区别在于拉取后的节点顺序不一样或者多节点

`git pull`

![没加--rebase](http://chuantu.xyz/t6/741/1605681724x1700338641.png)

`git pull --rebase`

![](http://chuantu.xyz/t6/741/1605681926x1031866013.png)



> 推送到远程本地仓库

```bash
git push 
```

新建分支后首次提交会提醒

```bash
git push --set-upstream origin my-branch
```

将在远程创建一个同名分支

##### 工作流程

![](http://chuantu.xyz/t6/741/1605689757x1700338641.jpg)



为保证git分支流向的单一性、可操作性，分支一律使用merge进行合并，`my-brach `都将使用 `git pull --rebase `进行代码的拉取



> 分支说明

| 分支名称 | 说明         | 备注                    |
| -------- | ------------ | ----------------------- |
| master   | 主分支       | 受保护                  |
| dev      | 合并分支     | 流向test分支            |
| test     | 测试环境分支 | 来源可为dev和bug-master |
| inner    | 开发环境分支 |                         |
| my-brach | 个人分支     |                         |







































































































