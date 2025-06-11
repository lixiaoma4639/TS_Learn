/**
 * ts中没有Java中的方法重载，需要通过交叉类型实现
 */
interface A {
    fn: (value: number) => string
}
interface B{
    fn: (value: string) => string
}

//会报错
// interface B extends A{
//     fn: (value: string) => string
// }

//交叉类型
type C = A & B

let c: C = {
    fn(value: number | string){
        return '';
    }
}
c.fn(1)
c.fn('222')
