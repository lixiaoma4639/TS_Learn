
/**
 * 1. 泛型中变量类型使用,号隔开
 * 2. keyof关键字接收一个对象类型, 生成其键名称(可能是字符串或数字)的联合类型 
 * 3. 在以下例子中, keyof Type实际上获取的就是person22对象中所有键的联合类型, 也就是(keyof Type == 'name' | 'age')
 * 4. 类型变量key受Type约束, 也就是Key只能是Type所有键中的任意一个, 或者说只能访问对象中存在的属性
 */
function getProp<Type, T, Key extends keyof Type>(obj: Type, key: Key) {
    console.log(key)
    return obj[key];
}
let person22 = {name: "lx", age: 10}
console.log(typeof person22)
console.log(getProp(person22, "name"))
console.log(getProp(person22, 'age'))
// console.log(getProp(person22, 'name2'))会报错
// console.log(getProp(person22, 'height')) 会报错
console.log(getProp(18, "toString"))
console.log(getProp('abc', 1))

