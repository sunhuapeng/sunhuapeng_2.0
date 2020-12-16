<html>
    <p class="name" style="display:none;">typescript 笔记</p>
</html>
<html>
    <p class="tag" style="display:none;">前端</p>
</html>
<html>
    <p class="coverPic" style="display:none;">http://chuantu.xyz/t6/741/1605668666x-1224475230.png</p>
</html>
<html>
   <p class="reprint" style="display:none;"></p>
</html>
<html>
   <p class="case" style="display:none;">基础案例.html</p>
</html>
<html>
    <p class="author" style="display:none;">孙华鹏</p>
</html>
<html>
    <p class="date" style="display:none;">1604235488000</p>
</html>
<html>
    <p class="id" style="display:none;">1604235488000</p>
</html>
<html>
    <p class="brief" style="display:none;">Typescript是一种由微软开发的、开源的编程语言，自2012年10月发布首个公开版以来，它已得到了人们的广泛认可</p>
</html>


### 声明空间

##### 类型声明空间

类型声明空间包含用来当做类型注解的内容

```typescript
// 类型声明空间
interface Bar{}
```

可以将这些作为类型注解使用

```typescript
let bar: Bar
...
```



虽然定义了interface Bar  却不能把它当做变量使用

```typescript
interface Foo{}
let foo = Foo // “Foo”仅表示类型，但在此处却作为值使用。
```

同理，在定义在变量声明空间中的变量，也不可用于类型声明空间

```typescript
const foo = {}
let bar: foo  // “foo”表示值，但在此处用作类型。
```

#### 模块

##### 全局模块

> 如果在相同的项目中，新建一个foo.ts， 并在foo.ts定一个interface 或者变量，在其他ts文件中是允许访问定义的interface

foo.ts

```typescript
interface Foo {}
```

bar.ts

```typescript
let bar: Foo // 正确 可以访问到全局声明空间
```

这样使用全局变量是有风险的，会与其他ts代码有冲突



##### 文件模块

文件模块也被称为外部模块，可以创建一个本地作用域，而不影响其他模块的变量

foo.ts

```typescript
export interface Foo {}
```

bar.ts

```typescript
import {Foo} from './foo'

let bar: Foo
```

##### 

##### 接口 interface

```typescript
interface Person {
  name: string,  // 姓名
  gender: string,  // 性别
  age: number, // 年龄
  healthy: boolean, // 健康状况
  family: string[] // 家庭
}

let xiaoMing: Person 
xiaoMing = {
  name: '小明',
  gender: '男',
  age: 99,
  healthy: true,
  family: ['father', 'mother', 'sister']
}
```

其他几种情况

```typescript
interface Animal {
  name: string,
  type: string
}

// 缺少项
let dog: Animal 
dog = {
  // 类型 "{ name: string; }" 中缺少属性 "type"
  name: '旺财'
}
// 类型错误
let cat: Animal 
cat = {
  name: '花花',
  type: true // 不能将类型“boolean”分配给类型“string”
}
```



如果将type定义为非必要属性 可以使用关键字‘?’

```typescript
interface Animal {
  name: string,
  type?: string
}


let cat: Animal 
cat = {
  name: '花花',
  type: '英短猫' 
}


```



#####   泛型

函数reverse接受䘝类型为T （注意在reverse<T>中的类型参数）的数组items:T[]，返回一个类型为T的数组（注意：T[]）。因为函数reverse的返回值类型与它接收的参数的类型一样，所以传入 `var sample = [1,2,3]` 时，typescript就能推断出reverse为number[]的类型，从而能为你提供类型安全。与此相似，当你想函数reverse传入一个类型为string[]类型的数组时，typescript也能推断出返回结果也是string[]类型的，而且是类型安全的

```typescript
function revares<T>(items: T[]): T[] {
  const toreturn = []
  for (let i = items.length - 1; i >= 0; i--) {
    toreturn.push(items[i])
  }
  return toreturn
}

const sample = [false, true]
const reversed = revares(sample)
console.log(reversed) // 3，2，1
```



交叉类型

```typescript
function extend<T,U>(first: T, second: U): T & U {
  const result = <T & U> {}
  for(let id in first) {
    (<T>result)[id] = first[id]
  }
  for(let id in second) {
    if(!(result as any).hasOwnProperty(id)) {
      (<U>result)[id] = second[id]
    }
  }
  return result
}
const x = extend({a: 'hello'}, {b: 42})
console.log(x)  // {a: "hello", b: 42}
```

























































