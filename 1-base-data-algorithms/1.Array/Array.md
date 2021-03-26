## 原型属性

- Array​.length
- Array​.prototype
- Array​.prototype​[@@unscopables]

## 原型方法

### 遍历

- Array​.prototype​.entries() // 
```
// 方法返回一个新的Array Iterator对象，该对象包含数组中每个索引的键/值对。
/*Array Iterator {}
         __proto__:Array Iterator
         next:ƒ next()
         Symbol(Symbol.toStringTag):"Array Iterator"
         __proto__:Object
*/
// 遍历方式
// 1.next()
// 2.for of
// {value: Array(2), done: false}
```
- Array​.prototype​.every() // let flag = arr.every(callback[, thisArg])
- Array​.prototype​.filter() // var newArray = arr.filter(callback(element[, index[, array]])[, thisArg])
- Array​.prototype​.for​Each()
- Array​.prototype​.keys()
- Array​.prototype​.map()
- Array​.prototype​.reduce()
- Array​.prototype​.reduce​Right()
- Array​.prototype​.values()
- Array​.prototype​[@@iterator]()

### 突变（更改原数组）

- Array​.prototype​.pop()
- Array​.prototype​.push()
- Array​.prototype​.shift()
- Array​.prototype​.unshift()

### 生成新数组

- Array​.prototype​.concat()

```
// 浅拷贝
var new_array = old_array.concat(value1[, value2[, ...[, valueN]]])
```

- Array​.prototype​.copy​Within() // arr.copyWithin(target[, start[, end]])
- Array​.prototype​.fill() // arr.fill(value[, start[, end]])
- Array​.prototype​.find() // arr.find(callback[, thisArg])返回数组中满足提供的测试函数的第一个元素的值
- Array​.prototype​.find​Index()
- Array​.prototype​.flat()
- Array​.prototype​.flatMap()
- Array​.prototype​.includes()
- Array​.prototype​.indexOf()
- Array​.prototype​.join()

- Array​.prototype​.last​IndexOf()
- Array​.prototype​.reverse()
- Array​.prototype​.slice()
- Array​.prototype​.some()
- Array​.prototype​.sort()
- Array​.prototype​.splice()
- Array​.prototype​.toLocale​String()
- Array​.prototype​.toString()

* get Array​[@@species]

## 静态方法

- Array.from(arrayLike[, mapFn[, thisArg]])
- Array​.isArray()
- Array.of(element0[, element1[, ...[, elementN]]])

## 创建数组

```
    // 1.[] 字面量
    let arr1 = []

    // 2.Array.from(arrayLike[, mapFn[, thisArg]])// 类数组或可迭代对象中
    let arr2 = Array('foo')

    let arr3 = Array.from([1, 2, 3], x => x + x)

    let arr4 = Array.from(new Set(['foo', window]));

    let arr5 = Array.from(new Map([[1, 2], [2, 4], [4, 8]]));

    function f() {
        return Array.from(arguments);
    }
    f(1, 2, 3);

    Array.from({length: 5}, (v, i) => i);

    // 3.Array.of()
    Array.of(1);         // [1]
    Array.of(1, 2, 3);   // [1, 2, 3]
    Array.of(undefined); // [undefined]

    // 4.new Array[]
    // 5.string.splict(' ')
    // 6. Array.prototype.slice.call(arguments);
```
