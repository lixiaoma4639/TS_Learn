// let person0: {name: string, age: number, saHi(): void} = {
//     name: 'lx',
//     age: 19,
//     saHi() {
//         console.log("Hi...")
//     }
// }
// let person1: {name: string, age: number, saHi(): void} = {
//     name: 'zs',
//     age: 28,
//     saHi() {
//         console.log("Hi...")
//     }
// }

interface Base{
    //签名函数
    (api: string): (next: string ) => string
}
/**
 * 使用接口对上面的对象进行简化, 接口的写法与对象类型的三种写法一致
 * 接口的使用与type类型别名的区别
 *  1. 接口只能为对象指定类型
 *  2. type类型别名, 不仅能为对象指定类型, 而且可以给任意类型指定别名
 */
interface IPerson{
    name: string
    age: number
    saHi(): void
}

  
class Person3 implements IPerson {
    name: string;
    age: number;
  
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  
    saHi(): void {
      console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

let person0: IPerson = {
    name: 'lx',
    age: 19,
    saHi() {
        console.log("Hi...")
    },
    
}
let person1: IPerson = {
    name: 'zs',
    age: 28,
    saHi() {
        console.log("Hi...")
    }
}
console.log(person0.name , person0.age)
console.log(person1.name , person1.age)

//类型别名的语法相当于变量的声明
type IUser = {
    name: string
    age: number
    saHi(): void
}
let user1: IUser = {
    name: 'WangWu',
    age: 24,
    saHi() {
        console.log("Hi...")
    }
}
console.log(user1.name, user1.age)


//接口函数
interface Fun1{
    (aaa: string):boolean
}
let fun1 : Fun1 = (aaa) => aaa.length > 0
