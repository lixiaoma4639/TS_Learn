/**
 * 内置泛型工具类Partial<Type>, 用来创建一个类型, 将Type的所有属性设置为可选
 * 构造出来的新的Partial<Type>结构和Type相同, 但所有属性变为可选的了
 */
interface Props{
    id: string,
    children: number[]
}

type PartialProps = Partial<Props>

let p1: Props = {
    id: '234234',
    children: [1, 2, 3]
}
let p2: PartialProps = {
    id: '2342345'
}

/**
 * 内置泛型工具类ReadOnly<Type>, 用来创建一个类型, 将Type的所有属性设置为可选
 */
type ReadOnlyProps = Readonly<Props>
let p3 : ReadOnlyProps = { 
    id: '234234',
    children: [1, 2, 3]
}
// p3.id = '4234234' 会报错

/**
 * 内置泛型工具类Pick<Type, K extends keyof Type>, 用来创建一个类型, 重新构造一个新类型
 * 1. 第一个类型参数表明选择谁的属性, 第二个参数意思是选择哪几个属性
 * 2. 第二个类型变量传入的属性名称必须是第一个类型变量中存在的属性
 */
type PickProps = Pick<Props, 'id'>
type PickProps2 = Pick<Props, 'id' | 'children'>
let p4: PickProps = {
    id: '23'  
}
let p5: PickProps2 = {
    id: '23',
    children: []
}


/**
 * 内置泛型工具类Record<Keys, Type>, 用来构造一个对象类型, 该对象的属性键为keys, 属性类型为Type
 */
type RecordObj = Record<'a' | 'b' | 'c' | 'd', string[]>
let recordObj : RecordObj = {
    a: ['1', '2'],
    b: ['1', '2'],
    c: ['1', '2'],
    d: ['b']
}
console.log(recordObj.a)