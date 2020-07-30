<html>
    <p class="name" style="display:none;">css选择器练习·动态五星好评</p>
</html>
<html>
    <p class="tag" style="display:none;">前端</p>
</html>
<html>
    <p class="coverPic" style="display:none;">https://s2.ax1x.com/2019/11/13/MGZaoF.jpg</p>
</html>
<html>
   <p class="reprint" style="display:none;"></p>
</html>
<html>
   <p class="case" style="display:none;">五星好评.html</p>
</html>
<html>
    <p class="author" style="display:none;">孙华鹏</p>
</html>
<html>
    <p class="date" style="display:none;">1497327029000</p>
</html>
<html>
    <p style="display:none">获取时间戳Date.parse(new Date());</p>
</html>
<html>
    <p class="id" style="display:none;">1497327029000</p>
</html>
<html>
    <p class="brief" style="display:none;">css基础：主要使用伪类选择器和input单选框的点击状态实现可选择的五星好评</p>
</html>

> 成品图样

![image](https://s2.ax1x.com/2019/11/13/MGZkRA.gif)

> html代码

```
<div class="box">
    <input type="radio" id="one" name="check">
    <label for="one">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="56.5px" height="53.5px">
            <path />
        </svg>
    </label>
    <input type="radio" id="two" name="check">
    <label for="two">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="56.5px" height="53.5px">
            <path />
        </svg>
    </label>
    <input type="radio" id="three" name="check">
    <label for="three">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="56.5px" height="53.5px">
            <path />
        </svg>
    </label>
    <input type="radio" id="four" name="check">
    <label for="four">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="56.5px" height="53.5px">
            <path />
        </svg>
    </label>
    <input type="radio" id="five" name="check" checked>
    <label for="five">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="56.5px" height="53.5px">
            <path />
        </svg>
    </label>
</div>

```


name属性为相同单选框只选择一个，checked为默认选择状态，基础css原理利用css各种伪类选择器：~ > + :checked []

> '~' 为选择节点后面所有的兄弟节点


```
<ul>
    <li class="first">第一行</li>
    <li>第二行</li>
    <li>第三行</li>
    <li>第四行</li>
    <li>第五行</li>
    <li>第六行</li>
</ul>
```


```
.first~li{
    color:#f0f;
}
  

```

![image](https://s2.ax1x.com/2019/11/13/MGu076.png)

> '>' 当前节点所有子节点( 不包含孙子节点 )


```
ul>li{
    color:#f0f;
}
```

![image](https://s2.ax1x.com/2019/11/13/MGuo4S.png)

> '+' 选择当前节点的下一个兄弟节点


```
.first + li{
  color:#0f0
}
```

![image](https://s2.ax1x.com/2019/11/13/MGKiv9.png)

> :checked [] 前者input选中效果，后者属性选择器，在接下来的代码中有体现


```
<style>
    /* 父元素，因为~符号只能匹配下面的兄弟节点，所以使用弹性盒的倒序改变五角星的排列方式 */
    .box{
        width:320px;
        height:60px;
        margin:0 auto;
        display:flex;
        flex-direction: row-reverse;
        justify-content: space-between;
    }
    /* 隐藏单选 */
    input{
        display:none;
    }
    /* 五角星默认样式 */
    input[type="radio"]+label>svg>path{
        d: path("M27.500,1.501 L36.069,16.899 L53.497,20.217 L41.365,33.051 L43.567,50.499 L27.500,43.032 L11.433,50.499 L13.635,33.051 L1.503,20.217 L18.931,16.899 L27.500,1.501 ");
        stroke-width:1px;
        fill:none;
        stroke:#333;
    }
    /* 移入，点击选中的元素和下面的元素变为实心 */
    input[type="radio"]+label:hover>svg>path,
    input[type="radio"]+label:hover~input[type="radio"]+label>svg>path,
    input[type="radio"]:checked+label>svg>path,
    input[type="radio"]:checked~input[type="radio"]+label>svg>path{
        stroke-width:0px;
        fill:#f00;
    }
</style>
```
### 

### 
 
### 
> 演示案例