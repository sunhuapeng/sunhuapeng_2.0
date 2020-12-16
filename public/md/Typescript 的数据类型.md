<html>
    <p class="name" style="display:none;">Typescript 的数据类型</p>
</html>
<html>
    <p class="tag" style="display:none;">前端|原创</p>
</html>
<html>
    <p class="coverPic" style="display:none;">http://chuantu.xyz/t6/741/1605668666x-1224475230.png</p>
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
    <p class="date" style="display:none;">1604020127000</p>
</html>
<html>
    <p class="id" style="display:none;">1604020127000</p>
</html>
<html>
    <p class="brief" style="display:none;">Typescript是一种由微软开发的、开源的编程语言，自2012年10月发布首个公开版以来，它已得到了人们的广泛认可</p>
</html>




#### Typescript 的数据类型

1. 布尔类型 boolean
2. 数字类型 number
3. 字符串类型 string
4. 数组类型 array
5. 元组类型  tuple （属于数组的一种）
6. 枚举类型 enum
7. 任意类型  any 
8. null 和 undefined never的子类型
9. void 类型 表示没有类型
10. never 不存在值的类型



#### 类型的应用

##### 布尔类型 

```typescript
// 未规定类型
let bool
bool = false
bool = 1  
console.log(bool) // 1xxxxxxxxxx let bool = true// bool = ''  // 不能将类型“string”分配给类型“boolean”bool = false// 未规定类型let boolbool = falsebool = 1  console.log(bool) // 1typescript
```

```typescript
//  定义的时候默认赋值布尔值
let bool = true
bool = 1 // 不能将类型“number”分配给类型“boolean”。
console.log(bool) // 编译不通过
```

这段代码片段相当于规定了 `bool:boolean`

```typescript
 let bool: boolean
 bool = false
 bool = true
 console.log(bool) //true
```

#### 

##### 数字类型

```typescript
 let num:number

 num = 0

 console.log(num)  // 0
```



##### 字符串类型

```typescript
 let str: string
 str = ''
 str = 'is a string'

 console.log(str) // is a string
```



##### 数组类型

定义数组的时候需要规定数组内每一项的数据类型

未规定数组内每一项的数据类型

```typescript
let arr: [] = []

arr.push(1)  // 类型“number”的参数不能赋给类型“never”的参数
```



定义数组时规定数组内每一项数据类型

规定数组内每一项的数据类型

```typescript
// 未规定数组内每一项的数据类型
let arr: string[] = []

arr.push('123')  // 类型“number”的参数不能赋给类型“never”的参数

// 在规定数组内每一项的数据类型之后再push其他数据类型
arr.push(1) // 类型“number”的参数不能赋给类型“string”的参数。

```



如果需要数组内有不同的数据类型可以使用元组类型

##### 元组类型

```typescript
let arr:[number, string] = [] 
//不能将类型“[]”分配给类型“[number, string]”。
//源具有 0 个元素，但目标需要 2 个。

// 元组类型规定数据类型的数据源数量需要跟定义的数量一样
let arr:[number, string] = [1,'1']
```



数组定义元祖类型后，只能添加规定的数据类型

```typescript
// 元组类型规定数据类型的数据源数量需要跟定义的数量一样
let arr:[number, string] = [1,'1']
arr.unshift('0')
arr.push(2)
arr.push('2')
console.log(arr)  // ["0", 1, "1", 2, "2"]
```



##### 枚举类型

```
 
enum Color { blue, red, yellow }
console.log(Color)
/**
 打印结果
    {
        0: "blue"
        1: "red"
        2: "yellow"
        blue: 0
        red: 1
        yellow: 2
    }
 */
```

对Color取值

```typescript

enum Color { blue, red, yellow }
console.log(Color)
/**
 打印结果
    {
        0: "blue"
        1: "red"
        2: "yellow"
        blue: 0
        red: 1
        yellow: 2
    }
 */

 let c:Color = Color.blue
 console.log(c) // 0
```



修改下标

```typescript
enum Color { blue, red = 3, yellow }
let c: Color = Color.yellow
console.log(c) // 4 (修改后的下标)

```



##### 任意类型

任意类型any定义后可以对变量进行任意赋值

```typescript
 let a:any = null
 a = 1
 console.log(a)  // 1
```



##### null和undefined

