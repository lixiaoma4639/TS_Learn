// let numStr0 : (number | string)[] = [1, 2, 3, 'a' , 'b']
// console.log(numStr0)
// var numStr1 : (number | string)[] = ['a', 'b']
// console.log(numStr1)
// console.log(numStr1)

//对各种类型进行变量话
type CustomArray = (number | string)[]
let numStr2 : CustomArray = [1, 2, 4, 'a' , 'b']
console.log(numStr2)
var numStr3 : CustomArray = ['a', 'b', 'c']
console.log(numStr3)