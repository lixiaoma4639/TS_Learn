//使用正则可以用来检测一个字符串中是否符合正则表达式的规则，严格区分大小写

//第一种写法
const email = /ABC/i //正则使用“/ /”表达
console.log(email.test('abcd'))

//第二种写法， 第一个参数是正则，第二个参数是匹配模式，i忽略大小写，
let reg = new RegExp("A", "i")
console.log(reg.test('abc'))

const aOrb = /a|b/
console.log(aOrb.test("ac"))