对于需要明确表明不可用的情况，null和undefined都不建议

规定其他类型但不为其赋值

```typescript
var num:number
console.log(num) // 编译报错：在赋值前使用了变量“num”  打印undefined
```

规定格式为undefined，将不能再赋值其他数据类型

```typescript
let num:undefined
console.log(num)  // undefined
num = 1  // 不能将类型“1”分配给类型“undefined”

let str:undefined
num = str  // 编译正常
console.log(num) // undefined

```



对于不确定变量规定undefined

```typescript
var foo = { x: 123, y: undefined }
console.log(foo)
foo = {  // 类型 "{ x: number; }" 中缺少属性 "y"，但类型 "{ x: number; y: undefined; }" 中需要该属性。
  x: 456
}

// 可选变量
let foo: {x: number, y?: number | undefined | null} = {x: 1}
```



##### void类型

规定函数没有返回值

```typescript
function fun(l: number): void {
  console.log(l) // 10
}
const l: number = 10
fun(l)
```



规定函数具有规范类型的返回值

```typescript
function fun(x: number, y: number): number {
  return x + y
}

const x = 2
const y = 3
const sum = fun(x,y)
console.log(sum) // 5
```



##### never

> 程序语言的设计确实应该存在一个底部类型的概念，当你在分析代码流时，这回是一个理所当然存在的类型。typescript就是这样一种分析代码流的语言，因此他需要个可靠的类型来代表哪些永远不会发生的事情。
>
> never类型就是Typescript中的底部类型，它自然被分配的一些例子如下
>
> - 一个从来不会有返回值的函数，例如，如果函数内含有 `while(true){}` 的话。
> - 一个总会抛出错误的函数，如 `function foo () {throw new Error('Not Implemented')}` ，foo的返回类型就是never

```typescript
var a:never
a = (()=>{
  return '' // 不能将类型“string”分配给类型“never”。
})()
```

可以使用 `throw **new** *Error*('错误')` 捕捉错误

```typescript
var a:never
a = (()=>{
  // return '' // 不能将类型“string”分配给类型“never”。
  throw new Error('错误')
})()
```

index.js:114 Uncaught Error: 错误



实际操作的案例

```typescript
function foo(x: string | number): boolean {
  if (typeof x === 'string') {
    return true
  } else if (typeof x === 'number') {
    return false
  }
  // 如果不是never类型的，则会报错(函数缺少结束 return 语句，返回类型不包括)
  // 并非在所有条件下都有返回值（严格的空检查）
}
```



正确的操作方法

```typescript
function fail (message: string): never {
  throw new Error(message)
}


function foo(x: string | number): boolean {
  if (typeof x === 'string') {
    return true
  } else if (typeof x === 'number') {
    return false
  }
  // 如果不是never类型的，则会报错(函数缺少结束 return 语句，返回类型不包括)
  // 并非在所有条件下都有返回值（严格的空检查）

  return fail('Unexhaustive')
}

let f = foo('123')
console.log(f) // true

```

如果将 if语句中的return都去掉，控制台将报错 

```typescript

function fail (message: string): never {
  throw new Error(message)
}


function foo(x: string | number): boolean {
  if (typeof x === 'string') {
    // return true
  } else if (typeof x === 'number') {
    // return false
  }
  // 如果不是never类型的，则会报错(函数缺少结束 return 语句，返回类型不包括)
  // 并非在所有条件下都有返回值（严格的空检查）

  return fail('Unexhaustive')
}

let f = foo('123')
console.log(f) // Uncaught Error: Unexhaustive

```



##### 字面量类型

`字面量是javascript本身提供的一个准确变量`

可以将一个字符串字面量作为一个类型来使用

```typescript

// 创建一个foo变量，字面量值为Hello的变量
let foo: 'Hello'

/* foo = 'bar'  // 不能将类型“"bar"”分配给类型“"Hello"” */
/* 它们本身并不是很实用，但是可以在一个联合类型中组合创建一个强大且实用的抽象概念*/

type CarDirection = 'Top' | 'Bottom' | 'Left' | 'Right'

function move(offset: number, direction: CarDirection){
  // Do something...
}

move(1, 'Top')  // 正确
move(1, 'center') // 错误 类型“"center"”的参数不能赋给类型“CarDirection”的参数。
```

























































