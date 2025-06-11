/**
 * 当无法确定对象中有哪些属性(或者说对象中可以出现任意多个属性), 就需要用到索引签名类型
 * [key: string] 中[]是索引签名的固定写法， 该[key: string]表示可以添加任意名称的键，
 * 但是key必须是string类型,这里的key只是个占位符，可以更换为其他名称
 * 此时，凡是使用AnyObject类型的对象，都可以添加无数个string类型的key
 */
interface AnyObject{
    [key: string] : number
}
let obj: AnyObject = {
    a: 1,
    b: 2,
    c: 3
}


/**
 * array中的[n: number]: T;就是索引签名类型
 */
let arr = [1, 2, 3]
arr.forEach(item => {
    
})

/**
 * 自定义模拟数组Array的写法
 */
interface MyArray<T>{
    [index: number] : T
}
let myArr : MyArray<boolean> = [true, false , true]
console.log(myArr[2])
console.log(myArr[3])