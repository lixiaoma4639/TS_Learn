
/**
 * class中默认值使用等号, 类似Java
 */
class Person {
    //实例属性
    age: number
    name: string
    gender = '男'//相当于  gender: string = '男' , 此处可以推断出类型, 可以省略string

    constructor(age: number, gender: string) {
        this.age = age
        this.gender = gender
    }

    //实例方法
    add(add : number) {
        this.age += add;
    }

    change: ((cn: string) => void) = (cn) => {
        this.name = cn
    }
}
let person = new Person(29, 'lx')
person.add(2)
console.log(person.age)