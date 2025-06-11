/**
 * 映射类型: 基于旧类型创建新类型(对象类型), 减少重复代码 
 * key in PropKeys 表示key可以是PropKeys联合类型中的任意一个, 类似与forin(let k in obj)
 * 映射类型:只可以在类型别名type中使用，不可以在接口中使用
 */
type PropKeys = 'name' | 'age' | 'height'
type type1 = { name: string, age: number, height: number}
type Type2 = {
    [key in PropKeys] : number
}

let type2: Type2 = {
    name: 0,
    age: 0,
    height: 0,
}

type Type3 = {
    [key in keyof Type2] : string
}
let type3: Type3 = {
    name: "",
    age: "",
    height: ""
}