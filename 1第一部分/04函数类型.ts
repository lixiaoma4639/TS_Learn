//普通函数写法
function add333(num1: number, num2: number): number {
    return num1+ num2
}
console.log(add333(1, 2))

/**
 * 同时指定参数, 返回值类型, 
 * 此处的 (num1: number, num2: number) => number 是变量add1的类型, 
 * 而等号后面的(num1 , num2) => {
                    return num1 + num2
            } 则是一个真正的函数
 */
const add1 : (num1: number, num2: number) => number = (num1 , num2  ) => {
    return num1 + num2
}
console.log(add1(2, 3))

/**
 * void 函数类型 
 */
function user333(name: string): void {
    console.log(name)
}
user333('lx')