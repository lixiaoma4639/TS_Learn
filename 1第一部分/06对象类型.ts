/**
 * 对象类型中变量的写法, 可以有以下3种写法
 */
//let person: {name: string; age: number; saHi(): void} = {
//let person: {name: string, age: number, saHi(): void} = {
let person: {
    name: string
    age: number
    saHi(): void
    bye: ()=>void
} = {
    name: 'lx',
    age: 19,
    saHi() {
        console.log("Hi...")
    },
    bye: ()=>{
        console.log("bye bye...")
    }
}

console.log(person.name)
console.log(person.age)
person.saHi()
person.bye()
