let str0 = 'hello'

/**
 * const 修饰的是一个常量,  常量不能修改, 此处的str2的类型就是'hello ts', 也叫字面量类型
 * 
 * const str2 = 'hello ts' 的句子相当于 const str2 : 'hello ts' = 'hello ts' 
 */
const str2 : 'hello ts' = 'hello ts'
console.log(str2) 


/**
 * 字面量类型和联合类型经常一起使用,  方便使用,  保证输入内容不出错
 */
function changeDir(dir: 'up' | 'down') {
    console.log(dir)
}
// changeDir('fff') 会报错
changeDir('up')