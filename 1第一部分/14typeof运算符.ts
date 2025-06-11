//js中的typeof使用
console.log(typeof 'hello')
//ts中如果根据已有变量的值, 获取该值的类型, 来简化类型书写
let p = {x: 1, y: 2}
function formatPoint1(point: {x: number, y: number}) {
    console.log(point)
}
formatPoint1(p)

//简化
function formatPoint2(point: typeof p) {
    console.log(typeof point)
    console.log(point)
}
formatPoint2(p)

class IUse {
    constructor(age: number, gender: string) {
        this.age = age
        this.name = gender
    }

    name: string
    age: number
}
let user: IUse = {
    name: "444",
    age: 0,
}
function formatPoint23(use: keyof IUse) {
    console.log(use)
}

console.log(formatPoint23('name'))

/**
 * 注意: typeof只能用来查询变量或者属性的类型, 无法查询其他形式的类型(比如函数返回值的类型)
 */
// let num14 : typeof p.x = 11
// console.log(typeof num14 )

// function add14(num1: number, num2: number) {
//     return num1 + num2
// }
// console.log(add14(1, 2))
// let add15 : typeof add14(1, 2) 会报错
