/**
 * 类型声明文件
 * declare关键字 用于类型声明，给其他js/ts文件中已经存在的变量声明类型，不会创建新的变量
 * 对于type interface这种只能在ts中使用的关键字，可以省略declare关键字
 * 对于let function这种可以在js和ts中使用的关键字，需要declare关键字修饰
 */
declare let count: number
declare let name: string

interface Point{
    x: number,
    y: number
}

declare let position: Point

export { count, name, position, Point}