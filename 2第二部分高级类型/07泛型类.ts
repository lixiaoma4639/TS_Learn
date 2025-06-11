
/**
 * 1. 在类名称后添加<类型变量> ,  那么这个类就变成了泛型类
 * 2. 泛型类的类型变量对类中所有成员可见
 * 3. 在使用泛型类时, 不必显式指定具体的类型, 根据情况而定
 */
class GenNumber<NumberType> {
    default: NumberType
    add: (x: NumberType, y: NumberType) => {
        
    }
}
//此处如果省略类型变量，那么default的类型就是unknown
let gen = new GenNumber<number>()
gen.default = 10


class GenNumber2<NumberType> {
    default: NumberType
    add: (x: NumberType, y: NumberType) => {
        
    }

    constructor(props: NumberType) {
        this.default = props
    }
    
}
//可以省略类型变量
let gen2 = new GenNumber2(1)
console.log(gen2.add(1, 2))