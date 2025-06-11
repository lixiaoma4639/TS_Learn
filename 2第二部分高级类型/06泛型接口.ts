interface IdFunc3{
    name: string
    (a: number, b: number): void
    (a: number, b: number, c: number): void
}
let fun3: IdFunc3 = (a: number, b: number) => a + b
console.log(fun3(1, 2))



interface IdFunc<Type>{
    id: (value: Type) => Type
    ids: () => Type[]
}

/**
 * 1. 在接口名称后添加<类型变量> ,  那么这个接口就变成了泛型接口
 * 2. 泛型接口的类型变量对接口中所有成员可见
 * 3. 在使用泛型接口时, 必须显式指定具体的类型, 比如let obj : IdFunc<number>
 */
let obj : IdFunc<number> = {
    // id(value) {
    //     return value
    // }, 
    id: (value) => value,
    ids(){
        return [1, 2, 4]
    }
}
console.log(obj.id(333))

/**
 * 泛型数组
 */
let numbers = [1, 2, 3]
let strArray: string[] = ['a', 'b' , 'c']
strArray.forEach((value, index, array) => {
    console.log(`${value}, ${index}`)
})