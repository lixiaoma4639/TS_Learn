// let age: number = 19
//下面的句子可以推断出age是number类型
let age = 19
//age = 'fff' 会报错
console.log(age)

//返回值可以类型推断, 此处省略的返回的类型,  
function add(a: number, b: number) {
    return a+b;
}
console.log(add(1, 2))

//类型断言as HTMLAnchorElement, 类型Kotlin里的强制转换
// const aLink = document.getElementById('link') as HTMLAnchorElement
// console.log(aLink.href)