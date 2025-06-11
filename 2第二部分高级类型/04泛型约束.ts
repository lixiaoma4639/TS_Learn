/**
 * 泛型约束可以收缩类型，缩窄类型的取值范围
 */
//1添加具体类型
function id<T>(value: T[]) : T[] {
    console.log(value.length)
    return value;
}

//创建描述约束的接口ILength, 该接口要求提供Length属性
interface ILength {
    length: number
}

/**
 * 2通过extends关键字使用该接口, 为泛型(类型变量T) 添加约束
 * 该约束表示的含义就是:  传入的参数类型必须具有Length属性
 */
function ids<T extends ILength>(value: T) : T {
    console.log(value.length)
    return value;
}
console.log(ids([1, 2, 3]))
console.log(ids('abc'))
console.log(ids({length: 10,  name: 'lx'}))
