 /**
  *  枚举成员是有默认值的, 从0开始自增的数值,
  *  也可以给枚举中的值设置初始化值
  */
//  enum Direction{
//     Up,
//     Down,
//     Left,
//     Right
//  }

enum Direction{
    Up = 100,
    Down,
    Left = 200,
    Right
 }

 function changeDirection(dir: Direction) {
    console.log(dir)
}
// changeDir('fff') 会报错
changeDirection(Direction.Left)



 /**
  * 字符串枚举,  字符串必须要设置值
  * ts中的类型在运行时转换为js代码, 会被移除掉
  * 但是枚举类型不会被移除, 因为枚举转换为js时, 被转变了一个直接调用的函数, 返回值是一个对象
  */
 enum DirectionStr{
    Up = 'up',
    Down = 'down',
    Left = 'let',
    Right = 'right'
 }
 //DirectionStr枚举的实际返回值是  { Up: 'up', Down: 'down', Left: 'let', Right: 'right' }
 console.log(DirectionStr)